import { Article } from '../../../redux/types';

export type AttachmentType = Pick<Article, 'attachments'>;
export type KeywordType = Pick<Article, 'keywords'>;
