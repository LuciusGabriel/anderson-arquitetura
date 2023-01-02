const interval = 3000;

function imagens(){
    var img = document.querySelector('#slide')
    img.style.backgroundImage = "url('./assets/img/img-2.jpg')"
}
setInterval(imagens, interval)