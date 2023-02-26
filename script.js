/* let idade = 16
console.log (`Voce tem ${idade} anos:`)

if (idade < 16){
    console.log (`Voce nao pode Votar`)
} else if (idade < 18 || idade > 65) {
    console.log (`Seu voto é opcional`)
}
    else {
        console.log (`Voce tem votar!`)
    } */

/*    let agora = new Date ()
    let hora = agora.getHours()
    console.log ( `Agora sao exatamente ${hora} horas.`)

    if (hora < 12) {
        console.log (`Agora sao exatamente ${hora}h da manha`)
    }else if (hora <= 18 ){
        console.log (`Sao exatamente ${hora}h da tarde`)

    }
    else {
        console.log (`Sao exatamente ${hora}h da noite`)
    } */


    /* 
    0 - domingo
    1- segunda
    2 - terça
    3 - quarta
    4 - quinta
    5 - sexta
    6 - sabado

    */

    // switch só funciona com numeros inteiros e strings



/*
function inserir () {
  let vel = document.getElementById (`velocidade`)
  let txt = document.getElementById (`txt`)
  let v = Number(velocidade.value)
  let velmax = 60
  txt.innerHTML = `Sua velocidade foi de ${v}`

if (v > velmax ) {
    txt.innerHTML = `Sua velocidade foi de ${v} ande mais devagar`
  } else {
    txt.iznerHTML = `Sua velocidade foi de ${v} tenha uma boa viagems`
  }
}
*/




/*
    function somar() {
      let txt1 = document.getElementById(`txt1`)
      let txt2 = document.getElementById (`txt2`)
      let res = document.getElementById(`res`)
      var n1 = Number(txt1.value)
      var n2 = Number (txt2.value)
      let s = n1 + n2
      res.innerHTML = `O resultado da soma de ${n1} e ${n2} foi de ${s}`
    }
    */

    /* COMO FAZER TRATAMENTO DOS DADOS. CONVERTER e etc*/
    
    // O prompt sempre retorna o resultado como string! Entao o + vai tratar o resultado como string por isso nao vai somar vai  juntar! como se fossem palavras
    // Para converter uma string em numero é so colocar o Number.parseInt(); Ou apenas parseInt(); isso vai converter os dados para numero inteiros
    // para converter para numeros reais (numeros com virtugla eu uso) Number.parseFloat(); ou só parseFloat();
    // O Jeito mais atual de transformar uma string em numero é usan apenas o Number(); É a maneira mais recente

    //s.length = Saber quantos caracteres eu tenho dentro da string
    //s.toUpperCase(); Para colocar tudo em maiusculas
    //s.toLowerCase(); Para colocar tudo em minusculas

    // Para colocar qualquer coisa como um texto/string eu tenho que usar o comando String();

    //Eu posso declarar a string e fazer a cocatenaçao sem usar o + mas ai eu tenho que ao invez de usar aspas dupas ou simples eu tenho que usar a crase e ${} e colocar o nome da string

    // Com o document.write eu escrevo a variavel na tela!
    
    /*
    var nome = prompt (`Qual seu nome?`);
    document.write (`Bem vindo ${nome} seu nome tem ${nome.length} letras`)
    */

    /*
  mouseenter - quando o mouse entra na div
  mousemove  - quando o mouse se move dentro da div
  mousedown - quando da preciosa o mouse
  /mouseup - quando solta o click
  click - quando clica
  */

  /* Para trabalhar com a mudança de texto  e eventos ao passar o mouse
   e tals eu tenho que colocar no html
/*s
    var p1 = document.getElementsByTagName (`p`)[0];
    document.write(p1.innerHTML)

    */

    /*
  
    let a = document.getElementById (`area`)
    a.addEventListener (`click`,clicar)
    a.addEventListener (`mouseenter`, entrar)

    function clicar() {
      a.innerText = `Mudando o texto`  

    }
    function entrar() {
      a.innerText = `Voce entrou com o mouse`  
    }

    */
//i solve problems through design and technology!!!!

/*
    let agora = new Date ()
    let diasem = agora.getDay()


    switch (diasem) {
        case 0:
            console.log (`Domingo`)
            break
        case 1:
            console.log (`Segunda-feira`)
            break
        case 2:
            console.log (`Terça-feira`)
            break
        case 2:
            console.log (`Quarta-feira`)
            break    
    }
*/


// fazer um sistema em que verifique o numero, codigo e nome do usuario e autentifique se todos estao corretos

/*
let nome_digitado = "Horacio Mota";
let cartao_digitado = "123456";
let codigo_digitado = "333";

const nome = "Horacio Mota"
const cartao = "123456"
const codigo = "333"

if (nome === nome_digitado && cartao === cartao_digitado && codigo === codigo_digitado) {
    console.log(`Muito bem vindo a sua conta ${nome}:`)
} else {
    console.log ("Algo esta errado. Verifique seus dados")
} */


// Essa foi minha primeira soluçao

/*

const nome = "Horacio Mota";
const cartao = "123456";
const codigo = "333";

function verificarDados(nome_digitado, cartao_digitado, codigo_digitado) {
  if (nome === nome_digitado && cartao === cartao_digitado && codigo === codigo_digitado) {
    console.log(`Muito bem vindo a sua conta ${nome}:`);
  } else {
    console.log("Algo esta errado. Verifique seus dados");
  }
}

// Exemplo de uso
verificarDados("Horacio Mota", "123456", "333"); // Muito bem vindo a sua conta Horacio Mota:

*/

/* Escreva uma função chamada verificarIdade que recebe um parâmetro de idade e retorna uma string informando se a pessoa é maior de idade ou não. Considere a idade de 18 anos ou mais c
mo maior de idade


const maior_de_idade = 18

function verificarIdade (idade) {
if (idade < maior_de_idade) {
    console.log ("Voce é menor de idad
    ")
} else {
    console.log ("Voce é maior de idad
    ")
}
}

verificarIdade (15) */

/*
VERIFICAR DADOS DO CARTAO

const nome = "Horacio Mota"
const numero = "123456"
const codigo = "321"

function verificar(nome_digitado, numero_digitado, codigo_digitado){
    if (nome === nome_digitado && numero === numero_digitado && codigo === codigo_digitado){
        console.log (`Bem vindo, ${nome}`)
    }else {
        console.log ("Algo nao esta correto. Por favor verifique seus dados")
    }
}


verificar ("Horacio Mota" , "123456" , "3321")
*/

// Tudo que eu defino dentro da funçao so é acessivel la dentro !

/*Esse é um jeito muito bacana de fazer arrow functions

function saudacao () {
    console.log("Ola Mundo")
}

saudacao()

const saudacao2 = () => console.log("Ola Mundo2")
saudacao2()

*/

// Desafio = Construir uma funçao de multiplicaçao em forma de arrow function

/*

const multiplicacao = (x , y) => console.log (x * y)

multiplicacao(6 , 2) */

//MAIS UM VERIFICADOR DE DADOS DE CARTAO DESSA VEZ USANDO ARROW FUNCTIONS

/*
const user_name = "Horacio Mota"
const card_number = "123456"
const pin_number = "321"

const data_check = (typed_name, typed_number, typed_pin) => {
    if (user_name === typed_name && card_number === typed_number && pin_number === typed_pin) {
        console.log (`Welcome to your account ${user_name}`)
    }else {
        console.log("Theres something wrong with the number that you insert. Please try again")
    }
}


data_check("Horacio Mota" , "123456" , "321") */

/*

const nome_usuario = "Patricia Mota"
const numero_cartao = "123456"
const numero_seguranca = "123"

const verificar = (nome_digitado, cartao_digitado, numero_digitado ) => {
    if (nome_usuario === nome_digitado && numero_cartao === cartao_digitado && numero_digitado === numero_seguranca){
        console.log (`Seja bem vinda ${nome_usuario}`) 
    }else {
        console.log(`Os dados inseridos estao incorretos.`)
    }
}

verificar ("Patricia Mota", "125456", "123")

*/
// Eu posso usar o array de uma forma simples! Esse por exemplo só tem um tipo  (Numerico)

/*
const saldoContas = [3 00, 200 , 40, 1.9, 1000, 950, 9.99]

const total = saldoContas.reduce ( (acumulador, valor) => acumulador + valor )

console.log(total) */

// Eu tambem posso criar um array dentro do outro.  Posso chamar de array multi demensional pois vai ter tipos diferentes de dados.

/*
const contas = [
     ["Banco 1:", 100], 
     ['Banco 2:', 1500],
     ['Banco 3:', 1200],
     ['Banco 4:', 3500],
     ['Banco 5:', 9.95],
     ['Banco 6:', 500],
     ['Banco 7:', 52.82]
    
    ]

    const total = contas.reduce ( (acumulador, valor) => acumulador + valor)

    console.log (total) */


    // DEFINIR UM ARRAY COM AS CORES DAS BANDEIRAS DOS PAISES

    const bandeira = [
        ['Brasil', ['Verde' , 'Amarelo' , 'Azul', 'Branco'] ],
        ['Irlanda', ['Laranja', 'Branco', 'Verde']],
        ['Argentina', ['Azul', 'Branco']],
        ['Canada', ['Azul', 'Branco']]
    ]

    /*
    // !!!!!!!!!!!!!!!!! MUITO IMPORTANTE !!!!!!!!!!!!!!!!!
    //PARA FAZER O INDICICE PRIMEIRO VAI NA FILEIRA NA VERTICAL. DEPOIS NA FILEIRA NA HORIZONTAL

    // Eu posso usar o elemento push para inserir algo no array
    bandeira.push (['Brasil', ['Verde' , 'Amarelo' , 'Azul', 'Branco'] ],)

    // ou posso usar o unshift para colocar o elento em primeiro lugar

    bandeira.unshift ('Teste')

    //Posso saber o numero de itens do array
    console.log (bandeira.length)

    // O comando pop() vazio exclui o ultimo elemento no array
    bandeira.pop ()

    // Para excluir um elemento especifico eu uso o .splice e coloco o indice do item em seguida a quantidades de items que vao ser excluidos apartir daquele indice
    bandeira.splice(2, 1)

    // Se eu adcionar mais um elemento no splice ele vai substituir o elemento do array
    bandeira.splice(2, 1, 'Fruta do conde')


    console.table(bandeira)

*/

/*
const redes_sociais = [
    'Facebook',
    'Youtube',
    'Twitter',
    'Instagram',
    'Tiktok',
    'Lindedin',
    'Pinterest'

]

console.table(redes_sociais)

//Para saber a exata posiçao de um elemento dentro do array usamos .indexOf('Twitter')

console.table(redes_sociais.indexOf('Twitter'))


// Para saber se um elemento esta dentro do array eu uso o .includes('Nome que procuro')
console.log(redes_sociais.includes('Tumblr'))

// Loop dentro de variaveis! SUPER IMPORTANTE

//Paara manipular os elementos da array e mostrar o que tem dentro deles

for (let i = 0; i < redes_sociais.length; i++) {
  console.log(redes_sociais[i]);
}

*/

/*

let array = ['a','b','c','d'];
let i=3;

console.log('!==', i!==array.length );

console.log('!=', i!=array.length );

console.log('<', i<array.length );

console.log('=', i=array.length );

*/

/* Coding challenge #1: Print numbers from 1 to 10

for (var i = 1; i <= 10 ; i ++) {
    console.log(i)
} */


/*Coding challenge #2: Print the odd numbers less than 100

for (var i = 1; i <= 100; i += 2 ) {
    console.log(i)
}
*/

/*
Coding challenge #3: Print the multiplication table with 7 

for(var i = 1; i <= 10; i++)
{

    var table = console.log('7 * ' + i, " = " + i * 7)

} */

/*

Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10 
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i*j}`);
    }
    console.log();
  } */

/*
  Coding challenge #5: Calculate the sum of numbers from 1 to 10 - SUM É O SOMATORIO DO CONJUNTO 

  let sum = 0

  for (let i = 1; i <= 10 ; i ++) {
 sum += i
  }

  console.log(sum) */ 


  /* Coding challenge #6: Calculate 10! 


let number = 10;
let fatorial = 1;

for (let i = 1; i <= number; i ++) {
    fatorial *= i;
}

console.log(fatorial);

*/

/* Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30 

let sum = 0

for (let i = 11; i <= 30; i +=2) {
    sum +=i
}

console.log(sum) */

/*

Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
function conversor (n) {
    return n * 1.8 + 32
}

var result = conversor(52)

console.log (result)
 */


/*Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius 

function converter (n) {
    return (n - 32) * 0.5556
}

let result = converter (100)

console.log (result) */

/*
Coding challenge #10: Calculate the sum of numbers in an array of numbers 

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Exemplo de uso
  const numbers = [1, 2, 3, 4, 5];
  const result = sumArray(numbers);
  console.log(result); // Output: 15 */

  /* Coding challenge #11: Calculate the average of the numbers in an array of numbers 

  function averageArray(ar)
  {
    let n = ar.length; 
    let sum = 0;
  
    for (let i = 0; i < n; i ++) {
      sum += ar[i]; // correção: deve ser ar[i] em vez de ar.length
    }
    
    return sum / n;
  }
  
  var ar = [1, 3, 9, 15, 90];
  let avg = averageArray(ar);
  
  console.log(avg); // Output: 23.6 */


/*
  Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers 

  const numbers = [-1, 10, -2, 22, 33, -154, 333]

  function positive (numbers) {

    let n = numbers.length;
    let pos = []
    
    for (i = 0; i < n; i ++) {
        if (numbers[i] > 0) {
            pos.push(numbers[i]);

        }
    }
    return pos;

  }

let result = positive (numbers);

console.log(result)   */

/*

const produtos = [
{ìd: 1, nome: 'Detergente', valor:2.00, categoria:'Limpeza'},
{ìd: 2, nome: 'Amaciante', valor:6.50, categoria:'Limpeza'},
{ìd: 3, nome: 'Pão', valor:2.00, categoria:'Alimento'},
{ìd: 4, nome: 'Queijo', valor:7.00, categoria:'Alimento'},
{ìd: 5, nome: 'Leite', valor:2.20, categoria:'Alimento'},

];

//reduce
const total = produtos.reduce((acc , p) => acc + p.valor, 0)

//Filter

const alimentos = produtos
.filter (produto => produto.categoria === 'Alimento')
.map (produto => produto.nome)


//Map

const ids = produtos.map (produto => produto.ìd)
const nomes = produtos.map (produto => produto.nome)
const cat = produtos.map (produto => produto.categoria)
const reverse = produtos.reverse ()


produtos.pop ()
produtos.unshift({ìd: 5, nome: 'Leite', valor:2.20, categoria:'Alimento'})
produtos.shift()
produtos.push({ìd: 5, nome: 'Leite', valor:2.20, categoria:'Alimento'})




console.log(total)

  */
  

const users = [
    { nome: "Liam", sobrenome: "Smith", idade: 27, sexo: "M" },
    { nome: "Emma", sobrenome: "Johnson", idade: 45, sexo: "W" },
    { nome: "Noah", sobrenome: "Williams", idade: 32, sexo: "M" },
    { nome: "Olivia", sobrenome: "Brown", idade: 19, sexo: "W" },
    { nome: "William", sobrenome: "Jones", idade: 51, sexo: "M" },
    { nome: "Ava", sobrenome: "Garcia", idade: 28, sexo: "W" },
    { nome: "James", sobrenome: "Davis", idade: 37, sexo: "M" },
    { nome: "Sophia", sobrenome: "Rodriguez", idade: 23, sexo: "W" },
    { nome: "Logan", sobrenome: "Martinez", idade: 49, sexo: "M" },
    { nome: "Isabella", sobrenome: "Jackson", idade: 41, sexo: "W" },
    { nome: "Benjamin", sobrenome: "Lee", idade: 56, sexo: "M" },
    { nome: "Mia", sobrenome: "Clark", idade: 20, sexo: "W" },
    { nome: "Mason", sobrenome: "Walker", idade: 34, sexo: "M" },
    { nome: "Charlotte", sobrenome: "Wright", idade: 39, sexo: "W" },
    { nome: "Elijah", sobrenome: "Hall", idade: 31, sexo: "M" },
    { nome: "Amelia", sobrenome: "Green", idade: 44, sexo: "W" },
    { nome: "Caleb", sobrenome: "Baker", idade: 26, sexo: "M" },
    { nome: "Harper", sobrenome: "Gonzalez", idade: 29, sexo: "W" },
    { nome: "Lucas", sobrenome: "Nelson", idade: 50, sexo: "M" },
    { nome: "Evelyn", sobrenome: "Carter", idade: 48, sexo: "W" },
    { nome: "Alexander", sobrenome: "Mitchell", idade: 35, sexo: "M" },
    { nome: "Abigail", sobrenome: "Perez", idade: 22, sexo: "W" },
    { nome: "Daniel", sobrenome: "Roberts", idade: 53, sexo: "M" },
    { nome: "Madison", sobrenome: "Turner", idade: 38, sexo: "W" },
    { nome: "Emily", sobrenome: "Phillips", idade: 24, sexo: "W" },
    { nome: "Ryan", sobrenome: "Campbell", idade: 46, sexo: "M" },
    { nome: "Elizabeth", sobrenome: "Parker", idade: 42, sexo: "W" },
    { nome: "Nathan", sobrenome: "Evans", idade: 33, sexo: "M" },
    { nome: "Chloe", sobrenome: "Edwards", idade: 60, sexo: "W" },
    { nome: "Michael", sobrenome: "Collins", idade: 55, sexo: "M" }
];
  
const womenList = users.filter ((woman) => woman.sexo === 'W')
const over30 = users.filter ((age) => age.idade > 30)
const manOver50 = users.filter ((age) => age.idade >50 && age.sexo === 'W')
const sort = users.sort((a,b) => b[2] - a[2])

const array = [12,1,2,3,4,5,6]

const ajuste = array.sort((a,b) => a - b)

console.table(sort);






  
