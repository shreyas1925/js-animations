const timeline = gsap.timeline({ defaults: { duration: 1.4 } });
timeline
  .to("span", { y: "0%", stagger: 0.25, ease: "power1.out" })
  .to(".slider", { y: "-100%", delay: 0.5, ease: "power1.out" })
  .to(".intro", { y: "-100%" }, "-=1.5")
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".h1", { opacity: 0, display: "none" })
  .from(".description", { opacity: 0, stagger: 0.5, display: "none" })
  .from(".images", { x: "-100vw", display: "none" }, 2)
  .from(".matress", { x: "-100%", display: "none" }, "<0.7")
  .from("aside", { x: "-100vh", display: "none" })
  .from(".box4", { y: "100vh", display: "none" });
