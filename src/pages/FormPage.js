import Heading from '../components/Heading';
import {useState} from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <Heading text={'What are you grateful for today?'} />
      <form>
        <StyledLabel htmlFor="GratitudeJournal">Form for GratitudeJournal </StyledLabel>
        <StyledTextArea
          aria-label="Form for GratitudeJournal"
          name="journal"
          id="GratitudeJournal"
          placeholder="Write here something what you're greatful for today :)"
          required
        />
        <StyledButton>Submit</StyledButton>
      </form>
    </>
  );
}
