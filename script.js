//complete this code
class Rectangle {
	constructor(width,height){
	this.width = width;
	this.height = height;
	}
    get width() 
	{
	return `${this.width}` ;
	}
    
    get height()
	{
	return `${this.height}`;
	}
	
    getArea(){
		return ${this.width}*${this.height};
	}
	
}

class Square extends Rectangle{
	constructor(width){
		super(width);
	}
	getPerimeter(){
		return 4*${this.width}*${this.width};
	}
}

const aRectangle = new Rectangle(8,9);
console.log(aRectangle.width);
console.log(aRectangle.height);
console.log(aRectangle.getArea());


const aSquare = new Square(8)
console.log(aSquare.width);
console.log(aSquare.height);
console.log(aSquare.getArea());
console.log(aSquare.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
