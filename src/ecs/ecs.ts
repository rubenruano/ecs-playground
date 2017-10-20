import Entity from './entity';
import System from './system';

export default class ECS{
    entities: Entity[] = [];
    systems: System[] = [];
    
    constructor(){
        console.log("ECS created...");
    }

    addEntity(ent : Entity){
        this.entities.push(ent);
    }

    addSystem(system : System){
        this.systems.push(system);
    }
}