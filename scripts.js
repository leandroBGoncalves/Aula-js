/* 
    NUMBER
        * Numeros

        33 // Inteiros
        12.5 // reais - float - quebrados
        NoN // Not Number
        Infinity // infinito

*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

    Boolean
        Booleano
            * somente 2 valores

                true // verdadeiro
                false // falso
*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

/*

    * undefined
        * indefinido
        * 
    *
    * null
    *   nulo
    *   objeto que não possui nada dentro
    *   diferente de indefinido
    * 
*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
    * Object
        *Objeto
        *Propriedades / Atributos
        *Funcionalidades / Métodos

        { propriedade: "valor"}





console.log({
    nome: "Leandro",
    idade: 31,
    andar: function () {
        console.log('andar');
        
    }
});
*/
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
    * Array
        * uma lista
        * agrupamento de dado
        * 
        ["Leandro", 36]




console.log([
    "Leite",
    "Pão",
    25,
    32,
    45
]);
*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*
    # Variaveis

    * Nomes simbolicos para receber algum valor
    * Atalhos de código
    * Identificadores
    * 3 palavras reservadas para criar uma variavel
        * var
        * let
        * const
*/

// var
/*
var clima= "Quente"

    clima= "Frio"



let clima= "Seco"

    clima= "umido"



const clima= "arido"

//    clima= "Chuvoso" não existe variação na const

console.log(clima);
*/

/*

    # Scope

        * Escopo determina a visibilidade de uma variavel no JS

    # Block statement

    ''' js
    vamos iniciar um bloco

    {
        // aqui dentro é um bloco e posso colocar qualquer código

    } // aqui fechamos o bloco

    O bloco, tambem criara um novo escopo. Chamamos de 'block-scoped'

    ''' js

// var é global e podera funcionar fora de um escopo de bloco
// global é tudo que existe dentro do script e local é dentro do bloco {}
console.log('> existe x antes do bloco', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)

-=-=-=-=-=-=-=

// const e let são locais e so funcionam no escopo onde foram criadas

*/


{
    let x= 0

    console.log(x);
}