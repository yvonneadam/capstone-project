import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function NavTop() {
  return (
    <Nav>
      <Link to="ScalePage">ScalePage</Link>
      <Link to="/">FormPage</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  border: solid #e86d1b;
  background-color: #e86d1b;
  gap: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  text-align: center;
`;
const Link = styled(NavLink)`
  color: #ffffff;
  background-color: #e86d1b;
  text-align: center;
`;
