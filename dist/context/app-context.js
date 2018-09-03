'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwaggerAppContext = _react2.default.createContext({
    oasJson: {},
    onAddResource: function onAddResource() {},
    onAddParameter: function onAddParameter() {},
    onAddOperation: function onAddOperation() {},
    onDeleteOperation: function onDeleteOperation() {}
});

exports.default = SwaggerAppContext;