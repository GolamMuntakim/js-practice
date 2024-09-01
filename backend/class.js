class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName  = lastName,
        this.age = age
    }
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}
class Student extends User{
    constructor(firstName, lastName,age ,standard){
        super(firstName, lastName,age)
        this.standard = standard
    }
    study(){
        console.log('studying');
    }
}
class Employe{
    // constructor(firstName, lastName, age, company){
    //     this.firstName = firstName,
    //     this.lastName  = lastName,
    //     this.age = age
    //     this.company = company
    // }
    // getBirthYear(){
    //     return new Date().getFullYear() - this.age
    // }
    // getFullName(){
    //     return this.firstName + ' ' + this.lastName
    // }
}
// const user1 = new User ( 'siam', 'Ahmed' , 24)
const student1 = new Student ( 'siam', 'Ahmed' , 24, 'LLB')
// const student2 = new User ( 'Arman', 'Ahmed' , 20, '10')
const employ1 = new Employe ( 'Arman', 'Ahmed' , 20, 'Google')