import { Tab } from "config";

interface SelectOptions {
  value: string;
  label: string;
}

interface TabOptions {
  id: number;
  value: Tab;
  label: Tab;
}

export type { SelectOptions, TabOptions };
