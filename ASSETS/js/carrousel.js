let projectsSection = document.querySelector(".projects");
let homeData = [];
let projectsHTML = ``;
let mobileBreakpoint = 640;
let isMobileView = window.innerWidth <= mobileBreakpoint;
let mobileCarouselIntervals = [];

const clearMobileCarousels = () => {
  mobileCarouselIntervals.forEach(interval => clearInterval(interval));
  mobileCarouselIntervals = [];
};

const getHomeData = () => {
  fetch("ASSETS/Data/home.json")
    .then(response => {
      if (response.ok !== true) {
        console.log("Error al cargar el JSON");
      }

      return response.json();
    })
    .then(data => {
      homeData = data.carousels;
      handleHomeRender();
      console.log(homeData);
    })
    .catch(error => {
      console.log("Ha habido un error en fetch:", error);
    });
};

const getTagsHTML = (tags) => {
  let tagsHTML = ``;

  tags.forEach(tag => {
    tagsHTML += `<span class="project-carousel__tag">${tag}</span>`;
  });

  return tagsHTML;
};

const getSlidesHTML = (images, title) => {
  let slidesHTML = ``;

  images.forEach((image, i) => {
    slidesHTML += `
      <div class="swiper-slide project-carousel__slide">
        <img src="${image}" alt="${title} ${i + 1}">
      </div>
    `;
  });

  return slidesHTML;
};

const getMobileSlidesHTML = (images, title) => {
  let slidesHTML = ``;
  let dotsHTML = ``;

  images.forEach((image, i) => {
    slidesHTML += `
      <figure class="project-carousel__slide project-carousel__mobile-slide">
        <img src="${image}" alt="${title} ${i + 1}">
      </figure>
    `;

    dotsHTML += `
      <button
        class="project-carousel__mobile-dot ${i === 0 ? "is-active" : ""}"
        type="button"
        aria-label="Ir a la imagen ${i + 1} de ${title}"
        data-index="${i}">
      </button>
    `;
  });

  return `
    <div class="project-carousel__track project-carousel__track--mobile">
      <div class="project-carousel__mobile-slides">
        ${slidesHTML}
      </div>

      ${
        images.length > 1
          ? `<div class="project-carousel__mobile-dots">${dotsHTML}</div>`
          : ``
      }
    </div>
  `;
};

const getDesktopCarouselHTML = (project) => {
  let alignmentClass = "";
  let tagGroupClass = "";
  let contentClass = "";

  if (project.alignment === "right") {
    alignmentClass = "project-carousel--right";
    tagGroupClass = "project-carousel__tag-group project-carousel__tag-group--top-right";
    contentClass = "project-carousel__content project-carousel__content--bottom-left";
  } else {
    alignmentClass = "project-carousel--left";
    tagGroupClass = "project-carousel__tag-group";
    contentClass = "project-carousel__content project-carousel__content--bottom-right";
  }

  return `
    <article class="project-carousel ${alignmentClass}">
      <div class="project-carousel__frame">

        <div class="${tagGroupClass}">
          ${getTagsHTML(project.tags)}
        </div>

        <div class="swiper project-carousel__swiper">
          <div class="swiper-wrapper">
            ${getSlidesHTML(project.images, project.title)}
          </div>
        </div>

        <div class="${contentClass}">
          <h2 class="project-carousel__title">${project.title}</h2>
          <a href="${project.link}" class="project-carousel__link">
            VIEW PROJECT <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="project-carousel__indicators swiper-pagination"></div>

      </div>
    </article>
  `;
};

const getMobileCarouselHTML = (project) => {
  let alignmentClass = "";
  let tagGroupClass = "";
  let contentClass = "";

  if (project.alignment === "right") {
    alignmentClass = "project-carousel--right";
    tagGroupClass = "project-carousel__tag-group project-carousel__tag-group--top-right";
    contentClass = "project-carousel__content project-carousel__content--bottom-left";
  } else {
    alignmentClass = "project-carousel--left";
    tagGroupClass = "project-carousel__tag-group";
    contentClass = "project-carousel__content project-carousel__content--bottom-right";
  }

  return `
    <article class="project-carousel ${alignmentClass}">
      <div class="project-carousel__frame">

        <div class="${tagGroupClass}">
          ${getTagsHTML(project.tags)}
        </div>

        ${getMobileSlidesHTML(project.images, project.title)}

        <div class="${contentClass}">
          <h2 class="project-carousel__title">${project.title}</h2>
          <a href="${project.link}" class="project-carousel__link">
            VIEW PROJECT <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </article>
  `;
};

const renderHomeDesktop = () => {
  clearMobileCarousels();
  projectsHTML = ``;

  homeData.forEach(project => {
    projectsHTML += getDesktopCarouselHTML(project);
  });

  projectsSection.innerHTML = projectsHTML;

  setTimeout(() => {
    initHomeSwipers();
  }, 100);
};

const renderHomeMobile = () => {
  clearMobileCarousels();
  projectsHTML = ``;

  homeData.forEach(project => {
    projectsHTML += getMobileCarouselHTML(project);
  });

  projectsSection.innerHTML = projectsHTML;

  setTimeout(() => {
    initMobileCarousels();
    initMobileHomeReveal();
  }, 100);
};

const handleHomeRender = () => {
  if (window.innerWidth <= mobileBreakpoint) {
    renderHomeMobile();
  } else {
    renderHomeDesktop();
  }
};

const initHomeSwipers = () => {
  let allCarousels = document.querySelectorAll(".project-carousel");

  allCarousels.forEach(carousel => {
    let swiperContainer = carousel.querySelector(".project-carousel__swiper");
    let pagination = carousel.querySelector(".swiper-pagination");

    if (swiperContainer) {
      new Swiper(swiperContainer, {
        slidesPerView: 1,
        loop: true,
        speed: 900,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        },

        pagination: {
          el: pagination,
          clickable: true,
          bulletClass: "project-carousel__line",
          bulletActiveClass: "is-active",
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          }
        }
      });
    }
  });
};

const initMobileCarousels = () => {
  const carousels = document.querySelectorAll(".project-carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".project-carousel__mobile-slides");
    const slides = carousel.querySelectorAll(".project-carousel__mobile-slide");
    const dots = carousel.querySelectorAll(".project-carousel__mobile-dot");

    if (!track || slides.length <= 1) return;

    let currentIndex = 0;

    const updateSlider = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
      });
    };

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.index);
        updateSlider();
      });
    });

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }, 2800);

    mobileCarouselIntervals.push(interval);
  });
};

const splitTextChars = (element) => {
  const originalText = element.textContent.trim();
  element.innerHTML = "";

  originalText.split("").forEach((char) => {
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.classList.add("project-carousel__space");
    } else {
      span.textContent = char;
    }

    element.appendChild(span);
  });

  return element.querySelectorAll("span");
};

const splitTextWords = (element) => {
  const originalText = element.textContent.trim();
  element.innerHTML = "";

  const words = originalText.split(" ");

  words.forEach((word, index) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word;
    wordSpan.classList.add("project-carousel__word");
    element.appendChild(wordSpan);

    if (index < words.length - 1) {
      const spaceSpan = document.createElement("span");
      spaceSpan.innerHTML = "&nbsp;";
      spaceSpan.classList.add("project-carousel__space");
      element.appendChild(spaceSpan);
    }
  });

  return element.querySelectorAll(".project-carousel__word");
};

const initMobileHomeReveal = () => {
  const cards = document.querySelectorAll(".project-carousel");

  cards.forEach((card) => {
    const tagGroup = card.querySelector(".project-carousel__tag-group");
    const title = card.querySelector(".project-carousel__title");
    const link = card.querySelector(".project-carousel__link");
    const track = card.querySelector(".project-carousel__track");

    if (!title || !link || !track) return;

    const titleWords = splitTextWords(title);
    const linkLetters = splitTextChars(link);

    gsap.set(tagGroup, {
      opacity: 0,
      y: 14
    });

    gsap.set(titleWords, {
      opacity: 0,
      y: 16
    });

    gsap.set(linkLetters, {
      opacity: 0,
      y: 16
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          card.classList.add("is-visible");

          gsap.to(tagGroup, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });

          gsap.to(titleWords, {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.45,
            delay: 0.06,
            ease: "power3.out",
            overwrite: "auto"
          });

          gsap.to(linkLetters, {
            opacity: 1,
            y: 0,
            stagger: 0.008,
            duration: 0.35,
            delay: 0.18,
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

window.addEventListener("resize", () => {
  let currentMobileView = window.innerWidth <= mobileBreakpoint;

  if (currentMobileView !== isMobileView) {
    isMobileView = currentMobileView;
    handleHomeRender();
  }
});

if (projectsSection) {
  getHomeData();
}