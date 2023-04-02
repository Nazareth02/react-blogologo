import { TabOptions } from "types";

export enum Tab {
  ARTICLE = "articles",
  NEWS = "blogs",
  ARTICLE_LABEL = "Articles",
  NEWS_LABEL = "News",
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
