class Triangle {
    constructor(number) {
        this.number = number
    }

    get showTriangle() {
        let result = ''

        if (this.number) {
            if (typeof this.number === 'number') {
                result = this.generateTriangle
            } else {
                result = 'Instance entries must be numeric!'
            }
        } else {
            result = 'Instance entries cannot be empty!'
        }

        return result
    }

    get generateTriangle() {
        let triangle = ''

        for (let firstIterator = 1; firstIterator <= this.number; firstIterator++) {
            for (let secondIterator = 1; secondIterator <= firstIterator; secondIterator++) {
                triangle += `${secondIterator} `
            }

            triangle += '\n'
        }

        triangle = triangle
            .split('\n')
            .reverse()
            .join('\n')
            .replace('\n', (character, index) => index == 0 ? '' : character)

        return triangle
    }
}

const printSegitiga = new Triangle(5)

console.log(printSegitiga.showTriangle)
