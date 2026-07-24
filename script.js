// ==========================================================================
// SYSTEM INITIALIZER TIMELINE DRIVEN ASYNC LOADER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const loaderLogo = document.querySelector(".loader-logo-container");
  const bootDetails = document.querySelector(".boot-details");
  const progressFill = document.querySelector(".progress-fill");
  const loader = document.getElementById("loader");

  const tl = gsap.timeline();

  tl.to(loaderLogo, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "back.out(1.7)",
  });

  tl.to({}, { duration: 2 });

  tl.to(loaderLogo, {
    opacity: 0,
    scale: 0.8,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => {
      loaderLogo.style.display = "none";
    },
  });

  tl.to(bootDetails, {
    opacity: 1,
    duration: 0.5,
    ease: "power1.out",
  });

  tl.to(progressFill, {
    width: "100%",
    duration: 2.5,
    ease: "power1.inOut",
    onComplete: () => {
      if (loader) {
        loader.classList.add("fade-out");
      }
    },
  });
});

// ==========================================================================
// THREE.JS GLOBAL SPACE ENVIRONMENT BACKGROUND CANVAS
// ==========================================================================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bgCanvas"),
  alpha: true,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 1000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  );
}

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3),
);

const material = new THREE.PointsMaterial({
  color: 0x4fa9d8,
  size: 0.03,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate();

// Mouse tracking parallax vector generation
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  gsap.to(particles.rotation, {
    x: y * 0.15,
    y: x * 0.15,
    duration: 1.2,
    ease: "power2.out",
  });
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================================================
// HUD TRACKERS & INTERACTIVE SYSTEMS REVEAL LOGIC
// ==========================================================================
const cursorGlow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", (e) => {
  gsap.to(cursorGlow, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (particles) {
    particles.position.y = scrollY * 0.0015;
  }

  const scrollCue = document.querySelector(".scroll-cue");
  if (scrollY > 100) {
    gsap.to(scrollCue, { opacity: 0, duration: 0.3 });
  } else {
    gsap.to(scrollCue, { opacity: 0.7, duration: 0.3 });
  }
});

// Single View Profile Scroll reveal controllers (Founder & Co-Founder)
const profiles = [
  { section: "#founder", title: "FOUNDER" },
  { section: "#co-founder", title: "CO-FOUNDER" },
];

profiles.forEach((prof) => {
  const section = document.querySelector(prof.section);
  const title = section.querySelector(".section-glitch-text");
  const card = section.querySelector(".glass-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(title, {
    opacity: 1,
    scale: 1.1,
    duration: 0.5,
    ease: "power2.out",
  })
    .to(title, {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power1.in",
      delay: 0.3,
    })
    .to(
      card,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
      },
      "-=0.2",
    );
});

// ==========================================================================
// SWIPER COVERFLOW INITIALIZATION FOR CORE TEAM
// ==========================================================================
const teamSection = document.querySelector("#architects");
// Note: the "CORE TEAM" title is now static and always visible (see
// .team-title-static in style.css) — no fade/reveal timeline needed for it.

// Initialize Swiper Carousel
const teamSwiper = new Swiper(".teamSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0, // Keep cards completely straight (no tilt)
    stretch: 0, // Space between cards
    depth: 150, // Distance of background cards
    modifier: 1.5, // Multiplier for the depth and stretch effect
    slideShadows: false, // Turned off since we use our custom neon box-shadows
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Interactive Focus Scaling Handlers (Pause auto-scroll when user hovers)
const swiperContainer = document.querySelector(".teamSwiper");

swiperContainer.addEventListener("mouseenter", () => {
  teamSwiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
  teamSwiper.autoplay.start();
});

// Dynamic HUD Nav Dot Update Cycle
const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".nav-dot");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("class").includes("hero")
        ? "hero"
        : section.getAttribute("id");
    }
  });

  if (navDots.length > 0) {
    navDots.forEach((dot) => {
      dot.classList.remove("active");
      if (dot.getAttribute("data-target") === current) {
        dot.classList.add("active");
      }
    });
  }
});

// ==========================================================================
// ACHIEVEMENTS EXPLORER — AI GUIDE REVEAL & SMOOTH NAVIGATION
// ==========================================================================
const achievementsSection = document.querySelector("#achievements");

if (achievementsSection) {
  const achvTitle = achievementsSection.querySelector(".section-glitch-text");
  const achvGuide = achievementsSection.querySelector(".achv-guide");
  const achvCards = achievementsSection.querySelectorAll(".achv-card");

  // Section title reveal, matching the Core Team title's calmer, lingering pace
  const achvTl = gsap.timeline({
    scrollTrigger: {
      trigger: achievementsSection,
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  });

  achvTl
    .to(achvTitle, {
      opacity: 1,
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out",
    })
    .to(achvTitle, {
      opacity: 1,
      scale: 1.1,
      duration: 1.2,
    })
    .to(achvTitle, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power1.inOut",
    })
    .to(
      achvGuide,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
      },
      "-=0.1",
    );

  // Gallery cards no longer auto-reveal on scroll — they stay hidden inside
  // the collapsed .achv-grid until the user picks an option from the AI
  // guide below. This keeps the chatbot interaction first in the flow.
  achvCards.forEach((card) => {
    gsap.set(card, { opacity: 1, y: 0 }); // cards are scroll-ready; the parent grid controls visibility
  });

  // AI guide buttons: reveal the gallery (if not already open), then
  // smooth-scroll to the matching achievement card. No reload/modal.
  const achvButtons = achievementsSection.querySelectorAll(".achv-btn");
  const achvGrid = achievementsSection.querySelector(".achv-grid");

  achvButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetCard = document.getElementById(targetId);
      if (!targetCard) return;

      const wasRevealed = achvGrid.classList.contains("is-revealed");
      achvGrid.classList.add("is-revealed");

      // Give the grid a moment to expand before scrolling, only on first reveal
      const scrollDelay = wasRevealed ? 0 : 350;

      setTimeout(() => {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });

        // Brief highlight pulse so the user clearly sees where the guide sent them
        targetCard.classList.add("achv-focus");
        setTimeout(() => {
          targetCard.classList.remove("achv-focus");
        }, 1800);
      }, scrollDelay);
    });
  });
}

// ==========================================================================
// PROJECTS SECTION — DIGITAL FOLDER REPOSITORY REVEAL
// ==========================================================================
const projectsSection = document.querySelector("#projects");

if (projectsSection) {
  const projectsSubtitle = projectsSection.querySelector(".projects-subtitle");
  const projectFolders = projectsSection.querySelectorAll(".project-folder");

  // Subtitle fades in once the section enters view; the "PROJECTS" title
  // itself is static and always visible (same pattern as Core Team).
  gsap.to(projectsSubtitle, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: projectsSection,
      start: "top 65%",
      toggleActions: "play none none reverse",
    },
  });

  // Folders appear sequentially — staggered ~120ms apart, smooth and elegant,
  // "opening the digital repository" rather than popping in all at once.
  gsap.to(projectFolders, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: projectsSection,
      start: "top 55%",
      toggleActions: "play none none reverse",
    },
  });
}

// ==========================================================================
// CLOSING SECTION — THANK YOU + FOOTER REVEAL
// ==========================================================================
const closingSection = document.querySelector("#closing");

if (closingSection) {
  const thankyouBlock = closingSection.querySelector(".thankyou-block");

  // Simple, elegant fade-in as the closing section enters the viewport
  gsap.to(thankyouBlock, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: closingSection,
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });
}
// ==========================================================================
// INNER ORBIT — EXTENDED TEAM SCROLL REVEAL
// ==========================================================================
const innerOrbitSection = document.querySelector("#inner-orbit");

if (innerOrbitSection) {
  const orbitCards = innerOrbitSection.querySelectorAll(".flip-card");

  // Staggered reveal as section enters viewport
  gsap.fromTo(
    orbitCards,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: innerOrbitSection,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    },
  );
}
/* ============================= */
/* Hackathon Swiper Init         */
/* ============================= */

const hackathonSwiper = new Swiper(".hackathon-swiper", {
  loop: true,
  effect: "fade", // smooth + elegant
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,

  navigation: {
    nextEl: ".hackathon-next",
    prevEl: ".hackathon-prev",
  },

  on: {
    init: function () {
      // Prevent layout shift
      this.el.style.opacity = 1;
    },
  },
});
