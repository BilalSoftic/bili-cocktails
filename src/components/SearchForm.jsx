import styled from 'styled-components';
import { Form, useNavigation } from 'react-router-dom';
function SearchForm({ cocktailName }) {
  const navigation = useNavigation();
  const isSearching = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={cocktailName}
        />
        <button type='submit' className='btn' disabled={isSearching}>
          {isSearching ? 'Searching' : 'Search'}
        </button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem;
  background: white;
  margin-bottom: 6rem;
  border-radius: 2rem;
  form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export default SearchForm;
