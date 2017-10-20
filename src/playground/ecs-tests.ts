import Entity from '../ecs/entity';
import ECS from '../ecs/ecs';
import Position from '../ecs/components/position';

export function test1(){
    console.log("Testing Entity...");

    console.log("Creating Entity");
    let ent:Entity = new Entity("my-Entity");

    console.log(`Creating component: ${Position.compName}`)
    let pos = new Position(23, 55);
    ent.addComponent(pos);
    ent.print();
}

export function test2(){
    console.log("Testing Entity");
    new Entity().print();
    new ECS();    
}
