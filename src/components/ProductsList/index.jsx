import { Products } from "../Product";
import { List } from "./styles";

export const ProductsList = ({ products, handleClick }) => {
  return (
    <List>
      {products.map((product, index) => (
        <Products product={product} handleClick={handleClick} key={index} />
      ))}
    </List>
  );
};
