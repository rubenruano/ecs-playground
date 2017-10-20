import { expect } from 'chai';
import 'mocha';
import Entity from '../entity';
import ECS from '../ecs';

describe('System add Entity function', () => {

  it('should return 1 entity', () => {
    let ent = new Entity("my-Entity");
    let ecs = new ECS();
    ecs.addEntity(ent);

    expect(ecs.entities.length).to.equal(1);
  });

});