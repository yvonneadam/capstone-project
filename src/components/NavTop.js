import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function NavTop() {
  return (
    <Nav>
      <Link to="CalendarPage">CalendarPage</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  border: solid;
  position: fixed;
  background-color: #e86d1b;
  color: #e86d1b;
  width: 100%;
  padding: 10px;
`;

const Link = styled(NavLink)`
  color: #fff;
  background-color: #e86d1b;
  text-decoration: none;
`;
