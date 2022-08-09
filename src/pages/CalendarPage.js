import Heading from '../components/Heading';
import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import {useNavigate} from 'react-router-dom';

export default function CalendarPage() {
  const [entries, setEntries] = useState(loadFromLocalStorage('JournalEntry') ?? []);
  let navigate = useNavigate();

  console.log(entries.find(entry => {}));
  return (
    <>
      <Heading>Du bist ein Kalender</Heading>
      <Calendar
        tileContent={({activeStartDate, date, view}) =>
          view === 'month' &&
          entries.find(entry => {
            return dayjs(entry.date).isSame(date, 'day');
          }) ? (
            <p>.</p>
          ) : null
        }
        onClickDay={(value, event) => navigate('/journalentrypage')}
      />
    </>
  );
}
