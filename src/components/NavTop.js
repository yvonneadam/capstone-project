import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {BiCalendarHeart} from 'react-icons/bi';

const StyledHeader = styled.header`
  position: fixed;
  margin-top: 20px;
  width: 100%;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #6d6f3a;
  width: 100%;
  padding: 10px 45px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Link = styled(NavLink)`
  color: #fc9622;
  text-decoration: none;
`;

export default function NavTop() {
  return (
    <StyledHeader>
      <Nav>
        <Link to="CalendarPage">
          <BiCalendarHeart size={'30'} />
        </Link>
      </Nav>
    </StyledHeader>
  );
}
