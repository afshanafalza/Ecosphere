console.log("sup");

// "Good, Cheap, Fast Checkboxes" taken from Udemy
// Toggle button variables
let womenToggle = document.querySelector("#women");
let womenItems = document.querySelectorAll(".women");
let bottomToggle = document.querySelector("#bottom");
let bottomItems = document.querySelectorAll(".bottom");
let topToggle = document.querySelector("#top");
let topItems = document.querySelectorAll(".top");
let jacketToggle = document.querySelector("#jacket");
let jacketItems = document.querySelectorAll(".jacket");
let unisexToggle = document.querySelector("#unisex");
let unisexItems = document.querySelectorAll(".unisex");
let menToggle = document.querySelector("#men");
let menItems = document.querySelectorAll(".men");


womenToggle.addEventListener('change', function() {
    if(womenToggle.checked){
        console.log('women is toggled');
        for(let i=0; i<womenItems.length; i++) {
            if(jacketToggle.checked && womenItems[i].classList.contains("jacket") || topToggle.checked && womenItems[i].classList.contains("top") || bottomToggle.checked && womenItems[i].classList.contains("bottom")) {
                womenItems[i].classList.remove("hidden");
            }
        }
    }
    else {
        console.log('women is not toggled');
        for(let i=0; i<womenItems.length; i++) {
            womenItems[i].classList.add("hidden");
        }
    }
})


menToggle.addEventListener('change', function() {
    if(menToggle.checked){
        console.log('men is toggled');
        for(let i=0; i<menItems.length; i++) {
            if(jacketToggle.checked && menItems[i].classList.contains("jacket") || topToggle.checked && menItems[i].classList.contains("top") || bottomToggle.checked && menItems[i].classList.contains("bottom")) {
                menItems[i].classList.remove("hidden");
            }
        }
    }
    else {
        console.log('men is not toggled');
        for(let i=0; i<menItems.length; i++) {
            menItems[i].classList.add("hidden");
        }
    }
})


unisexToggle.addEventListener('change', function() {
    if(unisexToggle.checked){
        console.log('unisex is toggled');
        for(let i=0; i<unisexItems.length; i++) {
            if(jacketToggle.checked && unisexItems[i].classList.contains("jacket") || topToggle.checked && unisexItems[i].classList.contains("top") || bottomToggle.checked && unisexItems[i].classList.contains("bottom")) {
                unisexItems[i].classList.remove("hidden");
            }
        }
    }
    else {
        console.log('unisex is not toggled');
        for(let i=0; i<unisexItems.length; i++) {
            unisexItems[i].classList.add("hidden");
        }
    }
})


jacketToggle.addEventListener('change', function() {
    if(jacketToggle.checked){
        console.log('jacket is toggled');
        for(let i=0; i<jacketItems.length; i++) {
            if(womenToggle.checked && jacketItems[i].classList.contains("women") || menToggle.checked && jacketItems[i].classList.contains("men") || unisexToggle.checked && jacketItems[i].classList.contains("unisex")) {
                jacketItems[i].classList.remove("hidden");
            }
        }
    }
    else {
        console.log('jacket is not toggled');
        for(let i=0; i<jacketItems.length; i++) {
            jacketItems[i].classList.add("hidden");
        }
    }
})


topToggle.addEventListener('change', function() {
    if(topToggle.checked){
        console.log('top is toggled');
        for(let i=0; i<topItems.length; i++) {
            if(womenToggle.checked && topItems[i].classList.contains("women") || menToggle.checked && topItems[i].classList.contains("men") || unisexToggle.checked && topItems[i].classList.contains("unisex")) {
                topItems[i].classList.remove("hidden");
            }
        }
    }
    else {
        console.log('top is not toggled');
        for(let i=0; i<topItems.length; i++) {
            topItems[i].classList.add("hidden");
        }
    }
})


bottomToggle.addEventListener('change', function() {
    if(bottomToggle.checked){
        console.log('bottom is toggled');
        for(let i=0; i<bottomItems.length; i++) {
            if(womenToggle.checked && bottomItems[i].classList.contains("women") || menToggle.checked && bottomItems[i].classList.contains("men") || unisexToggle.checked && bottomItems[i].classList.contains("unisex")) {
                bottomItems[i].classList.remove("hidden");
            }
        }
    }
    else {
        console.log('bottom is not toggled');
        for(let i=0; i<bottomItems.length; i++) {
            bottomItems[i].classList.add("hidden");
        }
    }
})
