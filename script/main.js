/**
 * Usuario: Jorge Ordiz Perez
 * GitHub:
 */

addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  const area = document.getElementById("area");
  const perimetro = document.getElementById("perimetro");
  const pitagoras = document.getElementById("pitagoras");

  btn.addEventListener("click", () => {
    const long = parseFloat(document.getElementById("long").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const fail = document.getElementById("error");
    const areaw = "Área del rectángulo: ";
    const perw = "Perímetro del rectángulo: ";
    const diagw = "Diagonal del rectángulo: ";

    if (!isNaN(long && ancho)) {/**si es un numero pasa por el if y se hacen las operaciones no salta el error */
      let areaRes = (long * ancho).toFixed(2);
      let perimetroRes = (2 * (long + ancho)).toFixed(2);
      let diagonalRes = Math.sqrt(
        Math.pow(long, 2) + Math.pow(ancho, 2)
      ).toFixed(2);

      area.textContent = areaw + areaRes;
      perimetro.textContent = perw + perimetroRes;
      pitagoras.textContent = diagw + diagonalRes;
    } else {/**si no es un número entra y sale el error */
      let errorM = "Ingrese un valor válido";
      fail.textContent = errorM;
    }
  });
});
