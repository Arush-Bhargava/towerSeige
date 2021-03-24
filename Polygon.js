class Polygon{
    constructor(x, y,sides,radius){
        var options={
         'restitution':0.8,
         'friction':1.0,
         'density':1.0,
        }
       this.body=Bodies.polygon(x,y,sides,radius,options);
       this.sides= sides;
       this.radius= this.radius;
       World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        fill("orange");
        rect(pos.x, pos.y, this.sides, this.radius);
    }
}