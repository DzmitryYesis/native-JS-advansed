console.log('Work with function constructor')

///1

function Animal(name='Animal'){
    this.name = name
}
Animal.prototype.walking = function (){
    console.log(`${this.name} walking`)
}
Animal.prototype.eating = function (){
    console.log(`${this.name} eating`)
}
Animal.prototype.sleeping = function (){
    console.log(`${this.name} sleeping`)
}


const result = new Animal()
result.walking()
result.eating()
result.sleeping()

//2

