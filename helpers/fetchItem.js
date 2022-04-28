const fetchItem = async (sku) => {
  const url = `https://api.mercadolibre.com/items/${sku}`;
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
