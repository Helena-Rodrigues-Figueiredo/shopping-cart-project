const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const data = await fetch(url);
  const dataJson = await data.json();
  console.log(dataJson.results);
  return dataJson.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
