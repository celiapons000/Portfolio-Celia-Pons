const projectRevealElements = document.querySelectorAll(".project-reveal");

if (projectRevealElements.length) {
  gsap.to(projectRevealElements, {
    opacity: 1,
    y: 0,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.08,
    delay: 0.2
  });
}