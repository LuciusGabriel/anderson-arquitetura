function imagens(){

    var img = document.querySelector('#slide')
    var image = document.createElement('img')

    image.setAttribute('src', 'img/img-1.jpg')
    image.setAttribute('id', 'imagem')

    img.appendChild(image)

}

scrollDown()
function scrollDown(){
    document.addEventListener('scroll', ()=>{
        console.log('Scroll')
    })
}