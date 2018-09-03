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

var _parameters = require('../parameters/parameters');

var _parameters2 = _interopRequireDefault(_parameters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var OasOperation = function (_React$Component) {
    _inherits(OasOperation, _React$Component);

    function OasOperation() {
        _classCallCheck(this, OasOperation);

        return _possibleConstructorReturn(this, (OasOperation.__proto__ || Object.getPrototypeOf(OasOperation)).apply(this, arguments));
    }

    _createClass(OasOperation, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                path = _props.path,
                opType = _props.opType,
                oasOp = _props.oasOp,
                activeIndex = _props.activeIndex,
                currIndex = _props.currIndex,
                handleExpand = _props.handleExpand,
                onDeleteOperation = _props.onDeleteOperation;

            return _react2.default.createElement(
                'div',
                { className: 'operation ' + opType },
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Title,
                    { className: 'op-title ', index: currIndex, onClick: handleExpand },
                    _react2.default.createElement(
                        'span',
                        { className: 'op-method' },
                        opType
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'op-summary' },
                        oasOp.summary
                    ),
                    _react2.default.createElement(_semanticUiReact.Icon, {
                        className: 'delete-op',
                        onClick: function onClick(event) {
                            event.stopPropagation();
                            onDeleteOperation({
                                operation: opType,
                                path: path,
                                operationObj: oasOp
                            });
                        },
                        name: 'trash alternate'
                    })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Content,
                    { active: activeIndex === currIndex },
                    _react2.default.createElement(
                        'p',
                        null,
                        oasOp.description
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'op-section' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Parameters'
                        ),
                        _react2.default.createElement(_parameters2.default, { paramType: 'parameter', parameterObj: oasOp.parameters })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'op-section ' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Responses'
                        ),
                        _react2.default.createElement(_parameters2.default, { paramType: 'response', parameterObj: oasOp.responses })
                    )
                )
            );
        }
    }]);

    return OasOperation;
}(_react2.default.Component);

OasOperation.propTypes = {
    path: _propTypes2.default.string.isRequired,
    opType: _propTypes2.default.string.isRequired,
    oasOp: _propTypes2.default.object.isRequired,
    activeIndex: _propTypes2.default.number.isRequired,
    handleExpand: _propTypes2.default.func.isRequired,
    currIndex: _propTypes2.default.number.isRequired,
    onDeleteOperation: _propTypes2.default.func.isRequired
};

exports.default = OasOperation;