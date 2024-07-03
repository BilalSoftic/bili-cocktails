import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
const cocktailsAPI =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const cocktailName = '';
  const response = await axios.get(`
    ${cocktailsAPI}${cocktailName}
  `);

  return { drinks: response.data.drinks, cocktailName };
};

function Landing() {
  const { drinks, cocktailName } = useLoaderData();
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
