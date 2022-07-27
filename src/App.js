import styled from 'styled-components';
import Dayentry from './components/Dayentry';

const StyledPage = styled.div`
  padding: 15px;
`;

const StyledHeading = styled.h1`
  color: #797431;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 25px;
  margin-bottom: 35px;
`;

export default function App() {
  const dayEntries = [
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
    <StyledPage>
      <StyledHeading>Wofür bist du heute dankbar?</StyledHeading>

      <div>
        {dayEntries.map((object, index) => (
          <Dayentry key={index} text={object.text} datum={object.date} />
        ))}
      </div>
    </StyledPage>
  );
}
