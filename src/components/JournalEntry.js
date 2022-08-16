import dayjs from 'dayjs';
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
  font-size: 15px;
`;

export default function JournalEntry({datum, text}) {
  return (
    <>
      <StyledDatum>{dayjs(datum).format('DD.MM.YYYY')}</StyledDatum>
      <StyledBox>{text}</StyledBox>
    </>
  );
}
