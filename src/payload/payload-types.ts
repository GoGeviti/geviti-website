export interface Category {
	id: number;
	title: string;
	description: string;
	updatedAt: string;
	createdAt: string;
}
export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	category: Category;
	benefits: Benefit[];
	bloodTest?: boolean;
	fdaApproved?: boolean;
	shopify_variant_id?: string;
	images: {
		image: Media;
		id?: string;
	}[];
	faq: {
		title?: string;
		description?: string;
		id?: string;
	}[];
	laedTime: {
		title?: string;
		description?: string;
	},
	price_membership: {
		id?: string;
		title?: string;
	}[];
	updatedAt: string;
	createdAt: string;
}
export interface Benefit {
	id: number;
	title: string;
	description: string;
	updatedAt: string;
	createdAt: string;
}
export interface Media {
	id: number;
	alt?: string;
	updatedAt: string;
	createdAt: string;
	url?: string;
	filename?: string;
	mimeType?: string;
	filesize?: number;
	width?: number;
	height?: number;
	caption?: {
    [k: string]: unknown;
  }[];
	sizes?: {
		thumbnail?: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		card?: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		tablet?: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
	};
}
export interface User {
	id: number;
	updatedAt: string;
	createdAt: string;
	email: string;
	resetPasswordToken?: string;
	resetPasswordExpiration?: string;
	salt?: string;
	hash?: string;
	loginAttempts?: number;
	lockUntil?: string;
	password: string;
}
export type PaginatedDocs<T> = {
	docs: T[];
	hasNextPage: boolean;
	hasPrevPage: boolean;
	limit: number;
	nextPage?: null | number | undefined;
	page?: number;
	pagingCounter: number;
	prevPage?: null | number | undefined;
	totalDocs: number;
	totalPages: number;
};

export interface Post {
  id: number;
  title: string;
  categories?: (number | PostCategory)[] | null;
  publishedOn?: string | null;
  authors: (number | User)[];
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  hero: {
    categories?: PostCategory;
    media: Media;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: string | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id: string;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        description: string;
        author: string;
        id: string;
        blockName?: string | null;
        blockType: 'quote';
      }
  )[];
  relatedPosts?: Post[];
  slug?: string | null;
  meta?: {
    title?: string;
    description?: string;
    image?: number | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
export interface PostCategory {
  id: number;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}

export interface ContactSubject {
  id: number;
  title: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Contact {
  id: number;
  full_name: string;
  email: string;
  isPartner?: boolean | null;
  phone_number?: number | null;
  company?: string | null;
  role?: string | null;
  subject?: ContactSubject;
  message: string;
  updatedAt: string;
  createdAt: string;
}
export interface FaqCategory {
  id: number;
  title: string;
  description?: string | null;
  order?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Faq {
  id: number;
  title: string;
  description: string;
  category: FaqCategory;
  updatedAt: string;
  createdAt: string;
}

export interface Privacy {
  id: number;
  content:{
        [k: string]: unknown;
      }[];
  updatedAt: string;
  createdAt: string;
}