
/* типа данные с сервера */
/* user constructor */
/* mesasges constructor */
let postsData = [
    { id: 1, message: 'Privet', likeCounter: 20, },
    { id: 2, message: 'Tu Pityxxxx', likeCounter: 12 },
    { id: 3, message: 'Tu Pityxxxx', likeCounter: 12 }

]

function User(name, path) {

    this.path = path;
    this.name = name;
}

let userData = [
    new User('Andrew', 1),
    new User('Helen', 2),
    new User('Antony', 3),
    new User('Svin', 4),
    new User('Alex', 5),

]


function Mes(name, message, id) {
    this.name = name;
    this.id = id;
    this.message = message;
}
let messageData = [
    new Mes('Andrew', 'YO', 1),
    new Mes('Andrew1', 'YO2', 2),

]
let state = {
    forDialogsData: {
        userData,
        messageData,
    },
    postsData

}
export default state;