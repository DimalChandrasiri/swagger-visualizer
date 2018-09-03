'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
 * Component for add operation feature
 */
/* eslint-disable */
var OasAddOperation = function (_React$Component) {
    _inherits(OasAddOperation, _React$Component);

    function OasAddOperation(props) {
        _classCallCheck(this, OasAddOperation);

        var _this = _possibleConstructorReturn(this, (OasAddOperation.__proto__ || Object.getPrototypeOf(OasAddOperation)).call(this, props));

        _this.state = {
            operationForm: {
                id: '',
                name: '',
                description: '',
                method: '',
                path: props.path
            },
            methodOpts: [],
            pathOpts: []
        };

        _this.getMethods();
        return _this;
    }

    _createClass(OasAddOperation, [{
        key: 'getMethods',
        value: function getMethods() {
            var path = this.state.operationForm.path;
            var oasJson = this.props.oasJson;

            var methodOpts = [];

            var availableMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].filter(function (method) {
                return !Object.keys(oasJson.paths[path]).includes(method.toLowerCase());
            });

            availableMethods.forEach(function (method) {
                methodOpts.push({
                    key: method.toLowerCase(),
                    text: method,
                    value: method.toLowerCase()
                });
            });

            this.state.methodOpts = methodOpts;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var onAddOperation = this.props.onAddOperation;

            return _react2.default.createElement(
                _semanticUiReact.Form,
                { size: 'mini', className: 'add-operation' },
                _react2.default.createElement(
                    _semanticUiReact.Form.Field,
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Name'
                    ),
                    _react2.default.createElement('input', { placeholder: 'Short Summery', onChange: function onChange(e) {
                            return _this2.setState({
                                operationForm: _extends({}, _this2.state.operationForm, {
                                    name: e.target.value,
                                    id: e.target.value.replace(' ', '')
                                })
                            });
                        } })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Form.Field,
                    null,
                    _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Select, label: 'Method', options: this.state.methodOpts, placeholder: 'Method', onChange: function onChange(e, data) {
                            _this2.setState({
                                operationForm: _extends({}, _this2.state.operationForm, {
                                    method: data.value
                                })
                            });
                        } })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Form.Field,
                    null,
                    _react2.default.createElement(_semanticUiReact.Form.TextArea, { label: 'Description', placeholder: 'Tell us more about...', onChange: function onChange(e) {
                            return _this2.setState({
                                operationForm: _extends({}, _this2.state.operationForm, {
                                    description: e.target.value
                                })
                            });
                        } })
                ),
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { size: 'mini', onClick: function onClick() {
                            onAddOperation(_this2.state.operationForm);
                        } },
                    'Save'
                )
            );
        }
    }]);

    return OasAddOperation;
}(_react2.default.Component);

OasAddOperation.prototypes = {
    onAddOperation: _propTypes2.default.func,
    path: _propTypes2.default.string
};

exports.default = OasAddOperation;