import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';
import {writeToLocalStorage, loadFromLocalStorage} from '../util/localstorage';
import dayjs from 'dayjs';

const StyledTextArea = styled.textarea`
  height: 250px;
  width: 250px;
  margin: 20px 50px;
  padding: 10px;
  border: 7px solid #fc9622;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: #fc9622;
  border: solid #fc9622;
  color: #fff;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledLabel = styled.label`
  display: none;
`;

export default function FormPage() {
  const [textArea, setTextArea] = useState('');

  const onSubmit = () => {
    const loadFromStorage = loadFromLocalStorage('JournalEntry') ?? [];
    writeToLocalStorage('JournalEntry', [...loadFromStorage, {text: textArea, date: dayjs()}]);
  };

  return (
    <>
      <Heading> What are you grateful for today?</Heading>
      <form>
        <StyledLabel htmlFor="GratitudeJournal">Form for GratitudeJournal </StyledLabel>
        <StyledTextArea
          onChange={event => setTextArea(event.target.value)}
          aria-label="Form for GratitudeJournal"
          name="journal"
          id="GratitudeJournal"
          placeholder="Here is room for appreciation for yourself and the good things that happened today."
          required
        />
        <StyledButtonWrapper>
          <StyledButton
            onClick={event => {
              event.preventDefault();
              onSubmit();
            }}
          >
            Submit
          </StyledButton>
        </StyledButtonWrapper>
      </form>
    </>
  );
}
