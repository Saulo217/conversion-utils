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

function convert() {

    const { inselect, outselect, output, input } = selectElements('#inselect', '#outselect', '#output', '#input');
    output.innerText = `Resultado: ${calculus(
        input.value, inselect.selectedIndex - outselect.selectedIndex
    )}`;

    return;
}

function pages(select, value) {


    for(let index = 0; index < value.length; index++) {

        select.options[index].innerText = value[index];
        select.options[index].value = value[index];
    }

    return;
}

const VALUES = {
    length: ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'],
    capacity: ['ml', 'cl', 'dl', 'l', 'dal', 'hl', 'kl'],
    mass: ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'],
    volume: ['mm3', 'cm3', 'dm3', 'm3', 'dam3', 'hm3', 'km3']
};

const { inputType, /*outputType*/ } = selectElements('.inputType', '.outputType');
const { inselect, outselect } = selectElements('#inselect', '#outselect');

inputType.addEventListener('change', () => {

    pages(inselect, VALUES[inputType.options[inputType.selectedIndex].value]);
    pages(outselect, VALUES[inputType.options[inputType.selectedIndex].value]);
});

/*
outputType.addEventListener('change', () => {

    pages(outselect, VALUES[outputType.options[outputType.selectedIndex].value]);
});
*/