

function ToggleOutfit1() {
    curtain.classList.add('curtainsTransition')
    curtain2.classList.add('curtainsTransition2')

    button1.classList.add('disabled')
    button2.classList.add('disabled')
    button3.classList.add('disabled')
    button4.classList.add('disabled')

    setTimeout(()=> {
    if (document.body.classList.contains('button1')) {

    } 

    else {
        koncarouselimg1.classList.remove('hidden')
        koncarouselimg2.classList.add('hidden')
        koncarouselimg3.classList.add('hidden')
        koncarouselimg4.classList.add('hidden')
    }
}, 3000)

setTimeout(()=> {
    curtain.classList.remove('curtainsTransition')
    curtain2.classList.remove('curtainsTransition2')

    // button1.classList.remove('disabled')
    button2.classList.remove('disabled')
    button3.classList.remove('disabled')
    button4.classList.remove('disabled')
}, 6000)

}

function ToggleOutfit2() {
 curtain.classList.add('curtainsTransition')
    curtain2.classList.add('curtainsTransition2')

    button1.classList.add('disabled')
    button2.classList.add('disabled')
    button3.classList.add('disabled')
    button4.classList.add('disabled')

    setTimeout(()=> {
    if (document.body.classList.contains('button2'))
        {

    } 

    else {
        koncarouselimg1.classList.add('hidden')
        koncarouselimg2.classList.remove('hidden')
        koncarouselimg3.classList.add('hidden')
        koncarouselimg4.classList.add('hidden')
    }
}, 3000)

setTimeout(()=> {
    curtain.classList.remove('curtainsTransition')
    curtain2.classList.remove('curtainsTransition2')
    
    button1.classList.remove('disabled')
    // button2.classList.remove('disabled')
    button3.classList.remove('disabled')
    button4.classList.remove('disabled')
}, 6000)

}

function ToggleOutfit3() {
 curtain.classList.add('curtainsTransition')
    curtain2.classList.add('curtainsTransition2')

    button1.classList.add('disabled')
    button2.classList.add('disabled')
    button3.classList.add('disabled')
    button4.classList.add('disabled')

    setTimeout(()=> {
    if (document.body.classList.contains('button3')) {
    } 
    else {
        koncarouselimg1.classList.add('hidden')
        koncarouselimg2.classList.add('hidden')
        koncarouselimg3.classList.remove('hidden')
        koncarouselimg4.classList.add('hidden')
    }
}, 3000)

setTimeout(()=> {
    curtain.classList.remove('curtainsTransition')
    curtain2.classList.remove('curtainsTransition2')

    button1.classList.remove('disabled')
    button2.classList.remove('disabled')
    // button3.classList.remove('disabled')
    button4.classList.remove('disabled')
}, 6000)

}

function ToggleOutfit4() {
    curtain.classList.add('curtainsTransition')
    curtain2.classList.add('curtainsTransition2')

    button1.classList.add('disabled')
    button2.classList.add('disabled')
    button3.classList.add('disabled')
    button4.classList.add('disabled')

    setTimeout(()=> {
    if (document.body.classList.contains('button4')) {
    } else {
        koncarouselimg1.classList.add('hidden')
        koncarouselimg2.classList.add('hidden')
        koncarouselimg3.classList.add('hidden')
        koncarouselimg4.classList.remove('hidden')
    }
}, 3000)

setTimeout(()=> {
    curtain.classList.remove('curtainsTransition')
    curtain2.classList.remove('curtainsTransition2')

    button1.classList.remove('disabled')
    button2.classList.remove('disabled')
    button3.classList.remove('disabled')
    // button4.classList.remove('disabled')
}, 6000)

}