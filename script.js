// Evento de clique para o botão Adicionar Tarefa (id="btn")
$("#btn").click(function(e) {
    // Pega o valor digitado no input (id="tarefa")
    const tarefa = $("#tarefa").val();

    // Verifica se o campo não está vazio
    if (tarefa === "") {
        alert("Digite uma tarefa válida!!!");
    } else {
        // Adiciona um novo item <li> na lista (id="lista")
        $("#lista").append(`
            <li>
                <i class="fas fa-check-circle check"></i>
                <span>${tarefa}</span>
                <i class="fas fa-trash close"></i>
            </li>
        `);
        // Limpa o campo de input da tarefa
        $("#tarefa").val("");
    }
});

// Evento de clique para marcar como concluída
$("#lista").on("click", ".check", function() {
    $(this).parent().toggleClass("completed");
});

// Evento de clique para excluir a tarefa
$("#lista").on("click", ".close", function() {
    $(this).parent().remove();
});