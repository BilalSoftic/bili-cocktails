import styled from 'styled-components';
import { Link, useRouteError } from 'react-router-dom';
function SinglePageError() {
  const error = useRouteError();

  return (
    <Wrapper>
      <h3>{error.message}</h3>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin-bottom: 0.5rem;
  }
`;
export default SinglePageError;
