import Heading from '../components/Heading';
import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom';

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
      <Heading>Take your time for reflection</Heading>
      <Calendar
        tileContent={tileContent}
        onClickDay={(day, event) => navigate('/journalentrypage/' + dayjs(day).format('YYYY-MM-DD'))}
      />
    </>
  );
}
