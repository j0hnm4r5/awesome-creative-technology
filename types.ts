export type CreativeTechnologist = {
	link: string;
	locations: string[];
	keywords: string;
	closureReason?: string;
};

export type List = {
	title: string;
	description?: string;
	rows: Record<string, CreativeTechnologist>;
}[];
