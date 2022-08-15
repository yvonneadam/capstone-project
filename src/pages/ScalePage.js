import Rating from 'react-rating';
import {useState} from 'react';
import styled from 'styled-components';
import {writeToLocalStorage, loadFromLocalStorage} from '../util/localstorage';
import dayjs from 'dayjs';

// const Rating = styled(Rating)`
//   color: green;
// `;

const StyledButton = styled.button`
  display: block;
  background-color: #fc9622;
  border: solid #fc9622;
  color: #fff;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: green;
  }
`;

export default function ScalePage() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [rating7, setRating7] = useState(0);
  const [rating8, setRating8] = useState(0);

  const onSubmit = () => {
    const loadFromStorage = loadFromLocalStorage('Ratings') ?? [];
    writeToLocalStorage('Ratings', [
      ...loadFromStorage,
      {
        rating1: rating1,
        rating2: rating2,
        rating3: rating3,
        rating4: rating4,
        rating5: rating5,
        rating6: rating6,
        rating7: rating7,
        rating8: rating8,
        date: dayjs(),
      },
    ]);
    setRating1(0);
    setRating2(0);
    setRating3(0);
    setRating4(0);
    setRating5(0);
    setRating6(0);
    setRating7(0);
    setRating8(0);
  };

  return (
    <>
      <h4>How are you feeling today?</h4>
      <Rating onChange={value => setRating1(value)} initialRating={rating1} />
      <h4>Did you sleep well and enough?</h4>
      <Rating onChange={value => setRating2(value)} initialRating={rating2} />
      <h4>How healthy have you been eating?</h4>
      <Rating onChange={value => setRating3(value)} initialRating={rating3} />
      <h4>Did you drink enough water?</h4>
      <Rating onChange={value => setRating4(value)} initialRating={rating4} />
      <h4>Have you had enough exercise?</h4>
      <Rating onChange={value => setRating5(value)} initialRating={rating5} />
      <h4>Have you maintained your social contacts?</h4>
      <Rating onChange={value => setRating6(value)} initialRating={rating6} />
      <h4>Did you do something nice for yourself?</h4>
      <Rating onChange={value => setRating7(value)} initialRating={rating7} />
      <h4>How balanced do you feel?</h4>
      <Rating onChange={value => setRating8(value)} initialRating={rating8} />

      <StyledButton
        onClick={event => {
          event.preventDefault();
          onSubmit();
        }}
      >
        Submit
      </StyledButton>
    </>
  );
}
