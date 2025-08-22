import { useEffect, useRef } from "react";
import "./index.css";

function Section({ id, title, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("show");
      return;
    }

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add("show");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="fade-blur" style={{ padding: "40px 20px" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
