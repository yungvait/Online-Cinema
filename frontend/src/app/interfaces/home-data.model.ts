export interface HomeData {
    hero:{
        title: string;
        image: string;
    };
    movies: {
        id:number;
        title: string;
        genre: string;
        poster: string;
    }[];
}