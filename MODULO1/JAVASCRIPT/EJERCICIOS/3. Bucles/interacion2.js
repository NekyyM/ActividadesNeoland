// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
//y añade la propiedad isApproved a true o false en consecuencia
//Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((alumns) => {
  if (
    (alumns.T1 && alumns.T2) || //And (&&) si es solo una de las dos true nos devuelve true
    (alumns.T1 && alumns.T3) || // OR (||) Devuelve true si al menos una de ellas es true
    (alumns.T2 && alumns.T3)
  ) {
    alumns.isApproved = true;
  }
});
console.log(alumns);
