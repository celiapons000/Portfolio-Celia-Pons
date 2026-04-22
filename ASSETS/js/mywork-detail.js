const myworkRevealElements = document.querySelectorAll(".mywork-reveal");

if (myworkRevealElements.length) {
  gsap.to(myworkRevealElements, {
    opacity: 1,
    y: 0,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.08,
    delay: 0.2
  });
}