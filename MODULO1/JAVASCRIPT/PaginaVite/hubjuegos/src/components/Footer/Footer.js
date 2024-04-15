import "./Footer.css";
const template = () => `
<h3><span>Esto es un intento de web hecha con 💘 de </span> Neky</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
