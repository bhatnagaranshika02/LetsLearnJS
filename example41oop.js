"use strict"
class Fraction{
	construction(num,den){
		this._numerator = num;
		this._denominator = den;
	}
	toString(){
		return '${this.numerator}/${this.numerator}'
	}
	get numerator(){
		return this.__numerator;

	}

	get denominator(){
		return this._denominator;
	}

	set _numerator(v){
		console.log("error")
	}
}
let x = new Fraction(2,3);
writeln("x is "+x)
writeln(x.numerator)