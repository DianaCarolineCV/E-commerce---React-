import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ProductsList } from "../ProductsList";
import Mask from "../../styles/assets/Mask Group (1).png";
import { Container, Header, Loading } from "./styles";
import { Cart } from "../Cart";

export const AppProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    api
      .get(`/products`)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function showProducts() {
    setFilteredProducts(
      products.filter(
        (element) =>
          element.name
            .toLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim()) ||
          element.category
            .toLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim())
      )
    );
  }

  function handleClick(id) {
    setCurrentSale([
      ...currentSale,
      products.find((element) => element.id === id),
    ]);
  }

  return (
    <>
      {loading ? (
        <Loading>
          <div>
            <p></p>
          </div>
        </Loading>
      ) : (
        <>
          <Header>
            <img src={Mask} alt="logo" />
            <form>
              <input
                onChange={(event) => setFilter(event.target.value)}
                type="input"
                placeholder="Digitar pesquisa"
                value={filter}
                required
              />
              <button type="button" onClick={() => showProducts()}>
                Pesquisar
              </button>
            </form>
          </Header>
          <Container>
            <ProductsList
              products={filteredProducts}
              handleClick={handleClick}
            />
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          </Container>
        </>
      )}
    </>
  );
};
