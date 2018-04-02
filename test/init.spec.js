const should = require('chai').should()

const History = require('../');
let history = new History();

describe('history', ()=>{
  it('should exist', ()=>{
    history.should.exist;
  });

  describe('signature', ()=>{
    it('should have a put method', ()=>{
      history.put.should.exist;
    })
    it('should have a get method', () => {
      history.get.should.exist;
    })
    it('should have a undo method', () => {
      history.undo.should.exist;
    })
    it('should have a redo method', () => {
      history.redo.should.exist;
    })
  });
});