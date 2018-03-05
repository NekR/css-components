module.exports = function component(createElement, classes) {
  return Object.keys(classes).reduce(function(result, className) {
    result[className] = function(props) {
      const tag = props.tag || 'div';

      const innerProps = Object.keys(props).reduce(function(result, prop) {
        switch (prop) {
          case 'tag':
          case 'innerRef':
          // case 'children':
          // case 'className':
            return result;
        }

        result[prop] = props[prop];

        return result;
      }, {});

      innerProps.ref = props.innerRef;
      /*props.className*/
      innerProps.className = [classes[className], innerProps.className].join(' ');

      return createElement(tag, innerProps);
    };

    return result;
  }, {});
};