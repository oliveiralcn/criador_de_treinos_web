function coletar_dados_digitados() {
    
    var dados_digitados = {};


    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;


    dados_digitados.nome = nome;
    dados_digitados.telefone = telefone;


    return dados_digitados;
}


function coletar_dados_selecionados() {
    
    var respostas = {};


    var sexo = document.getElementById("sexo").value;
    var categoria = document.getElementById("categoria").value;
    var check = document.getElementById("marcacao_novo_treino");
    var res_check = check.checked;


    respostas.sexo = sexo;
    respostas.categoria = categoria;
    respostas.novo_treino = res_check;

    
    return respostas;
}



function criador_de_mensagem(nome, celular, sexo, classe, treino_montado) {
    
    var nome = nome

    var texto_de_teste = nome + celular +sexo + classe + treino_montado
//    var texto = 'Olá ' + nome + ', seja bem-vindo à família RM Arena Fitness! Aqui está sua ficha de treino: <br> Não esqueça de alongar e aquecer bem os músculos antes de cada treino! <br> **Os treinos devem seguir uma ordem, iniciando-se a segunda feira com o treino que vem depois do último treino executado. <br> Ex: sábado fez o treino B, então segunda é treino C. <br>' ;
    

    return texto_de_teste;
}

function visualisar_treino() {
    document.getElementById("resultado").innerHTML = "Está funcionando!";
}

function executarFuncao() {
    // Lógica da função
    var inputs = coletar_dados_digitados();

    var nome = inputs.nome;

    var telefone = inputs.telefone

    var selects = coletar_dados_selecionados()

    var sexo = selects.sexo

    var categoria = selects.categoria

    var nov_tre = selects.novo_treino

    var texto = criador_de_mensagem(nome, telefone, sexo, categoria,nov_tre);
  
    // Exibir o resultado na div específica
    document.getElementById("resultado").innerHTML = texto;
  }
  