// Оголошення об'єкта `car` з методами `setSpeed`, `getSpeed`, `clearSpeed`
const car = {
    speedometer: 0,
    setSpeed(value) {
        this.speedometer = value;
        return this;
    },
    getSpeed() {
        console.log(this.speedometer);
        return this;
    },
    clearSpeed() {
        this.speedometer = 0;
        return this;
    }
};