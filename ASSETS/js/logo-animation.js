gsap.registerPlugin(MotionPathPlugin, Draggable);

const logo = document.querySelector(".about__logo-img");
const revealElements = document.querySelectorAll(".about-reveal");

if (logo) {
  let floatTween;
  let currentScale = 1;
  let isDragging = false;

  function startFloating() {
    if (floatTween) floatTween.kill();

    floatTween = gsap.to(logo, {
      y: "-=3",
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  function stopFloating() {
    if (floatTween) {
      floatTween.kill();
      floatTween = null;
    }
  }

  gsap.set(logo, {
    opacity: 0,
    scale: 0.82,
    rotation: -18,
    x: 0,
    y: 0,
    transformOrigin: "50% 50%"
  });

  const introTl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    },
    onComplete: () => {
      startFloating();
    }
  });

  introTl
    .to(logo, {
      opacity: 1,
      duration: 0.15
    })
    .to(logo, {
      duration: 1.4,
      scale: 1,
      motionPath: {
        path: [
          { x: -38, y: 18 },
          { x: -14, y: -26 },
          { x: 12, y: -10 },
          { x: 0, y: 0 }
        ],
        curviness: 1.4,
        autoRotate: true
      },
      ease: "power2.out"
    }, 0)
    .to(logo, {
      duration: 0.5,
      rotation: 0,
      ease: "back.out(2)"
    }, "-=0.35");

  logo.addEventListener("mouseenter", () => {
    if (isDragging) return;

    currentScale = 1.06;

    gsap.to(logo, {
      scale: currentScale,
      duration: 0.22,
      ease: "power2.out",
      overwrite: "auto"
    });
  });

  logo.addEventListener("mouseleave", () => {
    if (isDragging) return;

    currentScale = 1;

    gsap.to(logo, {
      scale: currentScale,
      duration: 0.22,
      ease: "power2.out",
      overwrite: "auto"
    });
  });

  Draggable.create(logo, {
    type: "x,y",
    onPress() {
      isDragging = true;
      stopFloating();
      gsap.killTweensOf(logo);
      currentScale = 1.08;

      gsap.to(logo, {
        scale: currentScale,
        duration: 0.2,
        ease: "power2.out"
      });
    },
    onDrag() {
      gsap.to(logo, {
        rotation: this.x * 0.35,
        duration: 0.12,
        overwrite: true
      });
    },
    onRelease() {
      currentScale = 1;
      gsap.to(logo, {
        scale: currentScale,
        duration: 0.2,
        ease: "power2.out"
      });
    },
    onDragEnd() {
      isDragging = false;

      gsap.to(logo, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.45)",
        onComplete: () => {
          startFloating();
        }
      });
    }
  });
}

if (revealElements.length) {
  gsap.to(revealElements, {
    opacity: 1,
    y: 0,
    duration: 0.85,
    ease: "power3.out",
    stagger: 0.08,
    delay: 0.35
  });
}