import JournalEntry from '../components/JournalEntry';
import Heading from '../components/Heading';

export default function CalendarPage() {
  const data = [
    {
      text: 'Ich habe mir bewusst eine Stunde Zeit genommen und Yoga praktiziert.',
      date: '21.07.2022',
    },
    {
      text: 'Ich hatte einen lustigen Abend mit Freunden am Lagerfeuer.',
      date: '20.07.2022',
    },
    {
      text: 'Ich habe Zeit mit meinen Eltern und Großeltern verbracht.',
      date: '19.07.2022',
    },
    {
      text: 'Ich habe mir bewusst eine Stunde Zeit genommen und Yoga praktiziert.',
      date: '21.07.2022',
    },
    {
      text: 'Ich hatte einen lustigen Abend mit Freunden am Lagerfeuer.',
      date: '20.07.2022',
    },
    {
      text: 'Ich habe Zeit mit meinen Eltern und Großeltern verbracht.',
      date: '19.07.2022',
    },
  ];

  return (
    <>
      <Heading text={'Du bist ein Kalender'} />
      {data.map((object, index) => (
        <JournalEntry key={index} text={object.text} datum={object.date} />
      ))}
    </>
  );
}
