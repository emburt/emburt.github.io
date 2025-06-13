gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".container"
});


gsap.to(".intro", {
  scrollTrigger: {
    trigger: ".intro",
    toggleActions: "restart none none none"
  }, 
  duration: 1.5, 
  backgroundColor: "#000000", 
  ease: "none"
});

gsap.to(".gas", {
  scrollTrigger: {
    trigger: ".gas",
    toggleActions: "restart none none none"
  }, 
  duration: 1.5, 
  backgroundColor: "#000000", 
  ease: "none"
});

gsap.to(".gas-desc", {
  scrollTrigger: {
    trigger: ".spiral-gas",
    toggleActions: "restart none none none"
  }, 
  duration: 4, 
  opacity: 1, 
  ease: "power1"
});


ScrollTrigger.create({
     trigger: "#gas-txt", // The element to trigger the animation
     start: "top 100%", // When the trigger element enters the viewport
     end: "bottom 0%", // When the trigger element leaves the viewport
     // once: true, Run the animation only once
     onEnter: () => {
       gsap.from("#gas-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in
       gsap.to("gas-txt", { opacity: 0, duration: 1, delay: 10, ease: "power2.out" }); // Fade out after 3 seconds
     },
     onLeaveBack: () => {
       gsap.from("#gas-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in on scroll back up
     }
   });

   ScrollTrigger.create({
     trigger: "#cgas-txt", // The element to trigger the animation
     start: "top 100%", // When the trigger element enters the viewport
     end: "bottom 0%", // When the trigger element leaves the viewport
     // once: true, Run the animation only once
     onEnter: () => {
       gsap.from("#cgas-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in
       gsap.to("cgas-txt", { opacity: 0, duration: 1, delay: 10, ease: "power2.out" }); // Fade out after 3 seconds
     },
     onLeaveBack: () => {
       gsap.from("#cgas-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in on scroll back up
     }
   });

      ScrollTrigger.create({
     trigger: "#sun-txt", // The element to trigger the animation
     start: "top 100%", // When the trigger element enters the viewport
     end: "bottom 0%", // When the trigger element leaves the viewport
     // once: true, Run the animation only once
     onEnter: () => {
       gsap.from("#sun-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in
       gsap.to("#sun-txt", { opacity: 0, duration: 1, delay: 10, ease: "power2.out" }); // Fade out after 3 seconds
     },
     onLeaveBack: () => {
       gsap.from("#sun-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in on scroll back up
     }
   });

      ScrollTrigger.create({
     trigger: "#redg-txt", // The element to trigger the animation
     start: "top 100%", // When the trigger element enters the viewport
     end: "bottom 0%", // When the trigger element leaves the viewport
     // once: true, Run the animation only once
     onEnter: () => {
       gsap.from("#redg-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in
       gsap.to("#redg-txt", { opacity: 0, duration: 1, delay: 10, ease: "power2.out" }); // Fade out after 3 seconds
     },
     onLeaveBack: () => {
       gsap.from("#redg-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in on scroll back up
     }
   });

         ScrollTrigger.create({
     trigger: "#dwarf-txt", // The element to trigger the animation
     start: "top 100%", // When the trigger element enters the viewport
     end: "bottom 0%", // When the trigger element leaves the viewport
     // once: true, Run the animation only once
     onEnter: () => {
       gsap.from("#dwarf-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in
       gsap.to("#dwarf-txt", { opacity: 0, duration: 1, delay: 10, ease: "power2.out" }); // Fade out after 3 seconds
     },
     onLeaveBack: () => {
       gsap.from("#dwarf-txt", { opacity: 0, duration: 1, ease: "power2.in" }); // Fade in on scroll back up
     }
   });

