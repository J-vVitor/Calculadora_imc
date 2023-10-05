
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
    let idadeValor = document.getElementById('idade').value

    let alturaValor = document.getElementById('altura').value
    let pesoValor = document.getElementById('peso').value

    let campoTextoidade = document.getElementById('idadeT')

    let campoTextoAltura = document.getElementById('alturaT')
    let campoTextoPeso = document.getElementById('pesoT')
    let campoTextoImc = document.getElementById('imcT')

    campoTextoidade.innerHTML = `${idadeValor} anos`;
    campoTextoAltura.innerHTML = `${alturaValor} cm`;
    campoTextoPeso.innerHTML = `${pesoValor} kg`;

    let imc = pesoValor / (alturaValor * alturaValor)

    let imcFixed = imc.toFixed(2)

    campoTextoImc.innerHTML = imcFixed

}




