import Rating from 'react-rating';

export default function RatingEntry({ratings}) {
  return (
    <div>
      <h4>How do you feel today?</h4>
      <Rating initialRating={ratings.rating1} readonly />
      <h4>Did you sleep well and enough?</h4>
      <Rating initialRating={ratings.rating2} readonly />
      <h4>Did you eat healthy?</h4>
      <Rating initialRating={ratings.rating3} readonly />
      <h4>Did you drink enough water?</h4>
      <Rating initialRating={ratings.rating4} readonly />
      <h4>Did you exercise enough?</h4>
      <Rating initialRating={ratings.rating5} readonly />
      <h4>Did you socialize?</h4>
      <Rating initialRating={ratings.rating6} readonly />
      <h4>Did you do something nice for yourself?</h4>
      <Rating initialRating={ratings.rating7} readonly />
      <h4>How balanced do you feel?</h4>
      <Rating initialRating={ratings.rating8} readonly />
    </div>
  );
}
