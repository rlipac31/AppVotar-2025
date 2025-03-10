// utils/generateSolidPredefinedColors.js

/**
 * Retorna un array de colores sólidos predefinidos.
 * Si el número de colores solicitados excede la cantidad de colores definidos,
 * se realiza un ciclo a través de la lista.
 *
 * @param {number} count - La cantidad de colores a generar.
 * @returns {string[]} Array con colores en formato hexadecimal.
 */
 export function  generatePredefinedSolidColors(count) {
  const colorList = [
    "#3498db", // Azul
    "5499c7", //celesste
    "#1d8348", // Verde
    "#48c9b0",//vverde cllaro
    "#f1c40f", // Amarillo
    "#f7dc6f",//amarillo  claro
    "#e74c3c", // Rojo
    "#9b59b6", // Púrpuras
    "#e67e22", // Naranja
   
  ];
  return Array.from({ length: count }, (_, i) => colorList[i % colorList.length]);
}

/**
 * Genera un array de colores sólidos aleatorios en formato HSL.
 * Se fija una saturación del 100% y una luminosidad del 50% para obtener colores vivos.
 *
 * @param {number} count - Número de colores a generar.
 * @returns {string[]} Array de colores en formato HSL.
 */
 export  function generateSolidRandomColors(count) {
  return Array.from({ length: count }, () => {
    const hue = Math.floor(Math.random() * 360); // Valor aleatorio entre 0 y 359
    return `hsl(${hue}, 100%, 50%)`;
  });
}
// utils/generateColors.js

/**
 * Genera un array de colores hexadecimales aleatorios.
 * @param {number} count - La cantidad de colores a generar.
 * @returns {string[]} Array de colores en formato hexadecimal.
 */
export function generateRandomColors(count) {
  return Array.from({ length: count }, () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
  );
}


