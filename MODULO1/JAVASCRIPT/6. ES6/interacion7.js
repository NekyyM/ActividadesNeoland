// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sumaAll = exams.reduce(
  (accumulator, exams) => accumulator + exams.score,
  0
);
console.log("🚀 ~ sumaAll ~ sumaAll:", sumaAll);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función .reduce().

const aprobados = exams.reduce(
  //aqui se llama a la funcion principal
  (
    accumulator,
    notas //luego puedes denominar el nombre del dato que quieras como el event.
  ) => (notas.score >= 5 ? accumulator + notas.score : accumulator + 0),
  0
);
console.log("🚀 ~ aprobados:", aprobados);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce()

const media = exams.reduce(
  (accumulator, notas) => accumulator + notas.score / exams.length,
  0
);
console.log("🚀 ~ media:", media);
