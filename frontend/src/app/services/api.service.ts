import { Injectable } from '@angular/core'; // Injectable: Нужен, чтобы Angular понимал, что это сервис.
import { Observable, of, delay } from 'rxjs'; // Observable, of, delay: Инструменты из библиотеки RxJS для работы с асинхронными операциями.
import { HomeData } from './../interfaces/home-data.model'; // HomeData: Интерфейс, который описывает структуру данных.
import { MOCK_HOME_DATA } from './../mocks/home-data.mock'; // MOCK_HOME_DATA: Фейковые данные, которые мы создали ранее.


// @Injectable: Декоратор, который делает класс "сервисом".
@Injectable({ providedIn: 'root' }) // providedIn: 'root': Сервис будет доступен во всём приложении (как глобальный объект).
      
export class ApiService {
    getHomeData(): Observable<HomeData> { // Observable<HomeData>: Observable — Это обещание, что письмо будет доставлено (но не сразу), структура соответствует HomeData.
        return of(MOCK_HOME_DATA).pipe(delay(5000)); // of(MOCK_HOME_DATA): Создаёт поток, который сразу отдаёт наши фейковые данные.
    } // .pipe(...): Позволяет модифицировать поток (например, добавить задержку).
}
//of — это функция, которая создаёт поток из переданных данных. Например:

//of(1, 2, 3) создаст поток чисел 1, 2, 3.

//of(MOCK_HOME_DATA) создаёт поток с одним объектом данных.