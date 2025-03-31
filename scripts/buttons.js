// const element = document.getElementById("koncarousel_wrapper");



function ToggleOutfit1() {
    if (document.body.classList.contains('button1')) {

    } 

    else {
        koncarouselimg1.classList.remove('hidden')
        koncarouselimg2.classList.add('hidden')
        koncarouselimg3.classList.add('hidden')
        koncarouselimg4.classList.add('hidden')
        // koncarousel_wrappper.classlist.add('curtainsTransition')
    }
}

function ToggleOutfit2() {
    // document.body.classList.toggle('#carouselimg3test')

    if (document.body.classList.contains('button2')) {
        // document.getElementById('btnoutfit2').innerText = 'off'
    } else {
        // document.getElementById('btnoutfit2').innerText = 'on'
        koncarouselimg1.classList.add('hidden')
        koncarouselimg2.classList.remove('hidden')
        koncarouselimg3.classList.add('hidden')
        koncarouselimg4.classList.add('hidden')
        //  document.getElementById('btnoutfit1').innerText = 'off'
        //  document.getElementById('btnoutfit3').innerText = 'off'
        //  document.getElementById('btnoutfit4').innerText = 'off'
    }
}

function ToggleOutfit3() {
    // document.body.classList.toggle('#carouselimg3test')

    if (document.body.classList.contains('button3')) {
        // document.getElementById('btnoutfit3').innerText = 'off'
    } else {
        // document.getElementById('btnoutfit3').innerText = 'on'
        koncarouselimg1.classList.add('hidden')
        koncarouselimg2.classList.add('hidden')
        koncarouselimg3.classList.remove('hidden')
        koncarouselimg4.classList.add('hidden')
        //  document.getElementById('btnoutfit1').innerText = 'off'
        //  document.getElementById('btnoutfit2').innerText = 'off'
        //  document.getElementById('btnoutfit4').innerText = 'off'
    }
}

function ToggleOutfit4() {
    // document.body.classList.toggle('#carouselimg3test')

    if (document.body.classList.contains('button4')) {
        // document.getElementById('btnoutfit4').innerText = 'off'
    } else {
        // document.getElementById('btnoutfit4').innerText = 'on'
        koncarouselimg1.classList.add('hidden')
        koncarouselimg2.classList.add('hidden')
        koncarouselimg3.classList.add('hidden')
        koncarouselimg4.classList.remove('hidden')
        //  document.getElementById('btnoutfit1').innerText = 'off'
        //  document.getElementById('btnoutfit2').innerText = 'off'
        //  document.getElementById('btnoutfit3').innerText = 'off'


    }
}

// let $carouse3 = document.getElementById('carousel3')

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
// }, )