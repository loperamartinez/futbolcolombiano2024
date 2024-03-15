
export interface TeamsResponse {
    get:        string;
    parameters: Parameters;
    errors:     any[];
    results:    number;
    paging:     Paging;
    response:   {
        team: Team;
        venue: Venue;
    }[];
}

export interface Team {
    id:       number;
    name:     string;
    code:     string;
    country:  string;
    founded:  number;
    national: boolean;
    logo:     string;
}

export interface Paging {
    current: number;
    total:   number;
}

export interface Parameters {
    league: string;
    season: string;
}

export interface Response {
    team:  Team[];
    venue: Venue;
}

export interface Venue {
    id:       number;
    name:     string;
    address:  string;
    city:     string;
    capacity: number;
    surface:  Surface;
    image:    string;
}

export enum Surface {
    Grass = "grass",
}
