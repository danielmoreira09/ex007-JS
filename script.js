let num = window.document.getElementById("numtxt");
let tab = window.document.getElementById("tabtxt");
let resp = window.document.getElementById("res");
let valores = [];

function isNumero(n){
    if(Number(n) > 0 && Number(n) < 101)
        return true;
    else
        return false; 
}

function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1){
        return false;
    }
    else
        return true;
}

function adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)){
        valores.push(Number(num.value));

        var item = window.document.createElement('option');
        item.text = `Valor adicionado: ${num.value}`;
        tab.appendChild(item);
        item.value = `tab${cont}`;
        resp.innerHTML = '';
    }
    else{
        window.alert("Valor inválido ou já digitado.")
    }

    num.value = '';
    num.focus();
}

function verificar(){

    if(valores.length == 0){
        window.alert('Adicione valores antes de verificar!');
    }

    else{
        let min = valores[0];
        let max = valores[0];
        let media = 0;
        let soma = 0;

        for(let pos in valores){
            if(min > valores[pos]){
                min = valores[pos]
            }
            if(max < valores[pos]){
                max = valores[pos];
            }
            soma += valores[pos];
        }

        media = Number(soma)/Number(valores.length);

        resp.innerHTML = `Você digitou ${valores.length} valores.</br>`;
        resp.innerHTML += `O menor valor é: ${min}.</br>`;
        resp.innerHTML += `O maior valor é: ${max}.</br>`;
        resp.innerHTML += `A média de valores é: ${media}.</br>`;
    }

}