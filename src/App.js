import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import FormPage from './pages/FormPage';
import CalendarPage from './pages/CalendarPage';
import NavTop from './components/NavTop';
import NavBottom from './components/NavBottom';
import JournalEntry from './components/JournalEntry';
import QuotePage from './pages/QuotePage';

const StyledPage = styled.div`
  background-color: transparent;
`;

const StyledImg = styled.img`
  width: 375px;
  height: 667px;
  z-index: -1;
  position: absolute;
  top: 0;
  opacity: 0.9;
`;

export default function App() {
  return (
    <>
      <header>
        <NavTop />
      </header>
      <main>
        <StyledPage>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="calendarpage" element={<CalendarPage />} />
            <Route path="journalentrypage" element={<JournalEntry />} />
            <Route path="quotepage" element={<QuotePage />} />
          </Routes>
          <StyledImg img src="/images/background.svg" alt="Background Image" />
        </StyledPage>
      </main>
      <footer>
        <NavBottom />
      </footer>
    </>
  );
}
