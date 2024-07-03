import styled from 'styled-components';
import CocktailCard from './CocktailCard';
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <Wrapper>
        <h4 style={{ textAlign: 'center' }}>
          There are no matching cocktails found...
        </h4>
      </Wrapper>
    );
  }

  const formattedItems = drinks.map((item) => {
    const {
      idDrink: id,
      strDrinkThumb: img,
      strDrink: drinkName,
      strGlass: glass,
      strAlcoholic: alcoholType,
    } = item;
    return { id, img, drinkName, glass, alcoholType };
  });
  return (
    <Wrapper>
      {formattedItems.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;
export default CocktailList;
