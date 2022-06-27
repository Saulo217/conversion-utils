function calculoComprimento(inputNum,diferenca){

    const moduloDiferenca = diferenca < 0 ? 
    () => { return inputNum / Math.pow(10, diferenca * -1); } 
    : 
    () => { return inputNum * Math.pow(10, diferenca); }
    return moduloDiferenca();
}

function converter() {
    const $input = document.getElementById('in');
    const $output = document.getElementById('out');
    const $insel = document.getElementById('inselect');
    const $outsel = document.getElementById('outselect');
    $output.innerText = "Resultado: " + calc($input.value, $insel.selectedIndex - $outsel.selectedIndex);
    return;
}