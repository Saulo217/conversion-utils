function mToCm(value) {
    return value * 100;
}
function converter() {
    const $input = document.getElementById('in');
    const $output = document.getElementById('out');
    
    $output.value = mToCm($input.value);
    return;
}