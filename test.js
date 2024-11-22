function generateRandomNumbers() {
    const numbers = Array.from(Array(50), (_, i) => i);
    const randomNumbers = [];

    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        randomNumbers.push(numbers.splice(randomIndex, 1)[0]);
    }

    return randomNumbers;
}

const result = generateRandomNumbers();
console.log(result);