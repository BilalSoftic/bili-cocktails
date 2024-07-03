import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CocktailCard = ({ id, img, drinkName, glass, alcoholType }) => {
  return (
    <Wrapper>
      <img src={img} alt={drinkName} className='img' />
      <div className='footer'>
        <h4>{drinkName}</h4>
        <h5>{glass}</h5>
        <p>{alcoholType}</p>
        <Link to={`/cocktail/${id}`}>
          <button type='button' className='btn'>
            details
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;
export default CocktailCard;
