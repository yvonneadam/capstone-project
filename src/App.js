import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import FormPage from './pages/FormPage';
import CalendarPage from './pages/CalendarPage';

const StyledPage = styled.div`
  padding: 15px;
`;

export default function App() {
  return (
    <StyledPage>
      <Routes>
        <Route path="/" element={<FormPage />} />

        <Route path="calendarpage" element={<CalendarPage />} />
      </Routes>
    </StyledPage>
  );
}
