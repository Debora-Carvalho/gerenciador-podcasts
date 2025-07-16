import {IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-server";
import { ContentType } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();
    
    res.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    res.write(JSON.stringify(content.body));
    
    res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);
    res.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    res.write(JSON.stringify(content.body));

    res.end();
};