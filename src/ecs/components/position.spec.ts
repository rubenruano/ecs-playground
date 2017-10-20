import { expect } from 'chai';
import 'mocha';
import Position from './position';

describe('Create Position Component', () => {
  let pos = new Position(20, 30);
  
  it('name should be "position"', () => {
    expect(pos.name).to.equal("position");
  });
  it('Position x should be 20', () => {
    expect(pos.x).to.equal(20);
  });
  it('Position y should be 30', () => {
    expect(pos.y).to.equal(30);
  });


});