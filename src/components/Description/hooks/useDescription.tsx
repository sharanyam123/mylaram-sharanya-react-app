import { useSelector } from 'react-redux';
import { selectDescriptionItems } from './selector';

export default function useDescription() {
  const { description_long, description_short } = useSelector(
    selectDescriptionItems
  );

  return {
    description_long,
    description_short,
  };
}
