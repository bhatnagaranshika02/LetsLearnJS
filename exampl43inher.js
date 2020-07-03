"use strict"
class Animal{
	constructor(name){
		this._name=name
	}
	speak(){
		writeln("generic animals are mute")
	}
	get name(){
		return this._name;
	}
}

class Dog extends Animal{
	constructor(name){
		super(name);
		this.numLegs = 4;
	}
	speak(){
		writeln("woof woof")
	}
}
class CartoonDog extends Dog {

    speak() {
        writeln("I'll have a dry martini")
    }

}
var spot = new Dog("spot");
spot.speak();
writeln(spot.numLegs);
brian = new CartoonDog('Brian')
brian.speak()
writeln(brian.name)