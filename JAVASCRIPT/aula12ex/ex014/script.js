function carregar() {
    var msg =  window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'orange'
    } else if (hora >= 12 && hora <18){
        img.src = 'fototarde.png'
        document.body.style.background = 'brown'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = 'darkblue'
    }
}

function sessao(){
    window.document.getElementById('cinza').style.background = ('lightgray')
}
function ofsessao(){
    window.document.getElementById('cinza').style.background = ('white')
}

function cresce(){
    window.document.getElementById('imagem').style.paddingTop = '30px'
    window.document.getElementById('imagem').style.paddingBottom = '30px'
}
function ncresce(){
    window.document.getElementById('imagem').style.paddingTop = '0px'
    window.document.getElementById('imagem').style.paddingBottom = '0px'
}