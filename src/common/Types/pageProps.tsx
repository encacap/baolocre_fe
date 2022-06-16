import { CategoryType, HTMLHeadType } from "./commonTypes";

export interface HomePageProps {
    head: HTMLHeadType;
}

export interface EstateListPageProps {
    head: HTMLHeadType;
    categories: CategoryType[];
}

export interface EstateDetailPageProps {
    head: HTMLHeadType;
    categories: CategoryType[];
}