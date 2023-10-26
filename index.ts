import { generateClosedReadme, generateReadme, generateUpReadme } from "./generate-readme";

import { list } from "./groups";

generateReadme(list);
generateClosedReadme(list);
generateUpReadme(list);
