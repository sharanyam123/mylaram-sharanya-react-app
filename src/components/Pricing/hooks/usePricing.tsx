import { useSelector } from 'react-redux';
import { formatPrice } from '../../../helpers';
import { selectPricingItems } from './selector';

export default function usePricing() {
  const {
    delivery_time,
    minimum_order_quantity,
    price_breaks,
    currency,
    transport_costs,
    unit,
  } = useSelector(selectPricingItems);

  const list: Record<string, string> = {
    'Minimum order': minimum_order_quantity + ` ${unit}`,
    Shipping: formatPrice(transport_costs, currency),
    Delivery: delivery_time + ' days',
  };

  const priceBreakData: Record<string, string> = {};
  price_breaks &&
    Object.entries(price_breaks)?.map(([key, value]) => {
      const formattedKey = `ex ${key} ${unit}`;
      const formattedValue = `${formatPrice(value, currency)}/${unit}`;
      priceBreakData[formattedKey] = formattedValue;
    });

  return {
    list,
    priceBreakData,
  };
}
