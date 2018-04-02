const should = require('chai').should()

const History = require('../');
let history = new History();

describe('PUTting new data', ()=>{
  before(()=>{
    history.reset();
  });

  it('should remember the first item', ()=>{
    history.put('hello');
    history.get().content.should.eql('hello');
    history.get(0).content.should.eql('hello');
  });

  it('should promote next item to \'first\' item', () => {
    history.put('world');
    history.get().content.should.eql('world');
    history.get(0).content.should.eql('world');
  });
})

describe('resetting data', () => {
  before(() => {
    history.reset();
  });

  it('should start with nothing', () => {    
    let item = history.get();
    item.content.length.should.eql(0);
  });

  it('should go back to nothing', () => {
    history.put('hello');
    history.get().content.should.eql('hello');
    history.reset();
    let item = history.get();
    item.content.length.should.eql(0);
  });
});

describe('__doing', ()=>{
  beforeEach(() => {
    history.reset();
  });

  it('should step back in history', () => {
    history.put('hello');
    history.get().content.should.eql('hello');
    history.put('world');
    history.get().content.should.eql('world');
    history.undo().content.should.eql('hello');
  });

  it('should step forward in history', () => {
    history.put('hello');
    history.get().content.should.eql('hello');
    history.put('world');
    history.get().content.should.eql('world');
    history.undo().content.should.eql('hello');
    history.redo().content.should.eql('world');
  });
});

describe('signature', ()=>{
  before(() => {
    history.reset();
    history.put('hello');
  });

  it('should have a can_undo prop', () => {
    let item = history.get();
    item.can_undo.should.exist;
  });
  it('should be able to undo', () => {
    let item = history.get();
    item.can_undo.should.be.ok;
  })
  it('should not yet be able to redo', () => {
    let item = history.get();
    item.can_redo.should.not.be.ok;
  })
  it('should be capable of redo after undo', () => {
    let item = history.undo();
    item.can_redo.should.be.ok;
  })
})



