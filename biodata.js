class Biodata {
    constructor() {
        this.name = 'Ichlas Wardy Gustama'
        this.age = 23
        this.hobbies = ['Gaming', 'Coding', 'Reading', 'Listening', 'Singing']
        this.isMarried = false
        this.schoolList = [
            {
                name: 'SD Negeri 200302 Padangsidimpuan',
                yearIn: 2007,
                yearOut: 2010,
                major: null
            },
            {
                name: 'SDN 03 PG Jakarta',
                yearIn: 2010,
                yearOut: 2013,
                major: null
            },
            {
                name: 'MTsN 14 Halim Jakarta',
                yearIn: 2013,
                yearOut: 2016,
                major: null
            },
            {
                name: 'SMK PGRI 1 Jakarta',
                yearIn: 2016,
                yearOut: 2019,
                major: 'Marketing'
            }
        ]
        this.skills = [
            {
                skillName: 'Marketing',
                level: 'advanced'
            },
            {
                skillName: 'Coding',
                level: 'advanced'
            },
            {
                skillName: 'Cloud Computing',
                level: 'beginner'
            }
        ]
        this.interestInCoding = true
    }
}

const biodata = new Biodata()

console.log(biodata)
