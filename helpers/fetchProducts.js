const fetchProducts = async (query) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const result = await fetch(url);
    const data = await result.json();
  
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}