import useDetails from './hooks/useDetails';
import Attachments from './components/Attachments';
import Keywords from './components/Keywords';
import Lists from '../../shared/Lists';
import SubSectionHOC from '../../shared/SubSectionHOC';

function DetailsComp() {
  const { features, attachments, keywords } = useDetails();
  return (
    <>
      <Lists title="Features" list={features} />
      <Attachments attachments={attachments} />
      <Keywords keywords={keywords} />
    </>
  );
}

const Details = SubSectionHOC(DetailsComp);
export default Details;
