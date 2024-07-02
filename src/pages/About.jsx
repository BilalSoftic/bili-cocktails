import { Link } from 'react-router-dom';
import styled from 'styled-components';

function About() {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        Introducing "Bili Cocktails," a practice project for React. This app
        fetches cocktails from the entertaining Cocktails DB API, providing a
        variety of enchanting drink recipes. With a simple flick of your finger,
        you'll discover a treasure trove of mixes that will make your taste buds
        dance. Perfect for shaking up your mixology game, one fantastical
        cocktail at a time!
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;
export default About;
