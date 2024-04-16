
function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();


function menu(){
    var menu= document.querySelector("#nav-part i");
    var full= document.querySelector("#full-nav");

var count = 0;

menu.addEventListener("click", function(){
    if(count==0){
       full.style.top="0%";
    document.querySelector("#nav h2").style.color="#222";
    document.querySelector("#nav h3").style.color="#222";
    document.querySelector("#nav i").style.color="#222"; 
   
    count++;
    }

    else{
        full.style.top="-100%";
        document.querySelector("#nav h2").style.color="#dadada";
        document.querySelector("#nav h3").style.color="#dadada";
        document.querySelector("#nav i").style.color="#dadada";
        count=0;
    }

    
} )
}
menu();



var tl = gsap.timeline();

tl.from("#page1 h1",{
    y:100,
    duration:.5,
    opacity:0,
    
})
.from("#page1 h2",{
    y:50,
    duration:.5,
    opacity:0,
})
.from("#page1 h3",{
    y:50,
    duration:.5,
    opacity:0,
})

gsap.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 5%",
        scrub:1
     
    }
})

gsap.from("#page2 h1",{
    rotateX:"-90deg",
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        // markers:true,
        start:"top 75%",
        end:"top 60%",
        scrub:5
    }
})

gsap.from("#page4 h1",{
    x:-100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"#main",
        scrub:2,
        // markers:true,
        start:"top 70%",
        end:"top 40%"
    }
})


gsap.from("#page5-main h1",{
    opacity:0,
    scale:1.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page5-main h1",
        scroller:"#main",
        scrub:2,
        // markers:true,
        start:"top 75%",
        end:"top 43%"
    }

})
gsap.from("#page5-main h2",{
    opacity:0,
    scale:1.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page5-main h2",
        scroller:"#main",
        scrub:2,
        // markers:true,
        start:"top 80%",
        end:"top 45%"
    }

})

tl.from("#page5-content h1",{
    y:100,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-content h1",
        scroller:"#main",
        scrub:2
    }
    
})
.from("#page5-content h4",{
    y:50,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5-content h4",
        scroller:"#main",
        scrub:2,
        // markers:true,
        start:"top 70%",
        end:"top 60%"
    }
})



var slideh1 = document.querySelectorAll("#page6 .slide1-of-h1 h1");

slideh1.forEach(elem => {
    gsap.to(elem,{
        transform:"translateX(-100%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:5,
        }
    })
});

var slide2h1 = document.querySelectorAll("#page6 .slide2-of-h1 h1");

slide2h1.forEach(elem => {
    gsap.to(elem,{
        transform:"translateX(0%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:5,
        }
    })
});

function imgMove(){
    document.querySelector("#element1").addEventListener("mousemove", function(dets){
    
        document.querySelector("#element1 img").style.opacity =1;
        document.querySelector("#element1 img").style.left = `${dets.x +50}px`
       
       
    })
    
    document.querySelector("#element2").addEventListener("mousemove", function(dets){
        document.querySelector("#element2 img").style.opacity =1;
        document.querySelector("#element2 img").style.left = `${dets.x + 20}px`;
       
    })
    
    document.querySelector("#element2").addEventListener("mouseleave", function(dets){
        document.querySelector("#element2 img").style.opacity =0;
       
    })
    
    document.querySelector("#element1").addEventListener("mouseleave", function(dets){
        document.querySelector("#element1 img").style.opacity =0;
       
    })
}

imgMove();