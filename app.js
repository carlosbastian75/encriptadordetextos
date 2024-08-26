const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function validacionEntrada() {
  const soloLetras = /^[A-Za-zñÑ\s]*$/;
  const valor = textArea.value;
  if (!soloLetras.test(valor)) {
    alert(
      "lo siento! solo puedes ingresar letras; no se permiten números ni caracteres especiales"
    );
    textArea.value = valor.replace(/[^A-Za-z\s]/g, "");
  }
}

textArea.addEventListener("input", validacionEntrada);

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (stringEncriptada.includes(codigoMatriz[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        codigoMatriz[i][0],
        codigoMatriz[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (stringDesencriptada.includes(codigoMatriz[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        codigoMatriz[i][1],
        codigoMatriz[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function btnCopiar() {
  navigator.clipboard
    .writeText(mensaje.value)
    .then(() => {
      console.log("Texto copiado");
      textArea.value = mensaje.value;
    })
    .catch((err) => {
      console.error("No se pudo copiar el texto", err);
    });
}
