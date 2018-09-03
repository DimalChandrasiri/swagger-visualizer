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

var _operations = require('../operations/operations');

var _operations2 = _interopRequireDefault(_operations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Resource Component
 */
/* eslint-disable */
var OasResource = function (_React$Component) {
    _inherits(OasResource, _React$Component);

    function OasResource() {
        _classCallCheck(this, OasResource);

        return _possibleConstructorReturn(this, (OasResource.__proto__ || Object.getPrototypeOf(OasResource)).apply(this, arguments));
    }

    _createClass(OasResource, [{
        key: 'render',

        /**
         * @returns {React.ReactElement} React Element
         */
        value: function render() {
            var _props = this.props,
                oasOps = _props.oasOps,
                handleExpand = _props.handleExpand,
                activeIndex = _props.activeIndex,
                resPath = _props.resPath,
                currIndex = _props.currIndex;

            return _react2.default.createElement(
                'div',
                { className: 'resource' },
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Title,
                    { className: 'res-title', index: currIndex, onClick: handleExpand },
                    _react2.default.createElement(
                        'span',
                        null,
                        resPath
                    )
                ),
                _react2.default.createElement(
                    _semanticUiReact.Accordion.Content,
                    { active: activeIndex === currIndex },
                    _react2.default.createElement(_operations2.default, { oasOperations: oasOps, path: resPath })
                )
            );
        }
    }]);

    return OasResource;
}(_react2.default.Component);

OasResource.propTypes = {
    oasOps: _propTypes2.default.object.isRequired,
    activeIndex: _propTypes2.default.number.isRequired,
    handleExpand: _propTypes2.default.func.isRequired,
    currIndex: _propTypes2.default.number.isRequired,
    resPath: _propTypes2.default.string.isRequired
};
exports.default = OasResource;