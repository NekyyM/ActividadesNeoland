//Usa un for...in para imprimir por consola los datos del alienígena..
//Puedes usar este objeto:Usa un for...in para imprimir por consola los datos del alienígena.

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (datos in alien) {
  console.log(`El alien tiene la clave ${datos} con valor ${alien[datos]}`);
}

//TempledString para concatenar de forma sencilla, con comillas francesas
