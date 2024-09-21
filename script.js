
class Rectangle {
	constructor(width,height){
	this.width = width;
	this.height = height;
	}
    get horizontal()
	{
	return this.width;
	}
    
    get Vertical()
	{
	return this.height;
	}
	
    getArea(){
		return this.width * this.height;
	}
	
}

class Square extends Rectangle{
	constructor(width){
		super(width,width);
	}
	getPerimeter(){
		return 4*this.horizontal;
	}
}

const aRectangle = new Rectangle(8,9);
console.log(aRectangle.horizontal);
console.log(aRectangle.Vertical);
console.log(aRectangle.getArea());


const aSquare = new Square(8)
console.log(aSquare.horizontal);
console.log(aSquare.Vertical);
console.log(aSquare.getArea());
console.log(aSquare.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
