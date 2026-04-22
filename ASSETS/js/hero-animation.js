window.addEventListener("load", () => {
  const leftMeta = document.querySelector(".hero__meta--left");
  const rightMeta = document.querySelector(".hero__meta--right");
  const title = document.querySelector(".hero__title");
  const subtitle = document.querySelector(".hero__subtitle");

  if (!title) return;

  const tl = gsap.timeline();

  tl
    // 👇 TÍTULO PRIMERO
    .from(title, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "expo.out"
    })

    // MADRID
    .from(leftMeta, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.6")

    // SUBTÍTULO
    .from(subtitle, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")

    // PORTFOLIO
    .from(rightMeta, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");
});