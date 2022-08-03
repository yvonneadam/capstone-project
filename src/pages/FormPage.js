import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';
import JournalEntry from '../components/JournalEntry';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
`;

const StyledButton = styled.button`
  color: blue;
`;

const StyledLabel = styled.label`
  display: none;
`;

export default function FormPage() {
  const [textArea, settextArea] = useState('');
  const [journalEntry, setjournalEntry] = useState('');

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
            setjournalEntry(textArea);
          }}
        >
          Submit
        </StyledButton>
      </form>
      <JournalEntry text={journalEntry} datum={'22.08.2022'} />
    </>
  );
}
