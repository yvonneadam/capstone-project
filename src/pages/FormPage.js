import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';
import {writeToLocalStorage, loadFromLocalStorage} from '../util/localstorage';
import dayjs from 'dayjs';

const StyledTextArea = styled.textarea`
  width: 80%;
  height: 200px;
  margin: 35px;
  padding: 15px;
  border: 7px solid #ffa33a;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledButton = styled.button`
  position: absolute;
  left: 130px;
  top: 350px;
  background-color: #fc9622;
  border: solid #fc9622;
  color: #797431;
  border-radius: 15px;
  padding: 7px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
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
      <Heading> What are you grateful for today? </Heading>
      <form>
        <StyledLabel htmlFor="GratitudeJournal">Form for GratitudeJournal </StyledLabel>
        <StyledTextArea
          onChange={event => setTextArea(event.target.value)}
          aria-label="Form for GratitudeJournal"
          name="journal"
          id="GratitudeJournal"
          placeholder="Write here something what you're greatful for today :)"
          required
        />
        <StyledButton
          onClick={event => {
            event.preventDefault();
            onSubmit();
            event.target.reset();
          }}
        >
          Submit
        </StyledButton>
      </form>
    </>
  );
}
