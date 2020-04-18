export interface IArticle {
    article_no: number;
    article_title: string;
    article_msg: string;
    article_img: string;
    article_is_public: number;
    article_admin_id: number;
    article_dateTime: Date;
}

export interface IUserLocation {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: any;
    latitude: number;
    longitude: number;
    speed: number;
}
