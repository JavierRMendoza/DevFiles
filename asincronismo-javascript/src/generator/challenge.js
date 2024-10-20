import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Función para obtener datos
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// Generador para manejar la lógica
function* fetchGenerator(urlApi) {
  try {
    const products = yield fetchData(`${urlApi}/products`);
    const product = yield fetchData(`${urlApi}/products/${products[0].id}`);
    const category = yield fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
}

// Función parara ejecutar el generador
async function runGenerator(generator, urlApi) {
  const gen = generator(urlApi);
  let result = gen.next();

  while (!result.done) {
    result = gen.next(await result.value);
  }
}

// Ejecuta el generador
runGenerator(fetchGenerator, API);