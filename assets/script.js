
let btnMan = document.querySelector('.man')

function btnMasculino() {
    btnMan.classList.toggle('btnClick')
    let valorBtnMan = document.getElementById('masculino').value

    console.log(valorBtnMan)
}

let btnFeminina = document.querySelector('.female')

function btnFeminino() {
    btnFeminina.classList.toggle('clickFeminino')
    let btnValorFeminino = document.getElementById('feminino').value

    console.log(btnValorFeminino)
}

function envio() {
    let alturaValor = document.getElementById('altura').value
    let pesoValor = document.getElementById('peso').value
    let imc = pesoValor / (alturaValor * alturaValor)

    let imcFixed = imc.toFixed(2)

    let magreza = document.getElementById('magreza')
    let normal = document.getElementById('normal')
    let sobrepeso = document.getElementById('sobrepeso')
    let ob1 = document.getElementById('ob1')
    let ob2 = document.getElementById('ob2')
    let ob3 = document.getElementById('ob3')

    if(imcFixed < 18.5){
        magreza.style.backgroundColor = '#36b1df'
    }else if(imc >= 18.5 || imc <= 24.9){
        normal.style.backgroundColor = '#36b1df'
    }else if(imc >= 25 || imc <= 29.9){
        sobrepeso.style.backgroundColor = '#36b1df'
    }else if(imc >= 30 || imc <= 34.9){
        ob1.style.backgroundColor = '#36b1df'
    }else if(imc >= 35 || imc <= 39.9){
        ob2.style.backgroundColor = '#36b1df'
    }else if(imc >= 40){
        ob3.style.backgroundColor = '#36b1df'
    }
   

}




