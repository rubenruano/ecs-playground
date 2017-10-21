import Component from './component';

export default class Entity {
    public static count = 0;
    id: string;
    name: string;
    //components: Component[] = [];
    components: {};

    constructor(name?: string) {
        this.id = (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16) +
            Entity.count;

        this.name = name || "";
        this.components = {};

        Entity.count++;
        return this;
    }

    public addComponent(component: Component) {
        this.components[component.name] = component;
        return this;
    }

    public removeComponent(component: Component) {
        delete this.components[component.name];
        return this;
    }

    public getComponent(compName: string) {
        return this.components[compName];
    }

    public print() {
        console.log(JSON.stringify(this, null, 4));
        return this;
    }
}