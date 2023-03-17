const interval = 3000;

function imagens(){
    var img = document.querySelector('#slide')
    img.style.backgroundImage = "url('./assets/img/img-2.jpg')"
}
setInterval(imagens, interval)



const instagram = document.querySelector('.insta')
instagram.addEventListener('mouseover', ()=>{
    instagram.src = 'assets/img/icons/instagram-color.svg'
    console.log('Passou')
})
instagram.addEventListener('mouseout', ()=>{
    instagram.src = 'assets/img/icons/instagram-pb.svg'
})


const linkedin = document.querySelector('.linked')
linkedin.addEventListener('mouseover', ()=>{
    linkedin.src = 'assets/img/icons/linkedin-color.svg'
    console.log('Passou')
})
linkedin.addEventListener('mouseout', ()=>{
    linkedin.src = 'assets/img/icons/linkedin-pb.svg'
})

