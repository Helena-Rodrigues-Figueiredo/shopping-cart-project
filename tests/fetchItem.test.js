require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })
  it('Verifica se quando a função fecthItem é executada com parâmetro "MLB1615760527" a fetch é chamada', async () => {
  await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  })
  it('Verifica se quando a função fecthItem é executada com parâmetro "MLB1615760527" utiliza endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
  await fetchItem('MLB1615760527');
  const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
  expect(fetch).toHaveBeenCalledWith(endpoint);
  })
  it('Verifica se a estrutura de dados é igual ao objeto item', async () => {
  const url = 'https://api.mercadolibre.com/items/MLB1615760527';
  const data = await fetch(url);
  const dataJson = await data.json();
  expect(dataJson).toMatchObject(item);
  })
  it('Verifica se retorna "You must provide an url" quando não é passado nenhum argumento', async () => {
  await expect(fetchItem()).rejects.toThrowError(new Error('You must provide an url'));
    })
});
