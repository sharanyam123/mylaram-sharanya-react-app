import { Article } from '../../../redux/types';

export type DescriptionType = Pick<
  Article,
  'title' | 'supplier_name' | 'supplier_link'
>;

export type PriceDetailsType = Pick<
  Article,
  'price' | 'currency' | 'transport_costs' | 'vat_percent'
>;

export type ImageSectionType = Pick<Article, 'images'>;
