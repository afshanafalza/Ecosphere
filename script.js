// taken from "50 Projects in 50 Days" "Sticky Nav Bar"
const nav = document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
  if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

//another 50 projects in 50 days expanding card

document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach((panel)=>{

        panel.addEventListener('click', ()=>{
            removeActiveClasses()
            panel.classList.add('active')
        })
    })

    function removeActiveClasses() {
        panels.forEach(panel=>{
            panel.classList.remove('active')

        })
    }
   
  });

  //testimonial box

  document.addEventListener("DOMContentLoaded", function() {

    const testimonialsContainer = document.querySelector('.testimonials-container')
  const testimonial = document.querySelector('.testimonial')
  const userImage = document.querySelector('.user-image')
  const username = document.querySelector('.username')
  const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "I have been buying from them for the longest time. Mushi and Afshana are such nice people, I wouldnt be here without them.",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Shoutout to Timothy for project 1, it was a struggle but we made it work',
  },
  {
    name: 'Iida Niskanen',
    position: 'Biker',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Bro these testimonials like im getting tired of them",
  },
  {
    name: 'Renee Sims',
    position: 'Diver',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Bro nah I cant write anymore but I shall like what do I write, its testimonials and nobody gave me testimonials and now im writing random things",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Bro what is my title',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I like Patagonia and Arcteryx, and it is so fire like I always buy from them",
  },
  {
    name: 'Sasha Ho',
    position: 'Hiker',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'My team is the best fr like OMG they are doing all the work im literally doing nothing, I am out here writing testimonials',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Climber',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'I pray all my team members find a good job after college. and then hopefully I get like a rolex for my wedding or something.',
  },
]

let idx = 1

function updateTestimonial() {

  
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
    
  });
  
