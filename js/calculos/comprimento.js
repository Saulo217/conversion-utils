function calculoComprimento(inputNum, diferenca){

    inputNum = (inputNum) == false? 1 : inputNum;
    diferenca = (diferenca) == false? 0 : diferenca;
    
    return Number(`${inputNum}E${diferenca}`);
}

export { calculoComprimento };