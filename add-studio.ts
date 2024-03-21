import { Issue, CreativeTechnologist } from "./types";
import { list } from "./groups";

const fs = require("fs");

function insertStudio(data: string[], insertText: string, lineNumber: number) {
	data.splice(lineNumber, 0, insertText);
	const text = data.join("\n");
	fs.writeFile("groups.ts", text, (err: Error) => {
		if (err) {
			console.log(err);
		}
	});
}

export function parseIssue(input: String): Issue {
	const issue = {} as Issue;
	// split issue into sections and skip the first item which is just '###'
	const sections = input.split("###").slice(1);
	for (let i = 0; i < sections.length; i += 1) {
		const section = sections[i];
		const els = section.split("\n");
		const entry = els.slice(1).join("").trim();
		switch (i) {
			case 0:
				issue.type = entry;
				break;
			case 1:
				issue.name = entry;
				break;
			case 2:
				issue.keywords = entry;
				break;
			case 3:
				issue.website = entry;
				break;
			case 4:
				if (!entry.toLowerCase().includes("no response")) {
					issue.careers = entry;
				}
				break;
			case 5: {
				const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;
				const found = entry.match(regex);
				if (found) {
					for (let j = 0; j < found.length; j += 1) {
						found[j] = found[j].replace(/"/g, "");
					}
					issue.locations = found;
				} else {
					issue.locations = [];
				}
				break;
			}
			default:
				break;
		}
	}
	return issue;
}

export function addStudio(issue: Issue) {
	const tech: CreativeTechnologist = {
		keywords: issue.keywords,
		link: issue.website,
		locations: issue.locations,
	};
	if (issue.careers) {
		tech.careerLink = issue.careers;
	}

	for (let section = 0; section < list.length; section += 1) {
		if (issue.type === list[section].title) {
			const data = fs.readFileSync("groups.ts").toString().split("\n");
			const studioString = `"${issue.name}": ${JSON.stringify(tech)},`;
			const studios = Object.keys(list[section].rows);
			// try to insert studio
			for (let i = 0; i < studios.length; i += 1) {
				const otherStudio = studios[i];
				// if this studio needs to be inserted before another studio
				if (issue.name.toLowerCase() < otherStudio.toLowerCase()) {
					console.log(`${issue.name} should go before ${otherStudio}`);
					for (let j = 0; j < data.length; j += 1) {
						if (data[j].includes(`"${otherStudio}"`)) {
							console.log(`Adding in at at line ${j}`);
							insertStudio(data, studioString, j);
							return;
						}
					}
				}
			}
			// otherwise append
			const lastStudio = studios[studios.length - 1];
			for (let i = 0; i < data.length; i += 1) {
				if (data[i].includes(`"${lastStudio}"`)) {
					console.log(`This item will be last at line ${i}`);
					insertStudio(data, studioString, i);
					return;
				}
			}
		}
	}
}

// const issue: Issue = {
// 	careers: "https://brig.ht/contact",
// 	keywords: "data visualization, digital installations, experiential sites, video games",
// 	locations: "Paris",
// 	name: "Bright",
// 	type: "Creative Technology",
// 	website: "https://brig.ht/",
// };

process.argv.shift(); // skip node.exe
process.argv.shift(); // skip name of js file

const input = process.argv.join(" ");
// console.log("Input is:");
// console.log(input);
const issue = parseIssue(input);
console.log(`Add from issue:`);
console.log(issue);
addStudio(issue);
