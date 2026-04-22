const gallery = document.querySelector(".work-gallery");

const getWorkData = () => {
  fetch("ASSETS/Data/work.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("No se pudo cargar work.json");
      }
      return res.json();
    })
    .then((data) => {
      renderWork(data.projects);
      initCardAnimations();
    })
    .catch((err) => console.log("Error cargando JSON:", err));
};

const renderWork = (projects) => {
  let html = "";

  projects.forEach((project) => {
    html += `
      <article class="work-card">
        <a href="${project.link}" class="work-card__link">
          <img 
            src="${project.image}" 
            alt="${project.alt}" 
            class="work-card__image"
          >
          <div class="work-card__info">
            <h3 class="work-card__title">${project.title}</h3>
            <p class="work-card__category">${project.category}${project.year ? " · " + project.year : ""}</p>
          </div>
        </a>
      </article>
    `;
  });

  gallery.innerHTML = html;
};

const splitText = (element) => {
  const originalText = element.textContent.trim();
  element.innerHTML = "";

  originalText.split("").forEach((char) => {
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.classList.add("work-card__space");
    } else {
      span.textContent = char;
    }

    element.appendChild(span);
  });

  return element.querySelectorAll("span");
};

const initDesktopHoverAnimation = (cards) => {
  cards.forEach((card) => {
    const title = card.querySelector(".work-card__title");
    const category = card.querySelector(".work-card__category");

    const titleLetters = splitText(title);
    const categoryLetters = splitText(category);
    const allLetters = [...titleLetters, ...categoryLetters];

    gsap.set(allLetters, {
      opacity: 0,
      y: 15
    });

    card.addEventListener("mouseenter", () => {
      gsap.to(allLetters, {
        opacity: 1,
        y: 0,
        stagger: 0.01,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(allLetters, {
        opacity: 0,
        y: 15,
        duration: 0.25,
        ease: "power2.in",
        overwrite: "auto"
      });
    });
  });
};

const initMobileScrollAnimation = (cards) => {
  cards.forEach((card) => {
    const title = card.querySelector(".work-card__title");
    const category = card.querySelector(".work-card__category");
    const info = card.querySelector(".work-card__info");

    const titleLetters = splitText(title);
    const categoryLetters = splitText(category);

    gsap.set(info, {
      opacity: 0
    });

    gsap.set(titleLetters, {
      opacity: 0,
      y: 16
    });

    gsap.set(categoryLetters, {
      opacity: 0,
      y: 16
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          gsap.to(info, {
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });

          gsap.to(titleLetters, {
            opacity: 1,
            y: 0,
            stagger: 0.01,
            duration: 0.4,
            delay: 0.05,
            ease: "power3.out",
            overwrite: "auto"
          });

          gsap.to(categoryLetters, {
            opacity: 1,
            y: 0,
            stagger: 0.008,
            duration: 0.35,
            delay: 0.16,
            ease: "power3.out",
            overwrite: "auto"
          });

          observer.unobserve(card);
        });
      },
      {
        threshold: 0.35
      }
    );

    observer.observe(card);
  });
};

const initCardAnimations = () => {
  const cards = document.querySelectorAll(".work-card");
  const isMobile = window.matchMedia("(max-width: 38rem)").matches;

  if (isMobile) {
    initMobileScrollAnimation(cards);
  } else {
    initDesktopHoverAnimation(cards);
  }
};

if (gallery) {
  getWorkData();
}