class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
        bodyA:bodyA,
        bodyB : bodyB,
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    fly(){
     this.rope.bodyA=null;   
     
    }
    display(){
      if (this.rope.bodyA){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        var offset=this.rope.pointB;
        strokeWeight(4);
        
        
        line(pointA.x,pointA.y,(pointB.x+offset.x),(pointB.y+offset.y));
      }
    }

}

