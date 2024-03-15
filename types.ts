export type CreativeTechnologist = {
	link: string;
	locations: string[];
	keywords: string;
	careerLink?: string;
	closureReason?: string;
};

export type List = {
	title: string;
	description?: string;
	rows: Record<string, CreativeTechnologist>;
}[];

export type Issue = {
	type: string;
	name: string;
	keywords: string;
	website: string;
	careers?: string;
	locations: string;
};
