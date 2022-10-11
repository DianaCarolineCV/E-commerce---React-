import { HeadProducts, MainNoProducts, MainProducts, Total } from "./styles";

export const Cart = ({ currentSale, setCurrentSale }) => {
  function TotalPrice() {
    return currentSale.reduce((acc, act) => act.price + acc, 0);
  }

  function removeProduct(product) {
    setCurrentSale(
      currentSale.filter((_, index) => index !== currentSale.indexOf(product))
    );
  }

  function removeAll() {
    setCurrentSale([]);
  }

  function getQuantity(id) {
    return currentSale.filter((element) => element.id === id).length;
  }

  return currentSale.length === 0 ? (
    <div>
      <HeadProducts>
        <section>
          <p>Carrinho de compras</p>
        </section>
      </HeadProducts>
      <MainNoProducts>
        <section>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </section>
      </MainNoProducts>
    </div>
  ) : (
    <div>
      <HeadProducts>
        <section>
          <p>Carrinho de compras</p>
        </section>
      </HeadProducts>
      <section>
        <MainProducts>
          {[...new Set(currentSale)].map((product) => (
            <div>
              <p>{getQuantity(product.id)}x</p>
              <div>
                <img src={product.img} alt="Imagem do produto" />
              </div>
              <section>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
              </section>
              <button onClick={() => removeProduct(product)} type="button">
                Remover
              </button>
            </div>
          ))}
        </MainProducts>
      </section>
      <section>
        <Total>
          <div>
            <p>Total</p>
            <span>R$ {TotalPrice().toFixed([2])}</span>
          </div>
          <button type="button" onClick={removeAll}>
            Remover todos
          </button>
        </Total>
      </section>
    </div>
  );
};
