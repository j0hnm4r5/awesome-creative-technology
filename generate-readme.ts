import mustache from "mustache";
import GithubSlugger from "github-slugger";
import fs from "fs";

import { List } from "./types";

const slugger = new GithubSlugger();

export function generateReadme(list: List) {
	// import the readme stub
	const template = fs.readFileSync("./readme.template.md", "utf-8");

	// generate the table of contents
	const contentsList = list
		.map((l) => {
			const { title } = l;
			const slug = slugger.slug(title);

			return `1. [**${title}**](#${slug})`;
		})
		.concat("1. [**Closed Groups**](#closed-groups)")
		.join("\n");

	// generate each list
	const groupsLists = list.map((l) => {
		const { title, description, rows } = l;

		const sortedRows = Object.keys(rows)
			.filter((group) => rows[group].closureReason === undefined) // remove closed groups
			.sort(Intl.Collator().compare) // sort alphabetically, case insensitive
			.map((group) => {
				const { link, locations, keywords } = rows[group];

				const linkedName = `[**${group}**](${link})`;

				const locationsString = locations.map((loc) => `[${loc}]`).join(" ");

				const upImage = `![](https://img.shields.io/website?down_color=%2300000000&down_message=%E2%9D%8C&label=%20&style=flat-square&up_color=%2300000000&up_message=%F0%9F%8C%90&url=${encodeURIComponent(
					link
				)})`;

				return [linkedName, locationsString, keywords, upImage];
			});

		let md = "";
		md += `## ${title}\n\n`;
		if (description) md += `${description}\n\n`;
		md += `| Name | Locations | Keywords | up? |\n`;
		md += `| ---- | --------- | -------- | --- |\n`;
		md += sortedRows.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} |`).join("\n");
		md += "\n\n";

		return md;
	});

	// create the markdown
	const md = mustache.render(template, { toc: contentsList, groups: groupsLists.join("\n") });

	fs.writeFileSync("readme.md", md);
}

export function generateClosedReadme(list: List) {
	// import the readme stub
	const template = fs.readFileSync("./closed.template.md", "utf-8");

	// create markdown string
	let groupsLists = "";
	groupsLists += `| Name | Locations | Keywords | Closure Reason | up? |\n`;
	groupsLists += `| ---- | --------- | -------- | -------------- | --- |\n`;

	list.map((l) => {
		const { rows } = l;

		const sortedRows = Object.keys(rows)
			.filter((group) => rows[group].closureReason !== undefined) // remove non-closed groups
			.sort(Intl.Collator().compare) // sort alphabetically, case insensitive
			.map((group) => {
				const { link, locations, keywords, closureReason } = rows[group];

				const linkedName = `[**${group}**](${link})`;

				const locationsString = locations
					.map(
						(loc) =>
							`![${loc}](https://img.shields.io/badge/-${encodeURIComponent(
								loc
							)}-lightgrey?style=flat)`
					)
					.join(" ");

				const upImage = `![](https://img.shields.io/website?down_color=%2300000000&down_message=%E2%9D%8C&label=%20&style=flat-square&up_color=%2300000000&up_message=%F0%9F%8C%90&url=${encodeURIComponent(
					link
				)})`;

				return [linkedName, locationsString, keywords, closureReason, upImage];
			});

		groupsLists += sortedRows
			.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} | ${row[4]} |`)
			.join("\n");

		return null;
	});

	// create the markdown
	const md = mustache.render(template, { groups: groupsLists });

	fs.writeFileSync("closed.md", md);
}
