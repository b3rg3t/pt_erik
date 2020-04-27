export interface typescriptobj {
    id: string;
    picposition: boolean;
    title: string;
    button?: boolean,
    buttontext?: string,
    roundedimage?: boolean,
    routepage?: [string];
    imageafter: boolean,
    tags?: { data?: [string] },
    toptext: string;
    secondtext?: string;
    linkpage?: {
        id?: string;
        title?: string;
    }
    bottomtext?: string;
    smallImagePosition: boolean;
    opacity: number;
    overlaycolor: { hex: string };
    textcolor: { hex: string };
    backgroundimage?: {
        alt?: string;
        url: string;
        width: string;
        height: string;
    };
    smallimage: {
        alt?: string;
        url: string;
        width: string;
        height: string;
    };
}