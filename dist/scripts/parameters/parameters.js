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

var _parameter = require('./parameter');

var _parameter2 = _interopRequireDefault(_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var OasParameters = function (_React$Component) {
    _inherits(OasParameters, _React$Component);

    function OasParameters(props) {
        _classCallCheck(this, OasParameters);

        return _possibleConstructorReturn(this, (OasParameters.__proto__ || Object.getPrototypeOf(OasParameters)).call(this, props));
    }

    _createClass(OasParameters, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                parameterObj = _props.parameterObj,
                paramType = _props.paramType;

            return _react2.default.createElement(
                _semanticUiReact.Table,
                { celled: true },
                _react2.default.createElement(
                    _semanticUiReact.Table.Header,
                    null,
                    _react2.default.createElement(
                        _semanticUiReact.Table.Row,
                        null,
                        _react2.default.createElement(
                            _semanticUiReact.Table.HeaderCell,
                            null,
                            'Name'
                        ),
                        _react2.default.createElement(
                            _semanticUiReact.Table.HeaderCell,
                            null,
                            'Description'
                        )
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Table.Body,
                    null,
                    parameterObj && Object.keys(parameterObj).map(function (param) {
                        return _react2.default.createElement(_parameter2.default, { responseCode: paramType === 'response' ? param : '', param: parameterObj[param] });
                    })
                )
            );
        }
    }]);

    return OasParameters;
}(_react2.default.Component);

OasParameters.proptypes = {
    parameterObj: _propTypes2.default.object.isRequired,
    paramType: _propTypes2.default.string.isRequired
};

exports.default = OasParameters;