const medidasComprimento = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function calculoComprimento(value, diferenca) {
    value? value : value = 1;
    return value * Math.pow(10, diferenca);
}

function converter() {
    const $input = document.getElementById('in');
    const $output = document.getElementById('out');
    const $insel = document.getElementById('inselect');
    const $outsel = document.getElementById('outselect');
    
    const inputIndex = medidasComprimento.indexOf($insel.options[$insel.selectedIndex].value);
    const outputIndex = medidasComprimento.indexOf($outsel.options[$outsel.selectedIndex].value);
    $output.innerText = "Resultado: " + calculoComprimento($input.value, outputIndex - inputIndex);
    return;
}