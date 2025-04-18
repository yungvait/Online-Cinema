import {HomeData} from '../interfaces/home-data.model';

export const MOCK_HOME_DATA: HomeData = {
    hero: {
        title: 'Лучший фильм',
        image: '../../assets/images/tnt.jpg'
    },
    movies: [
        {
            id: 1,
            title: 'Лучший фильм 2',
            genre: 'Боевик',
            poster: '../../assets/images/tnt.jpg'
        },
        {
            id: 2,
            title: 'Большой куш',
            genre: 'Боевик',
            poster: '../../assets/images/kush_poster.jpg'
        }
    ]
};
