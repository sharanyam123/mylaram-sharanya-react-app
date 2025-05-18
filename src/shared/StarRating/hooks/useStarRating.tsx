import { StarRatingType } from '../definitions/types';

export default function useStarRating(props: StarRatingType) {
  const { stars } = props;
  const rating = Math.floor(stars);
  const totalStars = Array.from({ length: 5 });
  return { rating, totalStars };
}
