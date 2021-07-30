class Ground{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true

        }
        
        this.body = Bodies.rectangle(x,y,width,height, options)
        this.w = width
        this.h = height
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        var pos = this.body.position
        rect(pos.x,pos.y,this.w, this.h)
    }
    
}