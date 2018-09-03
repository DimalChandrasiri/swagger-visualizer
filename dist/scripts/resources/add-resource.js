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

/**
 * Component for add resource feature
 */
/* eslint-disable */
var OasAddResource = function (_React$Component) {
    _inherits(OasAddResource, _React$Component);

    function OasAddResource(props) {
        _classCallCheck(this, OasAddResource);

        var _this = _possibleConstructorReturn(this, (OasAddResource.__proto__ || Object.getPrototypeOf(OasAddResource)).call(this, props));

        _this.state = {
            resource: ''
        };
        return _this;
    }

    _createClass(OasAddResource, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var onAddResource = this.props.onAddResource;

            return _react2.default.createElement(
                _semanticUiReact.Form,
                { size: 'mini', className: 'add-resource' },
                _react2.default.createElement(
                    _semanticUiReact.Form.Field,
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Resource Name'
                    ),
                    _react2.default.createElement('input', { placeholder: 'Example: /users/{userId}', onChange: function onChange(e) {
                            return _this2.setState({
                                resource: e.target.value
                            });
                        } })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { size: 'tiny', onClick: function onClick() {
                            onAddResource(_this2.state);
                        } },
                    'Save'
                )
            );
        }
    }]);

    return OasAddResource;
}(_react2.default.Component);

OasAddResource.propTypes = {
    onAddResource: _propTypes2.default.func
};

OasAddResource.defaultProps = {
    onAddResource: function onAddResource() {}
};

exports.default = OasAddResource;