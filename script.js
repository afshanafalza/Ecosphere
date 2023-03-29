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
