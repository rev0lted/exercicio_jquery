$(document).ready(function() {



$('form').on('submit', function(e) {
    e.preventDefault();
    const nomeTarefa= $('#nome-tarefa').val()
    const novaTarefa= $('<li></li>');
    $(nomeTarefa).appendTo(novaTarefa);
    $(` <li>
        
        ${nomeTarefa}
        
        </li>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
    $('#nome-tarefa').val('');
    $('li').click(function() {
        $(this).addClass("finalizada");
    });
})

}) 