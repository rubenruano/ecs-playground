var Entity = /** @class */ (function () {
    function Entity(name) {
        this.components = [];
        this.id = (+new Date()).toString(16) +
            (Math.random() * 100000000 | 0).toString(16) +
            Entity.count;
        Entity.count++;
        return this;
    }
    Entity.prototype.addComponent = function (component) {
        this.components.push(component);
        return this;
    };
    Entity.prototype.removeComponent = function () {
        return this;
    };
    Entity.prototype.print = function () {
        console.log(JSON.stringify(this, null, 4));
        return this;
    };
    Entity.count = 0;
    return Entity;
}());
export default Entity;
