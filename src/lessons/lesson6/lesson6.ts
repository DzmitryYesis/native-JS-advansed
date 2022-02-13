console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// class Student {
//
//     constructor(name, lastName, numberOfGroup, score) {
//         this.name = name
//         this.lastName = lastName
//         this.numberOfGroup = numberOfGroup
//         this.score = score
//     }
// }
//
// const Dima = new Student('Dima', 'Yesis', 103116, [2,4,4,5,5])
// const Vasia = new Student('vasia', 'Rydia', 103116, [2,2,3,5,2])
// const Kisa = new Student('Dim', 'Rekyz', 103116, [5,5,5,4,4])
//
// const students = [Dima, Vasia, Kisa]
// const bestStudent = students.filter(st=>st.score.filter(sc=>sc>3).length===5)
//
// const sortStudent = students.sort((a,b)=>b.score.reduce((c, d)=>c+d,0)-a.score.reduce((c, d)=>c+d,0))
//
// console.log(sortStudent)
// console.log(bestStudent)



// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class AnyClass {
    name:string
    age:number
    constructor(name = 'Dima', age = 33) {
        this.name = name
        this.age = age
    }
}

console.log(new AnyClass())

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// class Customer {
//     name:string
//     lastName:string
//     adress:string
//     bankNumber:number
//     constructor(name:string, lastName:string, adress:string, bankNumber:number) {
//         this.name = name
//         this.lastName = lastName
//         this.adress = adress
//         this.bankNumber = bankNumber
//     }
//     setName(name:string){
//         this.name = name
//     }
//     setLastName(lastName:string){
//         this.lastName = lastName
//     }
//     setAdress(adress:string){
//         this.adress = adress
//     }
//     setBankNumber(bankNumber:number){
//         this.bankNumber = bankNumber
//     }
//     getInfo(){
//         console.log(this.name, this.lastName, this.adress, this.bankNumber)
//     }
// }
//
// const Dima = new Customer('Dima', 'Yesis', 'Baranovichi', 15)
// console.log(Dima)
// Dima.setAdress('Minsk')
// console.log(Dima)
// const Nastya = new Customer('Nastya', 'Yesis', 'Minsk', 14)
// const Pasha = new Customer('Pasha', 'Yesis', 'Minsk',16)
//
// const spisok = [Dima, Nastya, Pasha]
// const alfavit = spisok.sort((a,b)=>a.name>b.name?1:-1)
// const bank = spisok.filter(c=>c.bankNumber>15&&c.bankNumber<18)
// console.log(alfavit)
// console.log(bank)

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};