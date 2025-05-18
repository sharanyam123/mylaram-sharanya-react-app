import { Lists } from '../../shared';
import SubSectionHOC from '../../shared/SubSectionHOC';
import PriceBreak from './components/PriceBreak';
import usePricing from './hooks/usePricing';
import './styles/index.scss';

function PricingComp() {
  const { list, priceBreakData } = usePricing();
  return (
    <>
      <Lists list={list} />
      <PriceBreak priceBreaks={priceBreakData} />
    </>
  );
}

const Pricing = SubSectionHOC(PricingComp);
export default Pricing;
