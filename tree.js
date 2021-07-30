class Tree{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,width,height, options)
        this.image = loadImage("tree.png")
        this.w = width
        this.h = height
        World.add(world, this.body)
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
        image(this.image, pos.x,pos.y,this.w, this.h)
    }
    
}