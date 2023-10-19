//--- Basic Type

// string

let car = 'NgocHaiIsme'
let bike: string
bike = 'some string'
// bike = 150 -- error

// number
let num: number = 10

// boolean
let isLoading: boolean = true
let isOk = false

// undefined
let body = undefined

// null
let footer: null

//any
let person: any
person = 10
person = 'Some string' //no error
person = false //no error

/**
 * Object
 */
// let house = {}
// house.address = 'It's code javascript'

let house: {
    address: string
    color?: string
} = {
    address: '',
}
house.address = 'It is typescript'

/**
 * Array
 */

let products: any[] = []
products.push(1)
products.push('Push gi cung duoc')

//string []

let names = ['Khai bao mot mang String', 'ok']
let addresses: string[] = []
addresses.push('Some string')

//number[]
let numbers: number[] = []
numbers = [1, 2, 3]

//object array
let people: {
    name: string
    age: number
}[] = []
people.push({
    name: 'string object item 1',
    age: 21,
})

/**
 * Function
 */

const sum = (num1: number, num2: number): number => {
    return num1 + num2
}
sum(1, 2)

const sub: (num1: number, num2: number) => number = (num1: number, num2: number) => num1 - num2

const handle = () => {
    console.log(123)
}

/**
 * Union
 */

let price: string | number | boolean
price = 'Union dung de khai bao bien co the co nhieu du lieu'
price = 20
price = false

let body01: { name: string | number } | { firstName: string } = {
    name: 100,
}

/**
 * Enum
 */

enum Sizes {
    S = 'Enum de khai bao hang so --i think so',
    M = 'M',
    L = 'L',
    XL = 'XL',
}

let size = Sizes.S

/**
 * Interface
 */

interface State {
    name: string
    isLoading: boolean
}
interface State {
    age: number
}

let state: State = {
    name: 'State se merge ca 2 cai lai',
    isLoading: false,
    age: 100,
}

interface Name {
    name: string
}

interface Age {
    age: number
}

// interface Person = Name|Age -- error vi interface khong cho phep lam the nay

/**
 * Type
 */

type State01 = {
    name: string
    isLoading: boolean
}

let state01: State01 = {
    name: 'Day la type',
    isLoading: false,
}

type Name01 = {
    name: string
}
type Age01 = {
    age: number
}

type Person = Name01 | Age01 //thoai mai

//Type lam duoc nhung dieu ma interface khong lam duoc

/**
 * Generic
 */
const handleClick = <Typetumlumlumla>(value: Typetumlumlumla) => value

let value = 100
handleClick<string>('100')

/**
 * Class
 */

class persion1 {
    private name: string
    age: number
    readonly money: number = 40

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    handle() {
        let value = this.money
    }
}

const alex = new persion1('class ne', 27)

// alex.money = 200 -- loi vi money khai bao pham vi realonly

class Person2 {
    public name: string
    public age: number
    constructor(name: string, age: number) {
        this.age = age
        this.name = name
    }
}
//Mot cach viet gon hon cua Class
class Person3 {
    constructor(public name: string, public age: number) {}
}
