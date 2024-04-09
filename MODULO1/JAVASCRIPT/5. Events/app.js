const boton = document.getElementById("btonToClick");
boton.addEventListener("click", (e) => {
  console.log(boton);
});

const input = document.getElementById("focus");
input.addEventListener("focus", (e1) => {
  console.log(input);
});

const prueba2 = document.getElementById("value");
prueba2.addEventListener("input", (e2) => {
  console.log(prueba2);
});

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
