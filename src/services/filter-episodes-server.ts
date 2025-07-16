import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterEpisodes = async (podcastName: string | undefined) => {
    //http://localhost:3333/api/episode?p=nomepodcast

    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);
    return data;
}