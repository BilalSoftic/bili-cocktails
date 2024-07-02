import styled from 'styled-components';
import img from '../assets/not-found.svg';
import { Link, useRouteError } from 'react-router-dom';
function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt='not-found.svg' />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for.</p>
        <Link to='/'>
          <a href='#'>Back Home</a>
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>There was an Error..</h3>
      <Link to='/'>
        <a href='#'>Back Home</a>
      </Link>
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
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;
export default Error;
