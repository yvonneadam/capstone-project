import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';
import JournalEntry from '../components/JournalEntry';
import {writeToLocalStorage, loadFromLocalStorage} from '../util/localstorage';

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
    const loadFromStorage = loadFromLocalStorage('JournalEntry');
    console.log(loadFromStorage);

    writeToLocalStorage('JournalEntry', [...loadFromStorage, {text: textArea, date: getCurrentDate()}]);
  };

  function getCurrentDate() {
    return new Date().toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    // .replace(/[.,]/g, match => (match === '.' ? '.' : ''));
  }

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
          }}
        >
          Submit
        </StyledButton>
      </form>
    </>
  );
}
