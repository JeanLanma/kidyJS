let titulo = $('#titulo');
print(titulo);
titulo.on('click', (e) => {
    print(titulo.el);
    titulo.show(false);
    setTimeout(function() {
        titulo.show();
    }, 2000)
});