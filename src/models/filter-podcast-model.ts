import { Podcast } from "./podcasts-model";

export interface FilterPodcastModel {
    statusCode: number,
    body: Podcast[];
};