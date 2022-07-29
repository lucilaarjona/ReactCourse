/*
  new Promise((resolve, reject) => {
  resolve si la ejecucion fue exitosa
  reject si no  ejecucion bien
  }
*/
const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Esto no es valido")
    } else {
      resolve(a + b);
    }
  })
}
const result = sumar(3, 5)
  .then((res) => {
    console.log(res)
    document.write(res)
  })
  .catch((error) => {
    console.log(error)
    document.write(error)
  })

/*.then hace referencia al  resolve, si se resuelve entra en la funcion them*/
/*.catch hace referencia al  reject */
