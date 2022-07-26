import styled from 'styled-components';

const StyledDatum = styled.div`
  border: solid 1px;
  width: 100px;
  background-color: #f28549;
  border-color: #f28549;
  border-radius: 5px;
  padding: 9px;
  margin-bottom: 5px;
  color: #fae9c3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 15px;
`;

const StyledBox = styled.div`
  border: solid 1px;
  border-color: #e86d1b;
  background-color: #e86d1b;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 25px;
  color: #fae9c3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 15px;
`;

const Dayentry = props => {
  return (
    <>
      <StyledDatum>{props.datum}</StyledDatum>
      <StyledBox>{props.text}</StyledBox>
    </>
  );
};

export default Dayentry;
