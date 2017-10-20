import { expect } from 'chai';
import 'mocha';
import Entity from '../entity';

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