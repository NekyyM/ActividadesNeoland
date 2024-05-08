let info = {
  palabrita: "",
  cantErrores: 0,
  cantAciertos: 0,
};
export const getInfoAhorcado = () => info;

export const setPalabrita = (data) => (info.palabrita = data);
export const setErrores = (data) => (info.cantErrores = data);
export const setAciertos = (data) => (info.cantAciertos = data);

// const dataState = {
//   seconds: 0,
//   minutes: 0,
//   movesCount: 0,
// };

// export const getStateAhorcado = (typeOfValue) => {
//   switch (typeOfValue) {
//     case "seconds":
//       return dataState.seconds;
//     case "minutes":
//       return dataState.minutes;
//     case "movesCount":
//   }
// };
