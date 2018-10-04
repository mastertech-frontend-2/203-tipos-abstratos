let listaVazia = [];
let listaDeNomes = ['Kiefer', 'Renan', 'Felipe', 'Juliana', 'Letícia'];
//indices:              0   ,    1   ,    2    ,     3    ,     4

listaDeNomes.length; //Verifica o tamanho do vetor
listaDeNomes[2]; //Verifica o valor em índice 2

//Adicionar itens na lista via atribuição
listaDeNomes[5] = 'Karen';
listaDeNomes[6] = 'Danilo';

//Substitui o valor no índice especificado
listaDeNomes[0] = 'Outra pessoa';

//Adiciona ao fim da lista
listaDeNomes.push('Kiefer');
//Adiciona todos os itens ao fim da lista
listaDeNomes.push('André', 'Jane', 'Itamar', 'Bruno');

//Adiciona ao começo da lista
listaDeNomes.unshift('Caroline');

//Retorna o último nome e remove-o da lista
listaDeNomes.pop();

//Retorna a lista de itens removidos e remove-os da lista
listaDeNomes.splice(1, 3);
//Splice nesse caso removeu 3 valores a partir do index 1

let objeto = {};
let cadastro = {
    nome: 'Renan',
    idade: 28,
    vivo: true
}

cadastro; //Acessa o objeto
cadastro['nome']; //Acessar valor de uma chave de um objeto

//Criar uma nova chave em um objeto
cadastro['telefone'] = '99999-9999';

//Apaga uma chave de um objeto
delete cadastro['telefone'];

