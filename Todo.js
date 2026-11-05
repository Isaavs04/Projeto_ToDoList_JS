$(document).ready(function () {
    //Capturando a div que vai comportar minha lista de divs
    let listaToDo = document.getElementById('listaTarefas');
    //Numero da tarefa, auto incremento
    let nm = 1;
    $('#btnAdicionar').click(function () {
        let listaTarefa = document.createElement('div');
        //Criando e definindo o texto do parágrafo como o da tarefa
        let tarefa = document.createElement('p')
        tarefa.textContent = nm + " - " + $('#tarefa').val();
        //Criando e estilizando o botão
        let btnRemover = document.createElement('button')
        btnRemover.id = 'btnRemover' + nm;
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn-estilo');
        nm++;
        //Anexando os elementos p e button a sua div pai
        listaTarefa.appendChild(tarefa);
        listaTarefa.appendChild(btnRemover);
        //Div parágrafo + botão, adicionadas a minha lista
        listaToDo.appendChild(listaTarefa);
        //Função do botão de excluir a tarefa
        $(btnRemover).click(function () {
            $(this).parent().remove();
        })
    })
})