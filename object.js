const person ={
    name:"vis",
    age:23,
    values:44,
    func:444,  
    add : function(){

        console.log('hello'+ this.age);
    }
}
console.log(person)

// function in objects
person.add();
