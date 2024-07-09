import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
import { useQuery } from '@tanstack/react-query';
const cocktailsAPI =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (cocktailName) => {
  return {
    queryKey: ['search', cocktailName || ''],
    queryFn: async () => {
      const response = await axios.get(`
    ${cocktailsAPI}${cocktailName}
  `);

      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const cocktailName = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(cocktailName));
    return { cocktailName };
  };

function Landing() {
  const { cocktailName } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(cocktailName));
  return (
    <>
      <SearchForm cocktailName={cocktailName} />
      <CocktailList drinks={drinks} />
    </>
  );
}
export default Landing;
