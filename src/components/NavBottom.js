import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function NavTop() {
  return (
    <Nav>
      <Link to="ScalePage">ScalePage</Link>
      <Link to="/">FormPage</Link>
      <Link to="QuotePage">QuotePage</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 600px;
  background-color: #6d6f3a;
  width: 100%;
  padding: 15px;
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Link = styled(NavLink)`
  color: white;
  display: flex;
  padding-left: 50px;
`;
