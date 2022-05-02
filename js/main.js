function texto() {
    var number1 = document.getElementById('number1')
    var number2 = document.getElementById('number2')
    var numerobi = document.getElementById('numerobi').value
    var procesando = document.getElementById('procesando')
    procesando.innerHTML = parseInt(numerobi, 2);
    var ultimodigito = numerobi.charAt(numerobi.length - 1)
    if (numerobi == '') {
        procesando.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        infonum2.innerHTML = 'Here is your decimal'
        infonum.innerHTML = ''
    } else {
        procesando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999) {
        infonum.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2.innerHTML = ''
    }
    if (ultimodigito == '') {
        infonum.innerHTML = ''
        infonum2.innerHTML = ''
    }
}