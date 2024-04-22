gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const mainNav = gsap.timeline();
  mainNav.to('header.hero-header', {
    ease: 'power4.inOut',
    y: 70
  })
  .to('footer.hero-footer', {
    ease: 'power2.inOut',
    y: -50
  });

  $('.sideloader a').on('click', (e) => {
    e.preventDefault();
    console.log('sideloader');
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
    console.log('sideloader');
    let mainmenu = gsap.timeline();
    mainmenu.to('.main-menu', {
      ease: 'Power2.easeInOut',
      duration: 1,
      xPercent: -100,
    });
  });








  // our people
  let commonTl = gsap.timeline();
  if ($("body").hasClass('our-people')) {
    commonTl.staggerFromTo(
      '.our-people .contentWrap .row',
      1.5,
      {
        opacity: 0,
        y: 30
      },
      {
        trigger: '.our-people .contentWrap .row',
        stagger: .5,
        opacity: 1,
        y: 0,
        ease: 'Power2.easeInOut',
        scrub: 0.5,
      }
    );
  }

  // client
  if ($("body").hasClass('clients')) {
    commonTl.staggerFromTo('.clients .single-client', .8, {opacity: 0, y: 30}, {stagger: 0.2, opacity: 1, y: 0, ease: 'back'});
  }

  // work
  if ($("body").hasClass('our-work')) {
    commonTl.staggerFromTo(".our-work .work-links h1, .our-work .work-links.section1 li", .8, {opacity: 0, y: -50, skewX: 30}, {stagger: 0.2, opacity: 1, y: 0, skewX: 0, ease: 'back'});
  }

  $('.ad-films, .feature-films, .historic-films').on('click', 'li a', function(e) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      gsap.to(window, {duration: .8, scrollTo: '#work-videos', ease: "expo"});
    } else {
      gsap.to(window, {duration: .8, scrollTo: 'body', ease: "expo"});
    }

    $('.ad-films li a, .feature-films li a, .historic-films li a').removeClass('active');
    $title = $(this).attr('data-title');
    $videoSrc = $(this).attr('data-src');
    $videoID  = $videoSrc.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i);
    $videoID = $videoID ? $videoID : '';
    $director = $(this).attr('data-director');
    $description = $(this).attr('data-description');
    $videoLink = "https://player.vimeo.com/video/"+$videoID[1]+"?h=382586787&autoplay=1&color=d73535&title=0&byline=0&portrait=0&badge=0";
    $('.work-videos iframe').attr('src', $videoLink);

    $('.work-videos h2').html($title);
    $('.work-videos .director').html('<span>Director: </span>'+$director);
    $('.work-videos .description').html('');

    if( $(this).hasClass('feature')) {
      $('.work-videos .description').html('<span>Starring: </span>'+$description);
    } else {
      //$('.work-videos .description').html('<span>Agency: </span>'+$description);
    }

    if( $(this).hasClass('historic')) {
      $('.work-videos .director').html('');
      $('.work-videos .description').html('');
    }

    commonTl.staggerFromTo('.work-videos h2, .work-videos .director, .work-videos .description', 0.6, {opacity: 0, y: -30}, {stagger: 0.1, opacity: 1, y: 0, ease: 'back'});
    $(this).addClass('active');

  });

  $('.work-links .pageTitle a').on('click', function(e) {
    e.preventDefault();
    $target = $(this).attr('data-show');
    console.log($target);
    if( $target == '.section2') {
      $('.section1').hide();
      $('.columns3 div.blockWrap').removeClass('col-md-3').addClass('col-md-6');
      $('.columns3 div.blockWrap:nth-child(2)').hide();
      $($target).fadeIn();
    } else {
      $('.section2').hide();
      $('.columns3 div.blockWrap').removeClass('col-md-6').addClass('col-md-3');
      $('.columns3 div.blockWrap:nth-child(2)').show();
      $($target).fadeIn();
    }
  });

  if ($("body").hasClass('contact-us')) {
    let commonT2 = gsap.timeline();
    commonT2.staggerFromTo('.contact-blocks .block', 1, {opacity: 0, y: -30}, {stagger: 0.4, opacity: 1, y: 0, ease: 'back'});
  }


  $('.contentWrap .flipper #request-access, .contentWrap .flipper #backtoform').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.contentWrap').toggleClass('hover');
      $(this).css('transform, rotateY(180deg)');
  });



  $(document).ready(function() {
    // requestForm
    $("#requestForm").validate({
      debug: false,
      rules: {
        request_email: {
          required: true,
          email: true
        },
        request_message: "required"
      },
      submitHandler: function(form) {
        $.ajax({
          url: '/functions.php',
          type: 'POST',
          data: $(form).serialize(),
          beforeSend: function() {
            console.table('Sending request form!');
          },
          success: function(response) {            
            $('#requestForm').fadeOut(function() {
              $('.responseMessage').fadeIn().html(response);
            });
          }
        });
      }
    });

    // contactForm
    $("#contactForm").validate({
      debug: false,
      rules: {
        contactName: "required",
        contactEmail: {
          required: true,
          email: true
        },
        contactMessage: "required"
      },
      submitHandler: function(form) {
        $.ajax({
          url: '/functions.php',
          type: 'POST',
          data: $(form).serialize(),
          beforeSend: function() {
            console.table('Sending Contact Form...');
          },
          success: function(response) {            
            $('#contactForm').fadeOut(function() {
              $('.contactFormResponse').fadeIn().html(response);
            });
          }
        });
      }
    });

  });

