import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';
import {writeToLocalStorage, loadFromLocalStorage} from '../util/localstorage';
import dayjs from 'dayjs';

const Styledform = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px 25px;
`;

const StyledTextArea = styled.textarea`
  height: 250px;
  width: 250px;
  padding: 40px;
  text-align: center;
  border: 7px solid #fc9622;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.7;
  &:focus::placeholder {
    color: transparent;
  }
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: #fc9622;
  color: #fff;
  border-radius: 35px;
  padding: 5px 10px 3px 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  box-shadow: 0 9px #999;

  &:hover {
    background-color: #565e38;
    border: solid #565e38;
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(40px);
  }
`;

const StyledLabel = styled.label`
  display: none;
`;

export default function FormPage() {
  const [textArea, setTextArea] = useState('');

  const onSubmit = () => {
    const loadFromStorage = loadFromLocalStorage('JournalEntry') ?? [];
    writeToLocalStorage('JournalEntry', [...loadFromStorage, {text: textArea, date: dayjs()}]);
    setTextArea('');
  };

  return (
    <>
      <Heading>
        What are you grateful <br /> for today?
      </Heading>

      <Styledform>
        <StyledLabel htmlFor="GratitudeJournal">Form for GratitudeJournal </StyledLabel>
        <StyledTextArea
          value={textArea}
          onChange={event => setTextArea(event.target.value)}
          aria-label="Form for GratitudeJournal"
          name="journal"
          id="GratitudeJournal"
          placeholder="This is your space to write about the good things happening today and what you appreciate about yourself."
          required
        />
      </Styledform>

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
    </>
  );
}
