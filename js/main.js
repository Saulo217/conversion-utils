function calculoComprimento(value, diferenca) {
    value? value : value = 0;
    return Math.pow(10, diferenca) * value;
}

function converter() {
    const $input = document.getElementById('in');
    const $output = document.getElementById('out');
    const $insel = document.getElementById('inselect');
    const $outsel = document.getElementById('outselect');
    $output.innerText = "Resultado: " + calculoComprimento($input.value, $insel.selectedIndex - $outsel.selectedIndex);
    return;
}