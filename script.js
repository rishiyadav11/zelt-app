function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

loco();



function canva(){
    const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://zelt.app/assets/img/home/hero/sequence/mobile/1.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/2.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/3.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/4.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/5.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/6.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/7.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/8.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/9.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/10.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/11.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/12.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/13.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/14.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/15.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/16.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/17.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/18.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/19.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/20.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/21.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/22.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/23.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/24.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/25.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/26.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/27.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/28.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/29.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/30.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/31.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/32.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/33.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/34.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/35.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/36.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/37.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/38.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/39.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/40.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/41.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/42.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/43.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/44.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/45.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/46.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/47.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/48.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/49.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/50.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/51.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/52.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/53.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/54.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/55.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/56.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/57.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/58.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/59.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/60.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/61.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/62.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/63.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/64.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/65.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/66.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/67.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/68.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/69.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/70.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/71.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/72.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/73.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/74.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/75.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/76.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/77.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/78.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/79.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/80.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/81.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/82.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/83.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/84.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/85.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/86.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/87.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/88.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/89.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/90.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/91.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/92.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/93.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/94.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/95.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/96.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/97.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/98.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/99.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/100.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/101.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/102.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/103.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/104.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/105.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/106.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/107.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/108.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/109.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/110.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/111.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/112.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/113.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/114.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/115.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/116.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/117.webp
  https://zelt.app/assets/img/home/hero/sequence/mobile/118.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 118;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page1>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `300% top`,
    scroller: `main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page1>canvas",
  pin: true,
  // markers:true,
  scroller: `main`,
//   set start end according to preference
  start: `top top`,
  end: `300% top`,
});
}

canva()

// let lastScrollTop = 0;

// function isScrollingDown() {
//   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const isScrollingDown = currentScrollTop > lastScrollTop;
//   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
//   return isScrollingDown;
// }

// var marqueeContent = document.querySelector(".marquee-content")

// window.addEventListener('scroll', function() {
//   const scrollingDown = isScrollingDown();

//   if (scrollingDown) {
//     marqueeContent.style.animation ="marquee 40s linear infinite"; 
//   } else {
//     marqueeContent.style.animation ="marquee 40s linear infinite  reverse"}
// });




var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3.2",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




// const circle = document.querySelector("#circle");
// const swipercon = document.querySelector(".swiper");

// function moveCircle(e) {
//   gsap.to("#circle", {
//     x: e.clientX - 3 * window.innerWidth / 100, // Adding 3vw equivalent to clientX
//     y: e.clientY - 3 * window.innerHeight / 100, // Adding 3vw equivalent to clientY
//     ease: "power4"
//   });
// }

// swipercon.addEventListener("mouseenter", (e) => {
//   gsap.to("#circle", {
//     opacity: 1,
//     height: "6vw",
//     width: "6vw",
//     ease: "power4"
//   });
// });

// swipercon.addEventListener("mouseleave", (e) => {
//   gsap.to("#circle", {
//     opacity: 0,
//     height: "0vw",
//     width: "0vw",
//     ease: "power4"
//   });
// });

// swipercon.addEventListener("mousemove", moveCircle);



const circle = document.querySelector("#circle");
const swipercon = document.querySelector(".swiper");

function moveCircle(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  gsap.to("#circle", {
    x: mouseX + scrollX - 3 * window.innerWidth / 100,
    y: mouseY + scrollY - 3 * window.innerHeight / 100,
    ease: "power4"
  });
}

swipercon.addEventListener("mouseenter", (e) => {
  gsap.to("#circle", {
    opacity: 1,
    height: "6vw",
    width: "6vw",
  });
});

swipercon.addEventListener("mouseleave", (e) => {
  gsap.to("#circle", {
    opacity: 0,
    height: "0vw",
    width: "0vw",
    ease: "power4"
  });
});

swipercon.addEventListener("mousemove", moveCircle);
window.addEventListener("scroll", moveCircle); // Add this line to update circle on scroll
