import { SvgIcon } from '@mui/material';
import { StarRatingType } from './definitions/types';
import { StarFilledIcon } from '../../icons';
import useStarRating from './hooks/useStarRating';

export default function StarRating(props: StarRatingType) {
  const { rating, totalStars } = useStarRating(props);

  return (
    <div>
      {totalStars?.map((_, index) => (
        <SvgIcon
          component={StarFilledIcon}
          sx={{ color: index < rating ? '#ffa534' : 'lightgrey' }}
          inheritViewBox
          key={index}
        />
      ))}
    </div>
  );
}
