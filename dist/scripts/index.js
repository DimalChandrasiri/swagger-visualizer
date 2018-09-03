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

var _swaggerParser = require('swagger-parser');

var _swaggerParser2 = _interopRequireDefault(_swaggerParser);

var _semanticUiReact = require('semantic-ui-react');

var _resources = require('./resources/resources');

var _resources2 = _interopRequireDefault(_resources);

var _appContext = require('../context/app-context');

var _appContext2 = _interopRequireDefault(_appContext);

require('semantic-ui-css/semantic.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Component to visualize a swagger json
 */
/* eslint-disable */
var SwaggerVisualizer = function (_React$Component) {
    _inherits(SwaggerVisualizer, _React$Component);

    /**
     * Constructor
     * @param {Object} props props object
     */
    function SwaggerVisualizer(props) {
        _classCallCheck(this, SwaggerVisualizer);

        var _this = _possibleConstructorReturn(this, (SwaggerVisualizer.__proto__ || Object.getPrototypeOf(SwaggerVisualizer)).call(this, props));

        _this.state = {
            oasJson: {},
            isError: {
                state: false,
                message: ''
            },
            actionState: {
                state: '',
                message: ''
            }
        };

        _this.onAddOperation = _this.onAddOperation.bind(_this);
        _this.onAddParameter = _this.onAddParameter.bind(_this);
        _this.onAddResource = _this.onAddResource.bind(_this);

        _this.onDeleteOperation = _this.onDeleteOperation.bind(_this);
        return _this;
    }

    /**
     * Component did mount life cycle
     * @returns {Object} Error object if any
     */


    _createClass(SwaggerVisualizer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var oasJson = this.props.oasJson;


            if (!oasJson) {
                this.setState({
                    isError: {
                        state: true,
                        message: 'Open API Specification compliant JSON obejct is required.'
                    }
                });
                return false;
            }

            _swaggerParser2.default.validate(oasJson).then(function (json) {
                _this2.setState({
                    oasJson: json
                });
            }).catch(function (error) {
                _this2.setState({
                    isError: {
                        state: true,
                        message: error.message
                    }
                });
            });

            return null;
        }
    }, {
        key: 'onAddParameter',
        value: function onAddParameter() {}
    }, {
        key: 'onAddResource',
        value: function onAddResource(resourceObj) {
            var _this3 = this;

            var onAddResource = this.props.onAddResource;

            var resource = resourceObj.resource.replace(' ', '');

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    oasJson: _extends({}, prevState.oasJson, {
                        paths: _extends({}, prevState.oasJson.paths, _defineProperty({}, '/' + resource, {}))
                    })
                });
            }, function () {
                if (_this3.state.oasJson.paths['/' + resource]) {

                    //Exposed event for post add resource event
                    onAddResource(resource, _this3.state.oasJson);

                    _this3.setState({
                        actionState: {
                            state: 'success',
                            message: 'Added resource to the swagger.'
                        }
                    });
                }
            });
        }
    }, {
        key: 'onAddOperation',
        value: function onAddOperation(operationsObj) {
            var _this4 = this;

            var onAddOperation = this.props.onAddOperation;

            var path = operationsObj.path;

            this.setState(function (prevState) {
                return _extends({}, prevState, {
                    oasJson: _extends({}, prevState.oasJson, {
                        paths: _extends({}, prevState.oasJson.paths, _defineProperty({}, path, _extends({}, prevState.oasJson.paths[path], _defineProperty({}, operationsObj.method, {
                            consumes: [],
                            description: operationsObj.description,
                            operationId: operationsObj.id,
                            parameters: [],
                            produces: ["application/xml", "application/json"],
                            responses: {},
                            security: [],
                            summary: operationsObj.name,
                            tags: []
                        }))))
                    })
                });
            }, function () {

                //Exposed event for post add resource event
                onAddOperation(operationsObj, _this4.state.oasJson);

                _this4.setState({
                    actionState: {
                        state: 'success',
                        message: 'Added operation to ' + path
                    }
                });
            });
        }
    }, {
        key: 'onDeleteOperation',
        value: function onDeleteOperation(deletedOp) {
            var _this5 = this;

            var path = deletedOp.path;
            var operation = deletedOp.operation;
            var onDeleteOperation = this.props.onDeleteOperation;


            delete this.state.oasJson.paths[path][operation];
            this.setState(this.state, function () {
                onDeleteOperation(path, operation, deletedOp.operationObj, _this5.state);
            });
        }

        /**
         * Render Method
         * @returns {React.ReactElement} DOM element
         */

    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                isError = _state.isError,
                paths = _state.oasJson.paths,
                actionState = _state.actionState,
                oasJson = _state.oasJson;


            if (isError.state) {
                return _react2.default.createElement(_semanticUiReact.Message, { error: true, content: isError.message });
            }

            return _react2.default.createElement(
                _appContext2.default.Provider,
                {
                    value: {
                        oasJson: oasJson,
                        onAddResource: this.onAddResource,
                        onAddOperation: this.onAddOperation,
                        onAddParameter: this.onAddParameter,
                        onDeleteOperation: this.onDeleteOperation
                    }
                },
                function () {
                    if (actionState.state === 'error') {
                        return _react2.default.createElement(_semanticUiReact.Message, { error: true, content: actionState.message });
                    } else if (actionState.state === 'success') {
                        return _react2.default.createElement(_semanticUiReact.Message, { success: true, content: actionState.message });
                    } else if (actionState.state === 'warning') {
                        return _react2.default.createElement(_semanticUiReact.Message, { warning: true, content: actionState.message });
                    }
                }(),
                _react2.default.createElement(_resources2.default, {
                    resObj: paths
                })
            );
        }
    }]);

    return SwaggerVisualizer;
}(_react2.default.Component);

SwaggerVisualizer.propTypes = {
    oasJson: _propTypes2.default.object.isRequired,
    onAddResource: _propTypes2.default.func,
    onAddParameter: _propTypes2.default.func,
    onAddOperation: _propTypes2.default.func,
    onDeleteOperation: _propTypes2.default.func
};

SwaggerVisualizer.defaultProps = {
    onAddResource: function onAddResource() {},
    onAddParameter: function onAddParameter() {},
    onAddOperation: function onAddOperation() {},
    onDeleteOperation: function onDeleteOperation() {}
};

exports.default = SwaggerVisualizer;