const fetchItem = async (ItemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${ItemID}`;
    const result = await fetch(url);
    const data = await result.json();
  
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
