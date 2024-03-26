$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaTarefa = $('#nome-tarefa').val()
        console.log(novaTarefa)
        $(`
            <li id="linha-sobre">
                ${novaTarefa}
            </li>`).appendTo('ul')
        $('#nome-tarefa').val('')
        $('li').on("click", function() {
            $(this).css("text-decoration", "line-through")
        })
    })
})