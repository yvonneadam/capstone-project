import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import FormPage from './pages/FormPage';
import CalendarPage from './pages/CalendarPage';
import NavTop from './components/NavTop';
import NavBottom from './components/NavBottom';

const StyledPage = styled.div`
  padding: 35px 15px;
`;

export default function App() {
  return (
    <>
      <NavTop />
      <StyledPage>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="calendarpage" element={<CalendarPage />} />
        </Routes>
      </StyledPage>
      <NavBottom />
    </>
  );
}
