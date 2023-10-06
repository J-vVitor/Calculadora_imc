/* FUNÇÃO DE TROCAR A COR DOS BOTÕES APÓS O CLIQUE*/
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


/* FUNÇÃO PRA ADICIONAR '.' NA ALTURA*/
let altura = document.getElementById('altura')

altura.addEventListener('keypress', () => {
    let alturaLength = altura.value.length

    if (alturaLength == 1) {
        altura.value += '.'
    }
})

let peso = document.getElementById('peso')

peso.addEventListener('keypress', () => {
    let pesoLength = peso.value.length

    if (pesoLength == 3) {
        peso.value += '.'
    }
})


/* FUNÇÃO DE ENVIO DE INFORMAÇÕES*/
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

    if (alturaValor === '' || pesoValor === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'campos obrigatórios vazios',
        })
    }

    console.log(imcFixed)

    if (imcFixed < 18.5) {
        magreza.style.backgroundColor = '#36b1df'
    } else if (imcFixed >= 18.5 && imcFixed <= 24.9) {
        normal.style.backgroundColor = '#36b1df'
    } else if (imcFixed >= 25 && imcFixed <= 29.9) {
        sobrepeso.style.backgroundColor = '#36b1df'
    } else if (imcFixed >= 30 && imcFixed <= 34.9) {
        ob1.style.backgroundColor = '#ff0000'
    } else if (imcFixed >= 35 && imcFixed <= 39.9) {
        ob2.style.backgroundColor = '#ff0000'
    } else if (imcFixed >= 40) {
        ob3.style.backgroundColor = '#ff0000'
    }


}

function recarregar() {
    window.location.reload()
}




