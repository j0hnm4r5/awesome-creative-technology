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
