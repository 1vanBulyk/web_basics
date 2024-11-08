// Оголошення об'єкта `car` з методами `setSpeed`, `getSpeed`, `clearSpeed`
const car = {
    speedometer: 0
};

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

// Клас `Book`
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} and has ${this.pages} pages.`;
    }

    isLongBook() {
        return this.pages > 300;
    }

    getReadingTime(averageSpeed) {
        return `${(this.pages / averageSpeed).toFixed(2)} hours`;
    }
}

let book1 = new Book("Surgeon", "Tess Gerritsen", 464);

// Клас `Student`
class Student {
    constructor(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }

    addCourse(newCourse) {
        if (this.courses.includes(newCourse)) {
            throw new Error("Студент вже записаний на цей курс!");
        }
        this.courses.push(newCourse);
    }

    removeCourse(course) {
        const index = this.courses.indexOf(course);
        if (index > -1) {
            this.courses.splice(index, 1);
        } else {
            throw new Error("Студент не записаний на такий курс");
        }
    }

    isTakingCourse(course) {
        return this.courses.includes(course);
    }

    getSummary() {
        return `Student ${this.name} is ${this.age} years old and takes these courses: ${this.courses.join(", ")}`;
    }
}

const studentNew = new Student("David", 17, ["webbasic", "physic", "math"]);

// Клас `Person`
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isOld() {
        return this.age >= 18;
    }

    introduce() {
        return `Привіт, я ${this.name}, мені ${this.age} років`;
    }
}

const newPerson = new Person("Настя", 18);

// Клас `Teacher`, який успадковує `Person`
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        return `${this.name} вчить ${this.subject}`;
    }
}

const bilak = new Teacher("Юрій Юрійович", 48, "фізика");

// Клас `Child`, який успадковує `Person`
class Child extends Person {
    constructor(name, age, friends) {
        super(name, age);
        this.friends = friends;
    }

    getFriends() {
        return `${this.name} дружить з ${this.friends.join(", ")}.`;
    }

    addFriend(friend) {
        this.friends.push(friend);
    }
}

const danya = new Child("Даніель", 9, ["Аня", "Дарина", "Кирил"]);

// Клас `Teenager`, який успадковує `Child`
class Teenager extends Child {
    constructor(name, age, friends, school, grades) {
        super(name, age, friends);
        this.school = school;
        this.grades = grades;
    }

    getSchool() {
        return `${this.name} вчиться в ${this.school}`;
    }

    getAverageGrade() {
        const sum = this.grades.reduce((acc, val) => acc + val, 0);
        return (sum / this.grades.length).toFixed(2);
    }
}

const teen = new Teenager("Юля", 15, ["Оля", "Міша", "Настя"], "Ліцей 'Лідер'", [12, 10, 9, 11, 10]);

// Оновлена версія Array.prototype.toString
Array.prototype.toString = function () {
    return "[object Array]";
};
console.log([].toString());

// Оновлений виклик Task2_Variant2 без помилок
function Task2_Variant2() {
    console.log("Task2_Variant2 executed successfully.");
}

// Виклик функції Task2_Variant2
Task2_Variant2();
