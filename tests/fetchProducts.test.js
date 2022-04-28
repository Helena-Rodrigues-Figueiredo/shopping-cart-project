require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Verifica se quando a função fecthProducts é executada com parâmetro "computador" a fetch é chamada', async () => {
  await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  it('Verifica se quando a função fecthProducts é executada com parâmetro "computador" utiliza endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
  await fetchProducts('computador');
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  expect(fetch).toHaveBeenCalledWith(endpoint);
  })
  // it('Verifica se a estrutura de dados é igual ao objeto computadorSearch', async () => {
  // await fetchProducts('computador');
  // expect(fetch).toMatchObject(computadorSearch);
  // })
  it('Verifica se retorna "You must provide an url" quando não é passado nenhum argumento', async () => {
    const erro = new Error('You must provide an url.');
    await fetchProducts();
    expect(fetch).toMatchObject(erro);
    })
});
