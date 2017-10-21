import { expect } from 'chai';
import 'mocha';
import Entity from '../entity';
import Position from '../components/position';
import Health from '../components/health';

describe('Create an Entity', () => {
    let ent = new Entity("testEntity");

    it('Entity name should be "testEntity"', () => {
        expect(ent.name).to.equal("testEntity");
    });

    it('Entity id should be a string ', () => {
        expect(ent.id).to.be.a('string');
    });

    it('Entity id should be 19 chars long ', () => {
        expect(ent.id).to.have.lengthOf(19);
    });

});

describe('Adding components in a Entity', () => {
    let ent = new Entity("testEntity");
    let pos = new Position(20, 30);
    ent.addComponent(pos);

    it('Entity should have component position', () => {
        expect(ent.components).to.have.property(Position.compName);
    });
});

describe('Removing components in a Entity', () => {
    let ent = new Entity("testEntity");
    let pos = new Position(20, 30);
    let health = new Health(100);
    ent.addComponent(pos);
    ent.addComponent(health);
    ent.removeComponent(pos);

    it('Entity should have no components', () => {
        expect(ent.components).to.not.have.property(Position.compName);
    });
    it('Entity should have one health component', () => {
        expect(ent.components).to.have.property(Health.compName);
    });
});

describe('Get component from Entity', () => {
    let ent = new Entity("testEntity");
    ent.addComponent(new Position(20, 30));
    ent.addComponent(new Health(100));
    let pos = ent.getComponent("position");

    it('Can get Entity component', () => {
        expect(pos).not.equals(undefined);
    });

    it('Entity position x should be 20', () => {
        expect(pos.x).equals(20);
    });

});