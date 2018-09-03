'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var OasParameter = function (_React$Component) {
    _inherits(OasParameter, _React$Component);

    function OasParameter(props) {
        _classCallCheck(this, OasParameter);

        return _possibleConstructorReturn(this, (OasParameter.__proto__ || Object.getPrototypeOf(OasParameter)).call(this, props));
    }

    _createClass(OasParameter, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                param = _props.param,
                responseCode = _props.responseCode;

            return _react2.default.createElement(
                _semanticUiReact.Table.Row,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    { className: 'parameter-name-cell' },
                    _react2.default.createElement(
                        'div',
                        { className: 'parameter__name required' },
                        responseCode === '' ? param.name : responseCode
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'parameter__type' },
                        param.type
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Table.Cell,
                    { className: 'parameter-desc-cell' },
                    _react2.default.createElement(
                        'div',
                        { className: 'markdown' },
                        param.description
                    )
                )
            );
        }
    }]);

    return OasParameter;
}(_react2.default.Component);

OasParameter.proptypes = {
    param: _propTypes2.default.object.isRequired,
    responseCode: _propTypes2.default.string.isRequired
};

exports.default = OasParameter;