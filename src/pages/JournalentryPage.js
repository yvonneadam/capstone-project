import JournalEntry from '../components/JournalEntry';
import Heading from '../components/Heading';
import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';

export default function CalendarPage() {
  const [data, setData] = useState(loadFromLocalStorage('JournalEntry') ?? []);
  return (
    <>
      <Heading> Du bist ein Kalender </Heading>
      {data.map((object, index) => (
        <JournalEntry key={index} text={object.text} datum={object.date} />
      ))}
    </>
  );
}
