export interface UserContact {
    id:              number;
    name:            string;
    url:             string;
    description:     string;
    link:            string;
    slug:            string;
    avatar_urls:     { [key: string]: string };
    meta:            any[];
    yoast_head:      null | string;
    yoast_head_json: YoastHeadJSON | null;
    _links:          Links;
}

export interface Links {
    self:       Collection[];
    collection: Collection[];
}

export interface Collection {
    href: string;
}

export interface YoastHeadJSON {
    title:        string;
    robots:       Robots;
    canonical:    string;
    og_locale:    string;
    og_type:      string;
    og_title:     string;
    og_url:       string;
    og_site_name: string;
    og_image:     OgImage[];
    twitter_card: string;
    schema:       Schema;
}

export interface OgImage {
    url: string;
}

export interface Robots {
    index:               string;
    follow:              string;
    "max-snippet":       string;
    "max-image-preview": string;
    "max-video-preview": string;
}

export interface Schema {
    "@context": string;
    "@graph":   Graph[];
}

export interface Graph {
    "@type":           string;
    "@id":             string;
    url?:              string;
    name?:             string;
    isPartOf?:         Breadcrumb;
    breadcrumb?:       Breadcrumb;
    inLanguage?:       string;
    potentialAction?:  PotentialAction[];
    itemListElement?:  ItemListElement[];
    description?:      string;
    publisher?:        Breadcrumb;
    logo?:             Image;
    image?:            Image;
    sameAs?:           string[];
    mainEntityOfPage?: Breadcrumb;
}

export interface Breadcrumb {
    "@id": string;
}

export interface Image {
    "@id":       string;
    "@type"?:    string;
    inLanguage?: string;
    url?:        string;
    contentUrl?: string;
    caption?:    string;
    width?:      number;
    height?:     number;
}

export interface ItemListElement {
    "@type":  string;
    position: number;
    name:     string;
    item?:    string;
}

export interface PotentialAction {
    "@type":        string;
    target:         string[] | TargetClass;
    "query-input"?: string;
}

export interface TargetClass {
    "@type":     string;
    urlTemplate: string;
}
