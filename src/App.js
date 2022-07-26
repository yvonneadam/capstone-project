import styled, {css} from 'styled-components';

const StyledPage = styled.div`
  padding: 15px;
`;

const StyledHeading = styled.h1`
  color: violet;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 25px;
`;

const StyledBox = styled.div`
  border: solid 1px;
  border-color: grey;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 25px;
  color: grey;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
`;

export default function App() {
  return (
    <div>
      <StyledPage>
        <StyledHeading>Wofür bist du heute dankbar?</StyledHeading>
        <div>
          <StyledBox>Ich habe mir bewusst eine Stunde Zeit genommen und Yoga gemacht.</StyledBox>
          <StyledBox>Ich hatte einen lustigen Abend mit Freunden am Lagerfeuer.</StyledBox>
          <StyledBox>Ich habe Zeit mit meinen Eltern und Großeltern verbracht.</StyledBox>
        </div>
      </StyledPage>
    </div>
  );
}
