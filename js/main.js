function calculus(userInput, difference){
    
    return Number(`${userInput? userInput : 1}E${difference? difference : 0}`);
}

function selectElements(...selectors) {

    let elements = {};
    for(let index of selectors) {
        elements[index.slice(1)] = document.querySelector(index);
    }

    return elements;
}

function pages(...values) {

    function update(select, value) {

        for(let index = 0; index < value.length - 1; index++) {

            select.options[index].innerText = value[index];
            select.options[index].value = value[index];
        }

        return;
    }
    
    const { inselect, outselect } = selectElements('#inselect', '#outselect');

    update(inselect, values);
    update(outselect, values);
    return;
}

function convert() {
    
    const { inselect, outselect, output, input } = selectElements('#inselect', '#outselect', '#output', '#input');
    output.innerText = `Resultado: ${calculus(
        input.value, inselect.selectedIndex - outselect.selectedIndex
    )} `;

    return;
}

window.addEventListener('load', () => {

    document.querySelector('.pageLength').addEventListener('click', () => {
        pages('mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km');
    });
    document.querySelector('.pageCapacity').addEventListener('click', () => {
        pages('ml', 'cl', 'dl', 'l', 'dal', 'hl', 'kl');
    });
    document.querySelector('.pageMass').addEventListener('click', () => {
        pages('mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg');
    });
    document.querySelector('.pageVolume').addEventListener('click', () => {
        pages('mm3', 'cm3', 'dm3', 'm3', 'dam3', 'hm3', 'km3');
    });
});