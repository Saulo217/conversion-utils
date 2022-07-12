import { conversaoComprimento } from './pages/comprimento.js';
import { calculoComprimento } from './calculos/comprimento.js';

function converter() {
    
    const $insel = document.querySelector('#inselect');
    const $outsel = document.querySelector('#outselect');
    document.querySelector('#out').innerText = "Resultado: " + calculoComprimento(
        document.querySelector('#in').value, 
        $insel.selectedIndex - $outsel.selectedIndex
    );

    return;
}


window.addEventListener('load', () => {

    conversaoComprimento('.content');
    return;
});