import Heading from '../components/Heading';

export default function FormPage() {
  return (
    <>
      <Heading text={'What are you grateful for today?'} />
      <form>
        <label htmlFor="GratitudeJournal" />
        <input type="text" name="journal" id="journal" required />
      </form>
    </>
  );
}
