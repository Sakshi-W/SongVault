export interface RootObject {
 countries: Country[];
 global:    Global;
}

export interface Country {
 cities:           City[];
 genres:           Genre[];
 id:               string;
 listid:           string;
 momentum_listid?: string;
 name:             string;
}

export interface City {
 countryid: string;
 id:        string;
 listid:    string;
 name:      string;
}

export interface Genre {
 count:      number;
 countryid?: string;
 id:         string;
 listid:     string;
 name:       string;
 urlPath:    string;
}

export interface Global {
 genres: Genre[];
}
