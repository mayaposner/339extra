// Using data so that not overlapped up with classes
// const buttons = document.querySelector("[data-carousel-button]") 
const buttons = document.querySelectorAll("[data-carousel-button]")

// Have done listeners in lecture but not with forEach - Dr. VL mentioned that it can be done but we didnt do it this way
buttons.forEach(button => { 
    button.addEventListener("click", () => {  
        // This gets the next or previous photo 
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        // Closests parent
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]')
        // Active slide 
        const activeSlide = slides.querySelector("[data-active]")
        // Get new index by using array  
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        // Dealing with first and last images 
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        // Changing which slide is active
        slides.children[newIndex].dataset.active = true 
        delete activeSlide.dataset.active
    })
})

