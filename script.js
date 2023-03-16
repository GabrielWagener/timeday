function carregar(){
    var msg = window.document.getElementById('msg');
    var img = document.getElementById('img')
    var data = new Date();
    var hora = data.getHours()
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();



    msg.innerHTML = `O momento exato de agora é ${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#0B4C54'
        img.src = 'morning.png'

    } else if (hora >= 12 && hora < 18){
        document.body.style.background = '#E87D38'
        img.src = 'evening.png'

    } else {
        document.body.style.background = '#050926'
        img.src = 'night.png'
    }

}
