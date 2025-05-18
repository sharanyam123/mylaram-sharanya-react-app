import { useSelector } from 'react-redux';
import { selectDetails } from './selector';

export default function useDetails() {
  const { attachments, features, keywords } = useSelector(selectDetails);

  return {
    attachments,
    features,
    keywords,
  };
}
