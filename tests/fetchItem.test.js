require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it ('verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toEqual('function')
  });
  it ('Verifica se quando chamada a função fetchItem com o argumento "MLB1615760527" fetch foi chamada', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toHaveBeenCalled();
  });
  it ('Verifica se ao chamar a função fectchItems com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it ('Verifica se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto "item"', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  it ('Verifica se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const result = await fetchItem();
    expect(result).toEqual(new Error ('You must provide an url'));
  });

});
