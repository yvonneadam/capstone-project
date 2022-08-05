import JournalEntry from '../components/JournalEntry';
import Heading from '../components/Heading';
import {loadFromLocalStorage} from '../util/localstorage';
import {useState} from 'react';

export default function CalendarPage() {
  const [data, setData] = useState(loadFromLocalStorage('JournalEntry') ?? []);
  console.log(data.length);
  return (
    <>
      <Heading text={'Du bist ein Kalender'} />
      {data.map((object, index) => (
        <JournalEntry key={index} text={object.text} datum={object.date} />
      ))}
    </>
  );
}
