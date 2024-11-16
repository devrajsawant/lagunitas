function show(){
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();}
  
  show()

  gsap.to("#bottle", {
    rotate: -375,
    scrollTrigger: {
      trigger: "#bottle",
      scroller: "#main",
      start: "top 5%",
      end: "top -416%",
      scrub: true,
      pin: true

    }
  })

  gsap.to("#bottle", {
   scale: 0.5,
   scrollTrigger: {
    trigger: "#page5 h1",
    scroller: "#main",
    start: "top 430%",
    end: "top -430%",
    scrub: true,
    pin: true

  }
  })

  let t1 = gsap.timeline() 
  t1.from("#main #page1_dog_image", {
    opacity: 0,
    duration: 1,
    scale: 0.1,
  })

  t1.from("#bottle", {
    opacity: 0,
    duration: 1,
    scale: 0.2,
  })

  t1.from("#nav_top>button", {
    xPrecent:200,
  })

  gsap.from("#page2_part1>button",{
    scrollTrigger: {
      trigger: ("#page2_part1>button"),
      scroller: ("#main"),
      start: "top 70%",
    },
    xPrecent:-300,
    duration:1,
  })


  gsap.from("#page6_part6>button",{
    scrollTrigger: {
      trigger: ("#page6_part2>button"),
      scroller: ("#main"),
      start: "top 70%",
    },
    xPrecent:600,
    duration:1,
  })
  const dog_img = document.querySelector("#page1_dog_image");
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  
  document.body.addEventListener("mousemove", function (dets) {
      targetX = dets.clientX;
      targetY = dets.clientY;
  });
  
  function animate() {
      // Smoothly interpolate the position
      currentX += (targetX - currentX) * 0.1; // Adjust the smoothing factor (0.1 for slow, 0.3 for faster)
      currentY += (targetY - currentY) * 0.1;
  
      dog_img.style.left = currentX + "px";
      dog_img.style.top = currentY + "px";
      dog_img.style.zIndex = 9;
  
      requestAnimationFrame(animate);
  }
  
  // Start the animation loop
  animate();

  gsap.registerPlugin(ScrollTrigger);

  const splashAnimation = document.querySelectorAll(".splashAnimationClass")

  splashAnimation.forEach((element)=>{
  gsap.to(element, {
    opacity: 1,
    scale: 1,
    duration: 1, // Add a duration for smooth transition
    scrollTrigger: {
      trigger: element, // No parentheses needed
      scroller: "#main",             // Specify the scrolling container
      start: "top 80%",              // When to trigger the animation
      end: "top 30%",                // Optional: Specify an end point
      scrub: true,                   // Makes the animation scroll-synced
    }
  });
  })

  

  