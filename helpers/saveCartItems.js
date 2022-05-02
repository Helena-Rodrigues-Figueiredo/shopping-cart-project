const saveCartItems = (item) => {
  const elemento = item.innerHTML;
  localStorage.setItem('cartItems', elemento);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
