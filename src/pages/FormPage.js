import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';
import JournalEntry from '../components/JournalEntry';
import {writeToLocalStorage, loadFromLocalStorage} from '../util/localstorage';
import dayjs from 'dayjs';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
`;

const StyledButton = styled.button`
  color: #797431;
  border-radius: 15px;
  padding: 5px;
  margin: 10px;
  text-align: center;
`;

const StyledLabel = styled.label`
  display: none;
`;

export default function FormPage() {
  const [textArea, settextArea] = useState('');
  const onSubmit = () => {
    const loadFromStorage = loadFromLocalStorage('JournalEntry') ?? [];
    console.log(loadFromStorage);

    writeToLocalStorage('JournalEntry', [...loadFromStorage, {text: textArea, date: dayjs()}]);
  };

  return (
    <>
      <Heading text={'What are you grateful for today?'} />
      <form>
        <StyledLabel htmlFor="GratitudeJournal">Form for GratitudeJournal </StyledLabel>
        <StyledTextArea
          onChange={event => settextArea(event.target.value)}
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
