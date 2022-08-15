import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: #565e38;
  font-family: 'Karla', sans-serif;
  font-size: 25px;
  margin-bottom: 0px;
  margin-top: 60px;
  margin-left: 25px;
  text-align: center;
`;

export default function Heading({children}) {
  return <StyledHeading>{children}</StyledHeading>;
}
