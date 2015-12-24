export declare module QC {

    export interface Publisher {
        name: string;
        id: number;
    }

    export interface Owner {
        name: string;
        id: number;
    }

    export interface Templates {
        SWF: string;
        MEDIA_AND_METADATA: string;
        LARGE_MEDIA_AND_SLIDES: string;
        MEDIA_ONLY: string;
        MEDIA_AND_SLIDES: string;
        MEDIA_AND_TOC: string;
    }

    export interface Type {
        title: string;
        id: number;
    }

    export interface Live {
        start: string;
        end: string;
        state: string;
    }

    export interface Thumbnail {
        width: number;
        height: number;
        url: string;
    }

    export interface Metadata {
        value: any;
        id: number;
        type: string;
        title: string;
    }

    export interface Image {
        url: string;
        width: number;
        height: number;
    }

    export interface Chapter {
        id: number;
        title: string;
        time: number;
        hidden: boolean;
        image: Image;
    }

    export interface PlayerAction {
        id: number;
        code: string;
        actionData: string;
        triggerData: number;
        trigger: string;
    }

    export interface Document {
        id: number;
        title: string;
        url: string;
        filename: string;
        size: number;
    }

    export interface Link {
        id: number;
        url: string;
        title: string;
    }

    export interface Swf {
        width: number;
        height: number;
        url: string;
    }

    export interface Variant {
        url: string;
        formatCode: string;
        width?: number;
        height?: number;
    }

    export interface Media {
        variants: Variant[];
        url: string;
    }

    export interface CaptionTrack {
        id: number;
        title: string;
        languageCode: string;
    }

    export interface Kulu {
        guid: string;
        alias: string;
        title: string;
        passwordProtected: boolean;
        requiresRegistration: boolean;
        podcastable: boolean;
        createdInApp: boolean;
        allowFeedback: boolean;
        transcribe: boolean;
        forceHttps: boolean;
        audioOnly: boolean;
        requiresAccessToken: boolean;
        publisher: Publisher;
        owner: Owner;
        duration: number;
        defaultTemplate: string;
        templates: Templates;
        created: string;
        modified: string;
        published: string;
        publishOn: string;
        withdrawOn: string;
        deleteOn: string;
        external: boolean;
        public: boolean;
        downloadable: boolean;
        appOfflineViewing: boolean;
        type: Type;
        state: string;
        vod: boolean;
        live: Live;
        thumbnail: Thumbnail;
        metadata: Metadata[];
        chapters: Chapter[];
        playerActions: PlayerAction[];
        documents: Document[];
        links: Link[];
        swf: Swf;
        mediaDisplayWidth: number;
        mediaDisplayHeight: number;
        player: string;
        media: Media;
        description: string;
        tags: string[];
        captionTracks: CaptionTrack[];
        defaultCaptionTrackId: number;
    }

    export interface KuluResult {
        kulu: Kulu;
    }
    
    export interface KulusResult{
        kulus: Array<Kulu>;
        total: number;
    }

}

