const timeline = gsap.timeline({ defaults: { duration: 1.4 } });
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".h1", { opacity: 0 })
  .from(".description", { opacity: 0, stagger: 0.5 })
  .from(".images", { x: "-100vw" }, 2)
  .from(".matress", { x: "-100%" }, "<0.7")
  .from("aside", { x: "-100vh" })
  .from(".box4", { x: "100vw" });
