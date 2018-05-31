import { Observable, Observer, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Hotel {
    img: string;
    small_img: string[];
    address: string;
    phone: number;   // дополнительно задание pipe для форматирования
    weather: {
        title: string;
        icon: string;
        water: number;
        temperature: number;
    };
    social_info: {
        title: string;
        img: string;
        followers: number;
        following: number;
    };
    type: string;
}

const data: Hotel[] = [
    {
        img: 'assets/images/hotel1/1_big.jpg',
        small_img: ['assets/images/hotel1/1_small.jpg', 'assets/images/hotel1/2_small.jpg'],
        address: 'Adress 1',
        phone: 123456784675,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 20,
            temperature: 10,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel1/2_big.jpg',
            followers: 1896,
            following: 1300,
        },
        type: 'Hotel'
    },
    {
        img: 'assets/images/hotel2/1_big.jpg',
        small_img: ['assets/images/hotel2/1_small.jpg', 'assets/images/hotel2/2_small.jpg'],
        address: 'Adress 1',
        phone: 567893570567,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 30,
            temperature: 50,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel2/2_big.jpg',
            followers: 2230,
            following: 400,
        },
        type: 'Tours'
    },
    {
        img: 'assets/images/hotel3/1_big.jpg',
        small_img: ['assets/images/hotel3/1_small.jpg', 'assets/images/hotel3/2_small.jpg'],
        address: 'Adress 1',
        phone: 6547890345,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 18,
            temperature: 24,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel3/2_big.jpg',
            followers: 4564,
            following: 2363,
        },
        type: 'Hotel'
    },
    {
        img: 'assets/images/hotel4/1_big.jpg',
        small_img: ['assets/images/hotel4/1_small.jpg', 'assets/images/hotel4/2_small.jpg'],
        address: 'Adress 1',
        phone: 1234123456,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 16,
            temperature: 20,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel4/2_big.jpg',
            followers: 4567,
            following: 4243,
        },
        type: 'Fishing'
    },
    {
        img: 'assets/images/hotel5/1_big.jpg',
        small_img: ['assets/images/hotel5/1_small.jpg', 'assets/images/hotel5/2_small.jpg'],
        address: 'Adress 1',
        phone: 9090099900,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 30,
            temperature: 35,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel5/2_big.jpg',
            followers: 5679,
            following: 999  ,
        },
        type: 'Hotel'
    },
    {
        img: 'assets/images/hotel6/1_big.jpg',
        small_img: ['assets/images/hotel6/1_small.jpg', 'assets/images/hotel6/2_small.jpg'],
        address: 'Adress 1',
        phone: 1441546785,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 10,
            temperature: 40,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel6/2_big.jpg',
            followers: 345,
            following: 2345,
        },
        type: 'Tours'
    },
    {
        img: 'assets/images/hotel7/1_big.jpg',
        small_img: ['assets/images/hotel7/1_small.jpg', 'assets/images/hotel7/2_small.jpg'],
        address: 'Adress 1',
        phone: 5674123456,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 15,
            temperature: 20,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel7/2_big.jpg',
            followers: 345,
            following: 2345,
        },
        type: 'Hotel'
    },
    {
        img: 'assets/images/hotel8/1_big.jpg',
        small_img: ['assets/images/hotel8/1_small.jpg', 'assets/images/hotel8/2_small.jpg'],
        address: 'Adress 1',
        phone: 4000000001,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 30,
            temperature: 10,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel8/2_big.jpg',
            followers: 3425,
            following: 6777,
        },
        type: 'Weather'
    },
    {
        img: 'assets/images/hotel9/1_big.jpg',
        small_img: ['assets/images/hotel9/1_small.jpg', 'assets/images/hotel9/2_small.jpg'],
        address: 'Adress 1',
        phone: 2020990898,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 16,
            temperature: 19,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel9/2_big.jpg',
            followers: 6790,
            following: 100,
        },
        type: 'Tour'
    },
    {
        img: 'assets/images/hotel10/1_big.jpg',
        small_img: ['assets/images/hotel10/1_small.jpg', 'assets/images/hotel10/2_small.jpg'],
        address: 'Adress 1',
        phone: 40005600001,
        weather: {
            title: 'Sun',
            icon: '../',
            water: 21,
            temperature: 22,
        },
        social_info: {
            title: 'Title1',
            img: 'assets/images/hotel10/2_big.jpg',
            followers: 876,
            following: 1,
        },
        type: 'Weather'
    }
];

export const hotelList$: Observable<Hotel[]> = of(data);
//   .pipe(
//     delay(3000)
//   );
