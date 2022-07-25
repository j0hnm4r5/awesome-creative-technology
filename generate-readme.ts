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

				return [linkedName, locationsString, keywords, upImage];
			});

		let md = "";
		md += `## ${title}\n\n`;
		if (description) md += `${description}\n\n`;
		md += `| Name | Locations | Keywords | up? |\n`;
		md += `| ---- | --------- | -------- | --- |\n`;
		md += sortedRows.map((row) => `| ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} |`).join("\n");

		return md;
	});

	// create the markdown
	const md = mustache.render(template, { toc: contentsList, groups: groupsLists });

	// 	const md = `
	// <div align="center">
	// 	<div>
	// 		<a href="https://github.com/j0hnm4r5/awesome-creative-technology">
	// 			<img width="500" src="./logo.gif" alt="Awesome Creative Technology Groups">
	// 		</a>
	// 	</div>
	// 	<br>
	// 	<p>
	// 		Curated list of Creative Technology groups, companies, studios, collectives, etc.
	// 	</p>
	// 	<br>
	// 	<a href="https://awesome.re">
	// 		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	// 	</a>
	// 	<hr>
	// </div>

	// # Awesome Creative Technology

	// > Businesses & groups that specialize in combining computing, design, art, and user experience.

	// Creative technology is a broadly interdisciplinary and transdisciplinary field combining computing, design, art, and user experience.

	// This list hopes to compile the best creative technology businesses & groups across the world, both as a source of inspiration and as a reference point for potential employers of creative technologists.

	// Creative technologists by definition have a breadth of skills as opposed to a specific specialty, so it's difficult to categorize them. While this isn't a perfect organization, each group below generally specializes in the area to which they've been assigned.

	// ## Table of Contents

	// ${contentsList}

	// ---

	// ${groupsLists}

	// ## Closed

	// Groups that have closed their doors are still useful for reference and inspiration. Check out the list of them [here](closed.md).
	// `;

	fs.writeFileSync("readme.md", md);
	// console.log(md);
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
