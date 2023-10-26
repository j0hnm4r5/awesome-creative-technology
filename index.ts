import {
  generateClosedReadme,
  generateReadme,
  generateUpReadme,
} from "./generate-readme";

import { list } from "./groups.ts";

generateReadme(list);
generateClosedReadme(list);
generateUpReadme(list);
