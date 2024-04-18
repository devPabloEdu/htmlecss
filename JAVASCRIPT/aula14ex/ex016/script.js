function contar(){
    let ini = document.getElementById('iniciotxt')
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('passotxt')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('Preencha os dados corretamente')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            alert('passo invalido')
            p = 1
        }
       if (i< f){ 
        for(let c = 1; c <+ f; c += p) {
        res.innerHTML += `${c} \u{1F449} `
    }
    } else {
        for( let c =1; c >= f; c -=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}