import { TabOptions } from "types";

export enum Tab {
  ARTICLE = "articles",
  NEWS = "blogs",
  ARTICLE_LABEL = "Articles",
  NEWS_LABEL = "News",
  BLOGS_LIMIT = 12,
  SEARCH_LIMIT = 6,
}

export const tabs: TabOptions[] = [
  {
    id: 0,
    label: Tab.ARTICLE_LABEL,
    value: Tab.ARTICLE,
  },
  {
    id: 1,
    label: Tab.NEWS_LABEL,
    value: Tab.NEWS,
  },
];
