function marcruiz() {
    var mr1 = document.getElementById('mr1')
    var mr2 = document.getElementById('mr2')
    var numerob = document.getElementById('numerob').value
    var procesar = document.getElementById('procesar')
    procesar.innerHTML = parseInt(numerob, 2);
    var ultimodigito = numerob.charAt(numerob.length - 1)
    if (numerob == '') {
        procesar.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        mr2.innerHTML = 'Here is your decimal'
        mr1.innerHTML = ''
    } else {
        procesar.innerHTML = 'Waiting for a valid binary number'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999) {
        mr1.innerHTML = 'You entered a non binary digit'
        mr2.innerHTML = ''
    }
    if (ultimodigito == '') {
        mr1.innerHTML = ''
        mr2.innerHTML = ''
    }
}