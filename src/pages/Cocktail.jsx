import styled from 'styled-components';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import axios from 'axios';
const cocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`
    ${cocktailAPI}${id}`);
  return { data };
};

const Cocktail = () => {
  const { data } = useLoaderData();

  if (!data.drinks) return <Navigate to='/' />;

  const drink = data.drinks[0];
  const {
    strDrink: drinkName,
    strCategory: category,
    strAlcoholic: alcoholType,
    strGlass: glass,
    strDrinkThumb: img,
    strInstructions: instructions,
  } = drink;
  const ingredients = Object.keys(drink)
    .filter((key) => {
      return key.includes('strIngredient') && drink[key] !== null;
    })
    .map((key) => drink[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/'>
          <button type='button' className='btn'>
            back home
          </button>
        </Link>
        <h1>{drinkName}</h1>
      </header>
      <div className='drink'>
        <img src={img} alt={drinkName} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {drinkName}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>alcohol type:</span>
            {alcoholType}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((item, index) => {
              return index < ingredients.length - 1 ? `${item}, ` : item;
            })}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Cocktail;
