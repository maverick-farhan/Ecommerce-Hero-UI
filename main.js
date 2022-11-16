const tl = gsap.timeline();

tl.from("#prt1", {
  delay: 1,
  opacity: 0,
  duration: 1,
  y: 30,
});
tl.from(".items", {
  opacity: 0,
  y: 10,
  duration: 0.4,
})
  .from("#prt2", {
    opacity: 0,
    y: 10,
  })
  .from("h1.main", {
    opacity: 0,
    scale: 1.4,
    duration: 1,
  })
  .from("img.just", {
    opacity: 0,
    y: 20,
    duration: 1,
  })
  .from("#btn-store", {
    opacity: 0,
    y: 30,
    duration: 1,
  })
  .from([".img3", ".img2"], {
    x: -40,
    scale: 1.4,
    opacity: 0,
    duration: 1,
  })
  .from(".img1", {
    x: 30,
    scale: 1.4,
    opacity: 0,
    duration: 1,
  });
