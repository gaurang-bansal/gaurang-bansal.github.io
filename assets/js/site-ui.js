(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealOnScroll() {
    const nodes = document.querySelectorAll(
      ".impact-card, .project-card, .publications ol.bibliography > li, .projects-intro, .pubs-intro, .cta-row"
    );
    nodes.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${Math.min(i * 0.05, 0.45)}s`;
    });

    if (reduce) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((el) => io.observe(el));
  }

  function animateCounters() {
    const values = document.querySelectorAll(".impact-value[data-count]");
    if (!values.length) return;

    const run = (el) => {
      const target = Number(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduce) {
        el.textContent = `${target}${suffix}`;
        return;
      }
      const duration = 1100;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased);
        el.textContent = `${current.toLocaleString()}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    values.forEach((el) => io.observe(el));
  }

  function tiltCards() {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
        card.classList.add("is-tilting");
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        card.classList.remove("is-tilting");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    revealOnScroll();
    animateCounters();
    tiltCards();
  });
})();
