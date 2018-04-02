const History = function(){
  const _items = [];
  this.put = _put;
  this.get = _get;
  this.undo = _undo;
  this.redo = _redo;
  this.items = _items;

  function _put(text) {
    _items.unshift(text);
  }

  function _get(index) {
    _items[index];
  }

  function _undo(){
    
  }

  function _redo() {

  }

  return this;
}

module.exports = History;
