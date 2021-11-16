import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/**
 * Se construyen los diferentes estilos para cada uno de los componentes que se incluyen en el menú de navegación
 */
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Genre = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: none;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  display: none;
  ${mobile({ width: "50px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
/**
 * Menú de navegación
 * @returns Retorna los componentes del menú de navegación, entre los que se encuentra una lista desplegable para seleccionar el género del cliente, una barra de búsqueda para filtrar los productos, el logo de la empresa, una herramienta de registro y de logueo, y finalmente el carrito de compras
 */
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Genre>
            <select name="Género">
              <option value="1">Hombre</option>
              <option value="2">Mujer</option>
            </select>
          </Genre>
          <SearchContainer>
            <Input placeholder="Búsqueda" />
            <Search style={{ color: "gray", fontSize: 16, display: "none" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={`/`}>
            <Button>Cidenet Shop</Button>
          </Link>
        </Center>
        <Right>
          {/* <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem> */}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
