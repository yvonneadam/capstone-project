import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledQuote = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 70px;
  border: 7px solid #ffa33a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`;

export default function QuotePage() {
  return (
    <StyledWrapper>
      <StyledQuote img src="./images/quote.jpg" alt="Quote of the Day" />
    </StyledWrapper>
  );
}
