import Component from './component';

export default class Entity {
    public static count = 0;
    id: string;
    name: string;
    components: Component[] = [];

    constructor(name?: string){
        this.id = (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16) +
            Entity.count;

        this.name = name || "";

        Entity.count++;
        return this;
    }

    public addComponent(component: Component) {
        this.components.push(component);
        return this;
    }

    public removeComponent(){
        return this;
    }

    public print(){
        console.log(JSON.stringify(this, null, 4));
        return this;
    }
}