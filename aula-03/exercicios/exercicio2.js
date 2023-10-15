/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/
const listaDeAlunos = [
  { nome: "João", notas: [5, 2] },
  { nome: "Maria", notas: [6, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [10, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [10, 10] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];

for (let i = 0; i < listaDeAlunos.length; i++) {
  let aluno = listaDeAlunos[i];
  let media = (aluno.notas[0] + aluno.notas[1]) / 2;

  console.log("Aluno(a):", aluno.nome);
  console.log("Média:", media.toFixed(2)); 
  
}

