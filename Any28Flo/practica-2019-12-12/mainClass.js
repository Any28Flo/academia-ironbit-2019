//Global classes
class Animal{
    constructor(species,age){
        this.species = species;
        this.age= age;
    }
    eat(){

    }
    sleep(){

    }
    breathe(){

    }
}
class Task{
    constructor(name, duration){
        this.name = name;
        this.duration = duration;
    }

}
class Family{
    constructor (members, numMembers){
        this.members = members;
        this.numMembers= numMembers;
    }
    fight(){
        
    }
}
//extend classes
class Human extends Animal{
    constructor(age,gender,height){
        this.age = age;
        this.gender = gender;
        this.height = height;
    }
    drinkCoffe(){

    }
}
class Student extends Human{
    constructor(age,gender,height,school){
        super(age,gender,height);
        this.school = school;
    }

}
class Pet extends Animal{
    constructor(species,age,color,race){
        super(species,age);
        this.color = color;
        this.race = race;
    }
}

class Dog extends Pet{
    constructor(species,age,color,race){
        super(species,age,color,race)
    }
    thief(){

    }
}
class Cat extends Pet{
    constructor(species,age,color,race){
        super(species,age,color,race)
    }
    scale(){
        
    }
}