class Sling{
    constructor(body,point){
        var options = {
            'bodyA' : body,
            'pointB' : point,
            'stiffness': 0.004,
            'length' : 1
        }
        this.sling = Constraint.create(options)        
    }
    
}