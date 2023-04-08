import { SelectOptions } from "types";

enum Options {
  DateLatest = "published_at:DESC",
  DateEarliset = "published_at",
  TitleFrom_A = "title",
  TitleFrom_Z = "title:DESC",
}

const options: SelectOptions[] = [
  { label: "Date (Latest)", value: Options.DateLatest },
  { label: "Date (Earliest)", value: Options.DateEarliset },
  { label: "Title (A-Z)", value: Options.TitleFrom_A },
  { label: "Title (Z-A)", value: Options.TitleFrom_Z },
];

export { options };
