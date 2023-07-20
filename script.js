function coletarDados() {
    var inputs = coletarInputs()
    //var selects = coletarSelects()

    var testeSelect = inputs.nome 

    alert(testeSelect)
}

function coletarInputs(){
    var inputs = {}
    const nome = document.getElementById("name").value;
    const telefone = document.getElementById("phone").value;

    inputs.nome = nome;
    inputs.telefone = telefone;

    return inputs
}

function coletarSelects() {
    var selects = {}
    const sexo = document.getElementById("sex").options[MySelect.selectedIndex].value;    
    const nivel = document.getElementById("level").options[MySelect.selectedIndex].value;

    selects.sexo = sexo;
    selects.nivel = nivel;

    return selects;
}

