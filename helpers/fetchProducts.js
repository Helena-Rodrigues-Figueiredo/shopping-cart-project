const fetchProducts = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
