const estudantes = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Marco', nota: 7 },
    { nome: 'David', nota: 6 },
    { nome: 'Isabel', nota: 9 },
    { nome: 'João', nota: 3 },
    { nome: 'José', nota: 4 }
];

function filterEstudantesNotas(estudantesArray) {
    return estudantesArray.filter(estudante => estudante.nota >= 6);
}

const passingEstudantes = filterEstudantesNotas(estudantes);
console.log(passingEstudantes);