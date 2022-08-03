import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: #797431;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 25px;
  margin-bottom: 35px;
`;

export default function Heading({text}) {
  return <StyledHeading>{text}</StyledHeading>;
}
