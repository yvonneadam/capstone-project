import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {BiCalendarHeart} from 'react-icons/bi';

export default function NavTop() {
  return (
    <Nav>
      <Link to="CalendarPage">
        {' '}
        <BiCalendarHeart />{' '}
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  position: fixed;
  background-color: #6d6f3a;
  width: 100%;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding-left: 210px;
`;

// const BiCalendarHeart = styled.BiCalendarHeart`
//   color: orange;
// `;
