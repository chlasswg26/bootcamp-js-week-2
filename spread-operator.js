class Data {
    constructor(name = 'Leanne Graham', email = 'Sincere@april.biz', hobby = []) {
        this.id = 1
        this.name = name
        this.username = 'Bret'
        this.email = email
        this.address = {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874'
        }
        this.phone = '1-770-736-8031 x56442'
        this.website = 'hildegard.org'
        this.hobby = hobby
    }

    set ubahData(data) {
        if (!data) return 'Instance entries cannot be empty!'
        if (typeof data !== 'object') return 'Instance entries must be an object!'

        const { name, email, hobby } = data

        this.name = name
        this.email = email
        this.hobby = hobby
    }
}

const data = new Data()

const myData = {
    name: 'Ichlas Wardy Gustama',
    email: 'ichlaswardy26@gmail.com',
    hobby: ['Gaming', 'Coding', 'Reading', 'Listening', 'Singing']
}

// data.ubahData = myData

const address = data.address
const { street, city } = address

console.log(data)
console.log(`\n Destructuring: The street is ${street} and the city is ${city}`)