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

interface AuthFormValues {
  userName: string;
  email: string;
  password: string;
}

interface SingInFormValues {
  email: string;
  password: string;
}

export type { SelectOptions, TabOptions, BlogItem, AuthFormValues, SingInFormValues };
