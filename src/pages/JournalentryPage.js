import JournalEntry from '../components/JournalEntry';
import Heading from '../components/Heading';
import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import dayjs from 'dayjs';
import RatingEntry from '../components/RatingEntry';

export default function JournalEntryPage() {
  const [journalEntrys, setJournalEntrys] = useState(loadFromLocalStorage('JournalEntry') ?? []);
  const [ratings, setRatings] = useState(loadFromLocalStorage('Ratings') ?? []);
  let {datum} = useParams();

  return (
    <>
      <Heading> Take your time for reflection</Heading>
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
