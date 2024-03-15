import { Issue, CreativeTechnologist } from "./types";
import { list } from "./groups";

const fs = require("fs");

function insertStudio(data: string[], insertText: string, lineNumber: number) {
	data.splice(lineNumber, 0, insertText);
	const text = data.join("\n");
	fs.writeFile("groups.ts", text, function (err: Error) {
		if (err) {
			console.log(err);
		}
	});
}

export function addStudio(issue: Issue) {
	// console.log(list);
	const tech: CreativeTechnologist = {
		keywords: issue.keywords,
		link: issue.website,
		locations: issue.locations.split(","),
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
						if (data[i].includes(`"${otherStudio}"`)) {
							console.log(`We need to add our text in at line ${j}`);
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
					console.log(`This studio will be last at line ${i}`);
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

// const last: Issue = {
// 	keywords: "data visualization, digital installations, experiential sites, video games",
// 	locations: "Atlanta",
// 	name: "zzz",
// 	type: "Creative Technology",
// 	website: "https://zzz.com",
// };

// addStudio(last);
