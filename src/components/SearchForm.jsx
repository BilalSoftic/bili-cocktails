import styled from 'styled-components';
function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.cocktailInput.value);
  };
  return (
    <Wrapper>
      <form action='submit' onSubmit={handleSubmit}>
        <input type='text' name='cocktailInput' className='form-input' />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5rem;
  background: white;
  margin-bottom: 6rem;
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
