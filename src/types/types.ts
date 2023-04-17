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

interface BlogItem {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: LaunchesProps[];
  events: any[];
}
interface LaunchesProps {
  event_id: string;
  provider: string;
}

export type { SelectOptions, TabOptions, BlogItem };
