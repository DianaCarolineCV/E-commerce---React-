import { ListProducts } from "./styles";

export const Products = ({ product, handleClick }) => {
  return (
    <ListProducts>
      <li>
        <div>
          <img src={product.img} alt="Imagem do produto" />
        </div>
        <section>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <h3>R$ {product.price.toFixed([2])}</h3>
          <button onClick={() => handleClick(product.id)} type="button">
            Adicionar
          </button>
        </section>
      </li>
    </ListProducts>
  );
};
