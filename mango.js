class Mango{
    constructor(x,y,radius){
        var options = {
            'isStatic' : true,
            'restitution' : 0,
            'friction' : 1
        }
        this.body = Bodies.circle(x,y,radius, options)
        this.image = loadImage("mango.png")
        this.r = radius
        World.add(world, this.body)
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
        image(this.image, pos.x,pos.y,this.r, this.r)
    }
    
}