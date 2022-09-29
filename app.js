const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".nav-links", { x: "-100%" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".nav-links", { x: "0%" });
    gsap.fromTo(
      ".nav-links a",
      { y: 0, opacity: 0 },
      { y: 20, opacity: 1, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});

const tl = gsap.timeline({
  default: { duration: 1, ease: "power1.out" },
});

tl.fromTo(".first-left-text h1", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
tl.fromTo(
  ".first-right-image",
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0 },
  "<"
);
tl.fromTo(".first-left-text h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
tl.fromTo(".first-left-button", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });

tl.fromTo(
  ".first-right-image img",
  { y: 0 },
  { y: -10, yoyo: true, repeat: -1 }
);

//clients

const tlClient = gsap.timeline({
  scrollTrigger: {
    trigger: ".clients",
    // markers: { startColor: "green", endColor: "blue", fontSize: '50px' },
    start: "-500%",
    end: "-300%",
    scrub: true,
  },
});

tlClient.fromTo(".clients-image", { scale: 0.5 }, { scale: 1, stagger: 0.5 });

// ABOUT SECTION ANIMATION

const tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    // markers: { startColor: "red", endColor: "blue" },
    start: "-40%",
    end: "-15%",
    scrub: true,
  },
});

tlAbout.fromTo(".about-main h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
tlAbout.fromTo(".about-left", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
tlAbout.fromTo(
  ".about-right",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 },
  "<"
);

tlAbout.fromTo(
  ".about-left ul li",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 1 }
);

tlAbout.fromTo(
  ".about-right ul li",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 1 },
  "<"
);

//Why US Section

const tlWhyUs = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-us",
    // markers: { startColor: "green", endColor: "yellow" },
    start: "-50%",
    end: "-20%",
    scrub: true,
  },
});

tlWhyUs.fromTo(".why-us-left", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
tlWhyUs.fromTo(
  ".why-us-right",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

//Skills Section

const tlSkill = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    // markers: { startColor: "green", endColor: "yellow" },
    start: "-100%",
    end: "0%",
    scrub: true,
  },
});

tlSkill.fromTo(".skill-left", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
tlSkill.fromTo(
  ".skill-right",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

//Services

const tlServices = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    // markers: { startColor: "green", endColor: "yellow" },
    start: "-20%",
    end: "-5%",
    scrub: true,
  },
});

tlServices.fromTo(".heading", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
tlServices.fromTo(
  ".services-card",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 1 },
  "<"
);

//CTA

const tlCta = gsap.timeline({
  scrollTrigger: {
    trigger: ".cta",
    // markers: { startColor: "green", endColor: "yellow" },
    start: "-100%",
    end: "-30%",
    scrub: true,
  },
});

tlCta.fromTo(".cta-heading", { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
tlCta.fromTo(".cta-btn", { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "<");

//PORTFOLIO

const tlPortfolio = gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio",
    // markers: { startColor: "pink", endColor: "yellow" },
    start: "-20%",
    end: "10%",
    scrub: true,
  },
});

tlPortfolio.fromTo(
  ".portfolio-heading",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);
tlPortfolio.fromTo(
  ".portfolio-card",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 1 },
  "<"
);

//Team

const tlTeam = gsap.timeline({
  scrollTrigger: {
    trigger: ".team",
    // markers: { startColor: "black", endColor: "pink" },
    start: "-20%",
    end: "-10%",
    scrub: true,
  },
});

tlTeam.fromTo(".team-heading", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
tlTeam.fromTo(
  ".team-card",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 1 },
  "<"
);

//PROJECT IN MIND

const tlContact = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    // markers: { startColor: "green", endColor: "black" },
    start: "-60%",
    end: "-20%",
    scrub: true,
  },
});

tlContact.fromTo(
  ".contact-heading",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1 }
);

tlContact.fromTo(".contact-left", { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
tlContact.fromTo(
  ".contact-right",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

//Footer

const tlFooter = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    // markers: { startColor: "black", endColor: "blue" },
    start: "-80%",
    end: "-20%",
    scrub: true,
  },
});

tlFooter.fromTo(
  ".news-letter-heading",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1 }
);

tlFooter.fromTo(".subscribe", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

tlFooter.fromTo(".footer-logo", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

tlFooter.fromTo(".useful-link", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

tlFooter.fromTo(".our-services", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

tlFooter.fromTo(".social-network", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });

const groups = gsap.utils.toArray(".accordion-group");
const menus = gsap.utils.toArray(".accordion-menu");
const animations = [];

groups.forEach((group) => createAnimation(group));

menus.forEach((menu) => {
  menu.addEventListener("click", () => toggleAnimation(menu));
});

function toggleAnimation(menu) {
  // Save the current state of the clicked animation
  const selectedReversedState = menu.animation.reversed();

  // Reverse all animations
  animations.forEach((animation) => animation.reverse());

  // Set the reversed state of the clicked accordion element to the opposite of what it was before
  menu.animation.reversed(!selectedReversedState);
}

function createAnimation(element) {
  const menu = element.querySelector(".accordion-menu");
  const box = element.querySelector(".accordion-content");

  gsap.set(box, { minHeight: "auto" });

  // Keep a reference to the animation on the menu item itself
  const tween = gsap.from(box, {
    height: 0,
    duration: 0.5,
    ease: "power1.inOut",
    reversed: true,
  });

  menu.animation = tween;
  animations.push(tween);
}
