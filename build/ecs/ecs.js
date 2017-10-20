var ECS = /** @class */ (function () {
    function ECS() {
        this.entities = [];
        this.systems = [];
        console.log("ECS created...");
    }
    ECS.prototype.addEntity = function (ent) {
        this.entities.push(ent);
    };
    ECS.prototype.addSystem = function (system) {
        this.systems.push(system);
    };
    return ECS;
}());
export default ECS;
