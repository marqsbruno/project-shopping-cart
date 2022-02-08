const getSavedCartItems = () => localStorage.getItem('cartKey');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
