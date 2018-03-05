module.exports = function(source) {
  return `
    ${source}

    var component = require('@nekr/css-components');
    var react = require('react');

    var intoLocals = Array.isArray(module.exports);
    var classNames = (intoLocals ? exports.locals : module.exports) || {};
    var components = component(react.createElement, classNames);
    components.classNames = classNames;

    if (intoLocals) {
      exports.locals = components;
    } else {
      module.exports = components;
    }
  `
};