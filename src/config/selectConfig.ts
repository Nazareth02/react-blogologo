import { SelectOptions } from "types";

enum Options {
  DateLatest = "publishedAt:DESC",
  DateEarliset = "publishedAt",
  NewsSite = "newsSite",
}

const options: SelectOptions[] = [
  { label: "Date (Latest)", value: Options.DateLatest },
  { label: "Date (Earliest)", value: Options.DateEarliset },
  { label: "News (Sites)", value: Options.NewsSite },
];

export { options };
