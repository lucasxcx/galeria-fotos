$(document).ready(function(){
    
    $('header button').click (function() {
        $('form').slideDown();
    })

    $('#cancelar').click (function(){
        $('form').slideUp();
    })

    $('form').on ('submit', function(e){
        e.preventDefault ();
        const enderecoImagem = $('#endereco').val();
        const novoItem = $('<li style= "display: none"></li>');
        $(`<img src="${enderecoImagem}"  />`).appendTo (novoItem); 
        $(`
            <div class= "layout">
                <a href= "${enderecoImagem}" target="_blank" title ="Ver imagem em tamanho real">
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo (novoItem);   
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco').val ('');
    })
})  
