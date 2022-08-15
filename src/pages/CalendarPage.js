import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const StyledReflectionHeading = styled.h1`
  color: #565e38;
  font-family: 'Karla', sans-serif;
  font-size: 25px;
  margin: 30px 0px 30px;
  text-align: left;
`;

export default function CalendarPage() {
  const [journalEntries, setJournalEntries] = useState(loadFromLocalStorage('JournalEntry') ?? []);
  const [ratingEntries, setRatingEntries] = useState(loadFromLocalStorage('Ratings') ?? []);
  let navigate = useNavigate();

  const tileContent = ({activeStartDate, date, view}) => {
    if (!view === 'month') return null;

    const hasJournalEntry = journalEntries.find(entry => {
      return dayjs(entry.date).isSame(date, 'day');
    });

    const hasRatingEntry = ratingEntries.find(entry => {
      return dayjs(entry.date).isSame(date, 'day');
    });

    if (hasJournalEntry && hasRatingEntry) {
      return <div>. .</div>;
    }

    if (hasJournalEntry || hasRatingEntry) {
      return <div>.</div>;
    }

    return null;
  };

  return (
    <>
      <StyledReflectionHeading>Take your time for reflection</StyledReflectionHeading>
      <Calendar
        tileContent={tileContent}
        onClickDay={(day, event) => navigate('/journalentrypage/' + dayjs(day).format('YYYY-MM-DD'))}
      />
    </>
  );
}
