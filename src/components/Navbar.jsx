import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const refLinksContainer = useRef(null);
  const refLinks = useRef(null);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const LinksContainerStyle = {
    height: showLinks
      ? `${refLinks.current.getBoundingClientRect().height}px`
      : `0px`,
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <span className='logo'>Bili Cocktails</span>
          <button
            type='button'
            className='btn hamburger-btn'
            onClick={() => {
              toggleShowLinks();
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          className='links-container'
          style={LinksContainerStyle}
          ref={refLinksContainer}
        >
          <div className='nav-links' ref={refLinks}>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
            <NavLink to='/contactMe' className='nav-link'>
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background: var(--white);

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .nav-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .hamburger-btn {
    color: var(--primary-500);
    background-color: transparent;
    max-width: 3rem;
    max-height: 2rem;
  }
  .links-container {
    overflow: hidden;
    transition: var(--transition);
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .hamburger-btn {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;
export default Navbar;
