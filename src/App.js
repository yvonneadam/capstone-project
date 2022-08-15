import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import FormPage from './pages/FormPage';
import CalendarPage from './pages/CalendarPage';
import NavTop from './components/NavTop';
import NavBottom from './components/NavBottom';
import JournalentryPage from './pages/JournalentryPage';
import QuotePage from './pages/QuotePage';
import ScalePage from './pages/ScalePage';

const StyledMain = styled.main`
  background: url(/images/background.svg) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100%;
  opacity: 0.9;
`;

const StyledPage = styled.div`
  background-color: transparent;
  padding: 75px 20px 100px;
`;

export default function App() {
  return (
    <>
      <NavTop />
      <StyledMain>
        <StyledPage>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="scalepage" element={<ScalePage />} />
            <Route path="calendarpage" element={<CalendarPage />} />
            <Route path="journalentrypage/:datum" element={<JournalentryPage />} />
            <Route path="quotepage" element={<QuotePage />} />
          </Routes>
        </StyledPage>
      </StyledMain>
      <NavBottom />
    </>
  );
}
