let metaLivros = 5;

let livrosLidos = ['O Pequeno Príncipe ', 'Harry Potter e a Pedra Filosofal ', 'Viagem ao Centro da Terra ']

let restam = metaLivros - livrosLidos.length;

for (let i = 0; i < livrosLidos.length; i++) {
    console.log(livrosLidos[i])
}

if (livrosLidos > metaLivros) {
    console.log('Parabéns')
} else {
    console.log('Faltam ' + restam + ' Livros!')
}