import styled from "styled-components";

/**
 * Se define el estilo del contenedor con un mensaje publicitario
 */
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
/**
 * Mensaje publicitario en el encabezado de la página
 * @returns Retorna el contenido de un mensaje de publicidad relevante
 */
const Announcement = () => {
  return (
    <Container>
      Descubra su nuevo yo. Compra tu estilo de ropa al mejor precio.
    </Container>
  );
};

export default Announcement;
