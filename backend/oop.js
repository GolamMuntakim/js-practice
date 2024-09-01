// const user = {
//     firstName : 'siam',
//     lastName : 'Ahmed',
//     age : 24,
//     getAgeYear: function (){
//         return new Date().getFullYear() - user.age
//         }
// }

// function getAgeYear(){
//     return new Date().getFullAge() - this.age
// }
// function createUser(firstName, lastName, age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getAgeYear
//     }
//     return user
// }
// const user1 = createUser("siam", "ahmed", 24)


function CreateUser(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
CreateUser.prototype.getBirthYear = function(){
    return new Date().getFullYear() - this.age
}
CreateUser.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

const user1 = new CreateUser('siam', 'ahmed', 24)