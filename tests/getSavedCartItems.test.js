const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se ao executar getSavedCartItem o localStorage.getItem é chamado', () => {
    getSavedCartItems
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Verifica se com o argumento "<ol><li>Item</li></ol>" o localStorage.setItem é chamado com dois parâmentros "cartItems" e o valor passado para saveCartItems', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});
