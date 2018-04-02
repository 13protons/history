const History = function(){
  let _items = [];
  let pointer = 0;

  this.put = _put;
  this.get = _get;
  this.undo = _undo;
  this.redo = _redo;
  this.items = _items;
  this.reset = _reset;

  function _put(text) {
    _items.unshift({
      updated: Date.now(),
      content: text
    });
    return _get();
  }

  function _get(index) {
    index = index || pointer;
    if (_items[index]) {
      return Object.assign({
        can_undo: _items.length > pointer,
        can_redo: pointer > 0,
        legacy: _items.length
      }, _items[index]);
    }
    return _items[index];
  }

  function _undo(){
    pointer++;
    console.log('undo pointer', pointer, 'items', _items);
    return _get(pointer);
  }

  function _redo() {
    pointer--;
    if(pointer < 0) { pointer = 0; }
    return _get(pointer);
  }

  function _reset() {
    pointer = 0;
    _items = [];
    _put('');
  }

  _put('');
  return this;
}

module.exports = History;
