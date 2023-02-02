import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface Category {
	name: string;
	value: string;
	sub: Sub[];
}

export type Sub = Omit<Category, 'sub'> & {};
