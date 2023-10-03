function envio() {
    let inputs = document.getElementsByName('sexo');
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].checked)
            alert(inputs[i].value)
    }
}

let btnH = document.getElementById('btnH')





