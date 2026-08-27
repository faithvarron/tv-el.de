export interface Category {
	name: string;
	slug: string;
}

export const CATEGORIES: Category[] = [
	{ name: 'Musik lernen', slug: 'musik-lernen' },
	{ name: 'Musikinstrumente', slug: 'musikinstrumente' },
	{ name: 'Musik und Gesellschaft', slug: 'musik-und-gesellschaft' },
	{ name: 'Musiker und Bands', slug: 'musiker-und-bands' },
	{ name: 'Musikgenres', slug: 'musikgenres' },
	{ name: 'Musikgeschichte', slug: 'musikgeschichte' },
	{ name: 'Musikindustrie', slug: 'musikindustrie' },
	{ name: 'Musikproduktion', slug: 'musikproduktion' },
	{ name: 'Musiktechnologie', slug: 'musiktechnologie' },
	{ name: 'Musiktheorie', slug: 'musiktheorie' },
];
