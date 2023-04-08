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
  id: string;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: LaunchesProps[];
  events: any[];
}
interface LaunchesProps {
  event_id: string;
  provider: string;
}

export type { SelectOptions, TabOptions, BlogItem };
