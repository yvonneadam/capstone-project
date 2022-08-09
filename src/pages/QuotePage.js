import styled from 'styled-components';

const StyledQuote = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  left: 62.5px;
  top: 175px;
  border: 7px solid #ffa33a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export default function QuotePage() {
  return <StyledQuote img src="./images/quote.jpg" alt="Quote of the Day" />;
}
