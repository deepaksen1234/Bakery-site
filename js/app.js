const bar =document.querySelector('.fa-bars')
const navbar=document.querySelector('nav ul')
const crossbar=document.querySelector('.fa-xmark')
const overlaycontainer=document.querySelector('.overlay-container')

bar.addEventListener(
    "click",
    function(){
        navbar.classList.add("open")
        overlaycontainer.classList.add("open-overlay-container")
        bar.classList.remove("fa-bars")
        bar.classList.add("fa-xmark")

    
    }
)
overlaycontainer.addEventListener(
    "click",
    function(){
        navbar.classList.remove("open")
        overlaycontainer.classList.remove("open-overlay-container")
        bar.classList.add("fa-bars")
        bar.classList.remove("fa-xmark")

    }
)

$('.autoplay').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  document.addEventListener(
       'scroll',
    function(e){
      if(window.scrollY>50){
        document.body.classList.add('stick')
      }
      else{
        document.body.classList.remove('stick')

      }
    }
  )
// --------------------------------------------
