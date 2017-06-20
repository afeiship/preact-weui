(function () {

  var global = global || window || this;

  var nx = global.nx || require('next-js-core2');
  var NxctWeui = nx.declare('nx.ctWeui', {

  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxctWeui;
  }

}());
