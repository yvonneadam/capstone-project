import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {RiHandHeartLine} from 'react-icons/ri';
import {FaChartBar} from 'react-icons/fa';
import {BsChatSquareQuote} from 'react-icons/bs';

// const {RiHandHeartLine} = styled.RiHandHeartLine`
//   background-color: black;
// `;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 15px;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #6d6f3a;
  padding: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Link = styled(NavLink)`
  color: #fc9622;
  display: flex;
`;

export default function NavTop() {
  return (
    <StyledFooter>
      <Nav>
        <Link to="ScalePage">
          <FaChartBar size={'30'} />
        </Link>
        <Link to="/">
          <RiHandHeartLine size={'30'} />
        </Link>
        <Link to="QuotePage">
          <BsChatSquareQuote size={'30'} />
        </Link>
      </Nav>
    </StyledFooter>
  );
}
