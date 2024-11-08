// 1. Виведення зірочок за допомогою циклу
function Task1() {
    const startLength = 9;
    const maxSteps = 5;

    for (let i = 1; i <= maxSteps; i++) {
        console.log('*'.repeat(startLength + i * 2));
    }
    for (let i = maxSteps; i >= 1; i--) {
        console.log('*'.repeat(startLength + i * 2));
    }
}
Task1();

// 2. Таймер на 10 секунд за допомогою циклу while (від 10 до 1)
function Task2() {
    const totalTime = 10; // Загальний час в секундах

    for (let remainingTime = totalTime; remainingTime > 0; remainingTime--) {
        console.log(`Залишилося часу: ${remainingTime} секунд`);
        
        // Затримка на 1 секунду перед наступним відліком
        const now = Date.now();
        while (Date.now() - now < 1000) {}
    }
    
    console.log("Таймер завершився");
}
Task2();


// 3. Створення об'єкта car з властивістю speedometer = 0
const car = {
    speedometer: 0
};

// Виведемо значення speedometer
console.log(`Швидкість: ${car.speedometer} `); // Виведе "Поточна швидкість: 0 км/год"

// 4. Додавання методів setSpeedometer, getSpeedometer, clearSpeedometer
Object.defineProperty(car, "setSpeed", {
    value: function (value) {
        this.speedometer = value;
        return this;
    }
});

Object.defineProperty(car, "getSpeed", {
    value: function () {
        console.log(this.speedometer);
        return this;
    }
});

Object.defineProperty(car, "clearSpeed", {
    value: function () {
        this.speedometer = 0;
        return this;
    }
});

// 5 Приклад ланцюжкового виклику
car.setSpeed(200).setSpeed(300).getSpeed().clearSpeed();


// 6. Класс для транспортного средства
class Vehicle {
    constructor(brand, speed, loadCapacity, currentLoad) {
        this.brand = brand;
        this.speed = speed; // в км/ч
        this.loadCapacity = loadCapacity; // максимальная грузоподъемность в кг
        this.currentLoad = currentLoad; // текущий груз в кг
    }

    checkOverload() {
        if (this.currentLoad > this.loadCapacity) {
            return `Перевантаження! максимальна вантажопідйомність: ${this.loadCapacity} кг.`;
        } else {
            return `Завантажено ${this.currentLoad} кг.`;
        }
    }

    showSpeed() {
        return `${this.brand} їде зі швидкістю ${this.speed} км/год.`;
    }
}

// Класс для фрукта
class Fruit {
    constructor(color, taste, type) {
        this.color = color;
        this.taste = taste;
        this.type = type;
    }

    describe() {
        return `Це ${this.color} ${this.type}, яке на смак ${this.taste}.`;
    }
}

// Создание объектов для Toyota и Volvo
const toyota = new Vehicle("Toyota", 120, 5000, 3000);
const volvo = new Vehicle("Volvo", 80, 5000, 3000);

// Вывод информации о транспортных средствах
console.log(toyota.showSpeed()); // Ожидаемый вывод: "Toyota їде зі швидкістю 120 км/год."
console.log(volvo.showSpeed());  // Ожидаемый вывод: "Volvo їде зі швидкістю 80 км/год."
console.log(toyota.checkOverload()); // Ожидаемый вывод: "Завантажено 3000 кг."

// Создание объекта для яблока и вывод информации о нем
const apple = new Fruit("червоне", "солодке", "яблуко");
console.log(apple.describe()); // Ожидаемый вывод: "Це червоне яблуко, яке на смак солодке."

// 7. Базовий клас Animal
class Animal {
    constructor(name, species) {
        this.name = name; // Ім'я тварини
        this.species = species; // Вид тварини
    }

    speak() {
        return `${this.name} видає звук.`;
    }

    info() {
        return `${this.name} є ${this.species}.`;
    }
}

// Клас Dog, що наслідує від Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Собака"); // Виклик конструктора батьківського класу
        this.breed = breed; // Порода собаки
    }

    speak() {
        return `${this.name} гавкає!`;
    }

    info() {
        return `${this.name} є ${this.breed} собака.`;
    }
}

// Клас Cat, що наслідує від Animal
class Cat extends Animal {
    constructor(name, color) {
        super(name, "Кіт"); // Виклик конструктора батьківського класу
        this.color = color; // Колір кота
    }

    speak() {
        return `${this.name} мяукає!`;
    }

    info() {
        return `${this.name} є ${this.color} кіт.`;
    }
}

// Використання класів
const dog = new Dog("Шарик", "Золотистий ретрівер");
const cat = new Cat("Мурка", "чорний");

// Вивід інформації та звуків
console.log(dog.info()); // Виведе: "Шарик є Золотистий ретрівер собака."
console.log(dog.speak()); // Виведе: "Шарик гавкає!"

console.log(cat.info()); // Виведе: "Мурка є чорний кіт."
console.log(cat.speak()); // Виведе: "Мурка мяукає!"


// 8. Оголошення об'єкта
const myObject = { name: "Petro", age: 20 };

// Виклик toString() на об'єкті
console.log(myObject.toString()); // Виведе: "[object Object]"

// Пояснення значення "[object Object]"
const explanation = ``;

console.log(explanation);

// 9. Чому [].toString() не виводить "[object Array]"
const arrayToStringExplanation = `"[object Array]"
`;
console.log(arrayToStringExplanation);


// 10. Реалізувати вивід "[object Array]" для масиву
Array.prototype.toString = function() {
    return "[object Array]";
};

console.log([].toString()); // Виведе: [object Array]






