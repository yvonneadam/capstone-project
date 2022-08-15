import JournalEntry from '../components/JournalEntry';
import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import dayjs from 'dayjs';
import RatingEntry from '../components/RatingEntry';
import styled from 'styled-components';

const StyledReflectionHeading = styled.h1`
  color: #565e38;
  font-family: 'Karla', sans-serif;
  font-size: 25px;
  margin: 30px 0px 30px;
  text-align: left;
`;

export default function JournalEntryPage() {
  const [journalEntrys, setJournalEntrys] = useState(loadFromLocalStorage('JournalEntry') ?? []);
  const [ratings, setRatings] = useState(loadFromLocalStorage('Ratings') ?? []);
  let {datum} = useParams();

  return (
    <>
      <StyledReflectionHeading>Take your time for reflection</StyledReflectionHeading>
      {journalEntrys
        .filter(entry => dayjs(entry.date).isSame(datum, 'day'))
        .map((entry, index) => (
          <JournalEntry key={index} text={entry.text} datum={entry.date} />
        ))}

      {ratings
        .filter(rating => dayjs(rating.date).isSame(datum, 'day'))
        .map((rating, index) => (
          <RatingEntry key={index} ratings={rating} />
        ))}
    </>
  );
}
