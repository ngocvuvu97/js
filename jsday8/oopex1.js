class Vec{
    constructor(x,y){
        this.x = x
        this.y = y
        this.length =  Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
    }
    plus() {
        return this.x+ this.y
    }
    minus() {
        return this.x-this.y
    }
}
let arg1= new Vec(3,4);
console.log(arg1.plus());
console.log(arg1.minus())
console.log(arg1.length)




