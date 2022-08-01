class Average {
    constructor(bahasaIndonesia, bahasaInggris, matematika, IPA) {        
        this.bahasaIndonesia = bahasaIndonesia
        this.bahasaInggris = bahasaInggris
        this.matematika = matematika
        this.IPA = IPA
    }

    #examTotal = 4

    get showMEAN() {
        let result = ''

        const thereIsNoDataEmpty = this.bahasaIndonesia && this.bahasaInggris && this.matematika && this.IPA
        const allDataIsNumeric = typeof this.bahasaIndonesia === 'number'
                &&
                typeof this.bahasaInggris === 'number'
                &&
                typeof this.matematika === 'number'
                &&
                typeof this.IPA === 'number'
        const notInZeroOrLess = this.bahasaIndonesia < 1 && this.bahasaInggris < 1 && this.matematika < 1 && this.IPA < 1
        const greaterThanHundred = this.bahasaIndonesia > 100 && this.bahasaInggris > 100 && this.matematika > 100 && this.IPA > 100

        if (thereIsNoDataEmpty) {
            if (allDataIsNumeric) {
                if (!notInZeroOrLess) {
                    if (!greaterThanHundred) {
                        let grade = ''
        
                        const countingMEAN = (this.bahasaIndonesia + this.bahasaInggris + this.matematika + this.IPA) / this.#examTotal
        
                        if (countingMEAN >= 90 && countingMEAN <= 100) grade = 'A'
                        if (countingMEAN >= 80 && countingMEAN <= 89) grade = 'B'
                        if (countingMEAN >= 70 && countingMEAN <= 79) grade = 'C'
                        if (countingMEAN >= 60 && countingMEAN <= 69) grade = 'D'
                        if (countingMEAN >= 1 && countingMEAN <= 50) grade = 'E'
        
                        result = `Rata-rata ${countingMEAN}\nGrade = ${grade}`
                    } else {
                        result = `Instance entries must less than hundred`
                    }
                } else {
                    result = `Instance entries can't be 0 or less`
                }
            } else {
                result = 'Instance entries must be numeric!'
            }
        } else {
            result = 'Instance entries cannot be empty!'
        }

        return result
    }
}

const bahasaIndonesia = 90
const bahasaInggris = 89
const mtk = 80
const ipa = '69'

const callAveragePrograms = new Average(bahasaIndonesia, bahasaInggris, mtk, ipa)

console.log(callAveragePrograms.showMEAN)
