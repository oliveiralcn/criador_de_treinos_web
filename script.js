function coletarDados() {
    var inputs = coletarInputs();
    var selects = coletarSelects();
    var check_box = coletarCB();

    const nome = inputs.nome;
    const telefone = inputs.telefone;
    const sexo = selects.sexo;
    const nivel = selects.nivel;
    const cbx = check_box;

    var bx_data = {};
    bx_data.nome = nome;
    bx_data.telefone = telefone;
    bx_data.sexo = sexo;
    bx_data.nivel = nivel;
    bx_data.cbx = cbx;

    enviarDados(bx_data);

    window.open("table-page.html");
}

function enviarDados(data) {
    localStorage.setItem('dadosDoAluno', data);
  }

function coletarInputs(){
    var inputs = {};

    const nome = document.getElementById("name").value;
    const telefone = document.getElementById("phone").value;

    inputs.nome = nome;
    inputs.telefone = telefone;

    return inputs;
}

function coletarSelects() {
    var selects = {}

    const sexo = document.getElementById("sex");
    var sexo_value = sexo.value;    
    const nivel = document.getElementById("level");
    var nivel_value = nivel.value;

    selects.sexo = sexo_value;
    selects.nivel = nivel_value;

    return selects;
}

function coletarCB() {
    const check_box = document.getElementById("cbx");
    var resposta = check_box.checked;

    return resposta;
}