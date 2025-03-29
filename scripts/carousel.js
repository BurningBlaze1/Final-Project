let $carousel = document.getElementById('carousel')

let index = 0
setInterval(() => {
    let $images = $carousel.children
    
    index++
    if (index >= $images.length) {
        index = 0
    }

    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            $images[i].classList.remove('hidden')
        } else {
            $images[i].classList.add('hidden')
        }
    }

    // for (let $image of $images) {
    //     console.log($image)
    // }
}, 5000)


let $carousel2 = document.getElementById('carousel2')

let index2 = 0
setInterval(() => {
    let $images2 = $carousel2.children
    
    index++
    if (index >= $images2.length) {
        index = 0
    }

    for (let i = 0; i < $images2.length; i++) {
        if (i == index) {
            $images2[i].classList.remove('hidden')
        } else {
            $images2[i].classList.add('hidden')
        }
    }

    // for (let $image of $images) {
    //     console.log($image)
    // }
}, 5000)


// let $carousel3 = document.getElementById('carousel3')

// let index3 = 0
// setInterval(() => {
//     let $images3 = $carousel3.children
    
//     index++
//     if (index >= $images3.length) {
//         index = 0
//     }

//     for (let i = 0; i < $images3.length; i++) {
//         if (i == index) {
//             $images3[i].classList.remove('hidden')
//         } else {
//             $images3[i].classList.add('hidden')
//         }
//     }

//     // for (let $image of $images) {
//     //     console.log($image)
//     // }
// }, 1500)