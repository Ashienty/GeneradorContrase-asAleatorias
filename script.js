//Sistema de lectura de chekers
const minusculas = document.getElementById("minusculas");
const mayusculas = document.getElementById("mayusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");
function leerEstados() {
  console.log("Minusculas", minusculas.checked);
  console.log("Mayusculas", mayusculas.checked);
  console.log("Numeros", numeros.checked);
  console.log("Simbolos", simbolos.checked);
  if (
    !minusculas.checked &&
    !mayusculas.checked &&
    !numeros.checked &&
    !simbolos.checked
  ) {
    minusculas.checked = true;
  }
}
document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
  cb.addEventListener("change", leerEstados);
});
leerEstados();

//Sistema de lectura del input range
const longContraseña = document.getElementById("sliderLong");
const longDisplay = document.getElementById("longContraseña");
function actualizarValor() {
  longDisplay.textContent = longContraseña.value;
}
longContraseña.addEventListener("input", actualizarValor);

//Funcion para crear las contraseñas
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numerosChars = "0123456789";
const simbolosChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
function generarContraseña() {
  let caracteres = "";
  if (minusculas.checked) caracteres += letrasMinusculas;
  if (mayusculas.checked) caracteres += letrasMayusculas;
  if (numeros.checked) caracteres += numerosChars;
  if (simbolos.checked) caracteres += simbolosChars;
  const longitud = parseInt(longContraseña.value);
  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[indice];
  }
  let tipos = 0;
  if (/[a-z]/.test(contraseña)) tipos++;
  if (/[A-Z]/.test(contraseña)) tipos++;
  if (/[0-9]/.test(contraseña)) tipos++;
  if (/[^a-zA-Z0-9]/.test(contraseña)) tipos++;
  if (longitud < 8 || tipos < 2) {
    contraseñaRandom.style.color = "red";
  } else if (longitud < 12 || (tipos < 3 && longitud < 32)) {
    contraseñaRandom.style.color = "orange";
  } else {
    contraseñaRandom.style.color = "green";
  }
  contraseñaRandom.value = contraseña;
}

//Conectar a los botones
const botonGenerar = document.getElementById("botonGenerar");
const botonGuardar = document.getElementById("botonGuardar");
const contraseñaRandom = document.getElementById("contraseñaRandom");
botonGenerar.addEventListener("click", () => {
  generarContraseña();
});
botonGuardar.addEventListener("click", () => {
  navigator.clipboard.writeText(contraseñaRandom.value);
  const textoOriginal = botonGuardar.textContent;
  botonGuardar.textContent = "!Copiado!";
  setTimeout(() => {
    botonGuardar.textContent = textoOriginal;
  }, 3000);
});

//Conectar la generacion de contraseñas  a las otras interacciones
const checkboxes = [minusculas, mayusculas, numeros, simbolos];
checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    generarContraseña();
  });
});
longContraseña.addEventListener("input", () => {
  generarContraseña();
});
