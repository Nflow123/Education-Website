gsap.from("header.header", {
  duration: 1,
  y: "-100px",
  opacity: 0.5,
});
gsap.from("header.header .logo", {
  duration: 0.5,
  opacity: 0,
  delay: 0.2,
});

gsap.from("header.header .nav", {
  duration: 0.5,
  opacity: 0.7,
  y: "-20px",
  delay: 0.5,
});

gsap.from(".landing-page .semi-title", {
  duration: 1,
  y: "-50px",
  delay: 0.5,
  opacity: 0,
  x: 30,
});
gsap.from(".landing-page .title", {
  duration: 1,
  y: "50px",
  x: 30,
  delay: 0.5,
  opacity: 0,
});
gsap.from(".landing-page a", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  y: 10,
  x: 10,
});
gsap.from(".landing-page img", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  y: "-30px",
  x: "-50px",
});
