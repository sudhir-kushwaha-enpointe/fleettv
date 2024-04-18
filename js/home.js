gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  //toggleActions: 'restart pause resume pause',
  toggleActions: 'restart reverse',
  scrub: false,
//   markers: {startColor: "white", endColor: "white", fontSize: "11px", fontFamily: 'Arial !important'},
  lazy: true,
});



gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: false, 
    pinSpacing: false,
    autoAlpha: 1,
    anticipatePin: 0,
    ease: 'Power2.easeInOut',
    onEnter: function() {
      $video = panel.querySelector('iframe');
      $player = new Vimeo.Player($video);
      $player.play();
    },
    onLeave: function() {
      $video = panel.querySelector('iframe');
      $player = new Vimeo.Player($video); 
      $player.pause();
    },
    onEnterBack: function() {
      $video = panel.querySelector('iframe');
      $player = new Vimeo.Player($video); 
      $player.play();
    },
    onLeaveBack: function() {
      $video = panel.querySelector('iframe');
      $player = new Vimeo.Player($video); 
      $player.pause();
    },
    // onUpdate: self => console.log("progress", self.progress),
    // onSnapComplete: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
    // onToggle: self => console.log("toggled to active:", isActive),
    // toggleClass: {targets: panel, className: "active"}
  });
});




/* Hero */
// let heroTimeline = gsap.timeline();
//   heroTimeline.to('.hero-logo', {
//     duration: 1,
//     scale: 1,
//     opacity: 1,
//     transformOrigin: 'center',
//     delay: 1,
//   })
//   .to('.hero-text', {
//     clipPath: 'polygon(100% 0%, 0% 0%, 0% 125%, 100% 100%)',
//     x: 0,
//     duration: 0.8
//   })
//   .to('.scroll-down', {
//     duration: 1,
//     delay: .2,
//     opacity: 1,
//     ease: 'bounce',
//     yoyoEase: 'power2.inOut',
//     repeat: 99999,
//     repeatDelay: 1,
//     y: 30
//   });

  const go2Nav = gsap.timeline();
  go2Nav.staggerFromTo(
    '.gotoNext',
    1,
    {
      autoAlpha: 0,
      y: 0
    },
    {
      autoAlpha: 1,
      ease: 'bounce',
      yoyoEase: 'Power2.easeInOut',
      repeat: 999999999,
      y: 20
    });

//   const mainNav = gsap.timeline();
//   mainNav.to('header.hero-header', {
//     scrollTrigger:  {
//       trigger: '.slide01',
//       start: 'top bottom',
//       end: '10% 70%',
//       toggleActions: 'restart reverse',
//       markers: false
//     },
//     ease: 'power2.inOut',
//     y: 70
//   })
//   .to('footer.hero-footer', {
//     scrollTrigger:  {
//       trigger: '.slide01',
//       start: 'top bottom',
//       end: '80% 100%',
//       toggleActions: 'restart reverse'
//     },
//     ease: 'power2.inOut',
//     y: -30
//   });

  gsap.utils.toArray(".panel .title h1").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: 'top center',
      bottom: 'center center',
      pin: false, 
      pinSpacing: false,
      autoAlpha: 1,
      anticipatePin: 0,
      ease: 'Power2.easeInOut',
      //markers: true
    });
  });


  // let slide01 = gsap.timeline();
  // slide01.to('.slide01 .title h1', {
  //   scrollTrigger:  {
  //     trigger: '.slide01',
  //     start: 'bottom',
  //     end: 'center',
  //     toggleActions: 'restart reverse restart reverse',
  //     invalidateOnRefresh: true,
  //     markers: true,
  //   },
  //   ease: 'Power2.easeInOut',
  //   opacity: 0.8,
  //   autoAlpha: 1,
  //   y: -30,
  // });
  // slide01.to('.slide02 .title h1', {
  //   scrollTrigger:  {
  //     trigger: '.slide02',
  //     start: 'bottom',
  //     end: 'center',
  //     toggleActions: 'restart reverse restart reverse',
  //     invalidateOnRefresh: true,
  //     markers: true,
  //   },
  //   ease: 'Power2.easeInOut',
  //   opacity: 0.8,
  //   autoAlpha: 1,
  //   y: -30,
  // });
  // slide01.to('.slide03 .title h1', {
  //   scrollTrigger:  {
  //     trigger: '.slide03',
  //     start: 'top 30%',
  //     end: 'bottom 80%',
  //     toggleActions: 'restart reverse restart reverse',
  //     invalidateOnRefresh: true,
  //   },
  //   ease: 'Power2.easeInOut',
  //   opacity: 0.8,
  //   autoAlpha: 1,
  //   duration: 1,
  //   y: -30,
  // });
  // slide01.to('.slide04 .title h1', {
  //   scrollTrigger:  {
  //     trigger: '.slide04',
  //     start: 'top 30%',
  //     end: 'bottom 80%',
  //     toggleActions: 'restart reverse restart reverse',
  //     invalidateOnRefresh: true,
  //   },
  //   ease: 'Power2.easeInOut',
  //   opacity: 0.8,
  //   autoAlpha: 1,
  //   duration: 1,
  //   y: -30,
  // });
  // slide01.to('.slide05 .title h1', {
  //   scrollTrigger:  {
  //     trigger: '.slide05',
  //     start: 'top 30%',
  //     end: 'bottom 80%',
  //     toggleActions: 'restart reverse restart reverse',
  //     invalidateOnRefresh: true,      
  //   },
  //   ease: 'Power2.easeInOut',
  //   opacity: 0.8,
  //   autoAlpha: 1,
  //   duration: 1,
  //   y: -30,
  // });


  $('.sideloader a').on('click', (e) => {
    e.preventDefault();
    let mainmenu = gsap.timeline();
    mainmenu.to('.main-menu', {
      ease: 'Power2.easeInOut',
      autoAlpha: 1,
      duration: 1,
      xPercent: 100
    });
  }); 
    
  $('.close a').on('click', (e) => {
    e.preventDefault();
    let mainmenu = gsap.timeline();
    mainmenu.to('.main-menu', {
      ease: 'Power2.easeInOut',
      duration: 1,
      xPercent: -100,
    });
  });

  $(document).on('click touchstart', '.gotoNext a', function(e) {
    //e.preventDefault();
    $target = $(this).attr('data-target');
    //console.log( $target );
    gsap.to(window, {duration: .2, scrollTo: {y: $target, offsetY: -10}, ease: 'Power2.easeInOut'} );
    
    //$(window).scrollTop($($target).offset().top);
  });


  /* $(function() {
    if( $('#slide01').hasClass('active') ) {
      $video = document.querySelector('.panel#slide01');
      $player = new Vimeo.Player( $video ); 
      $player.play();      
      console.log( $video );
    }
  }); */