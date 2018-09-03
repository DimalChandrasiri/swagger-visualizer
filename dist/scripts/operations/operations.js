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

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _addOperation = require('./add-operation');

var _addOperation2 = _interopRequireDefault(_addOperation);

var _appContext = require('../../context/app-context');

var _appContext2 = _interopRequireDefault(_appContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */
var OasOperations = function (_React$Component) {
    _inherits(OasOperations, _React$Component);

    function OasOperations(props) {
        _classCallCheck(this, OasOperations);

        var _this = _possibleConstructorReturn(this, (OasOperations.__proto__ || Object.getPrototypeOf(OasOperations)).call(this, props));

        _this.state = {
            activeIndex: -1,
            showAddOperation: false
        };

        _this.handleOperationExpand = _this.handleOperationExpand.bind(_this);
        _this.handleShowAddOperation = _this.handleShowAddOperation.bind(_this);
        return _this;
    }

    /**
     * Click handler for accordion expand.
     * @param {Object} e event Object
     * @param {Object} titleProps accordion title props
     */


    _createClass(OasOperations, [{
        key: 'handleOperationExpand',
        value: function handleOperationExpand(e, titleProps) {
            var index = titleProps.index;
            var activeIndex = this.state.activeIndex;

            var newIndex = activeIndex === index ? -1 : index;

            this.setState({ activeIndex: newIndex });
        }

        /**
         * Event handler for show add resource form
         */

    }, {
        key: 'handleShowAddOperation',
        value: function handleShowAddOperation() {
            var showAddOperation = this.state.showAddOperation;

            this.setState({
                showAddOperation: !showAddOperation
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                oasOperations = _props.oasOperations,
                path = _props.path;
            var _state = this.state,
                activeIndex = _state.activeIndex,
                showAddOperation = _state.showAddOperation;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { size: 'mini', icon: true, labelPosition: 'left', onClick: this.handleShowAddOperation },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' }),
                    'Add Operation'
                ),
                showAddOperation && _react2.default.createElement(
                    _appContext2.default.Consumer,
                    null,
                    function (appContext) {
                        return _react2.default.createElement(_addOperation2.default, {
                            onAddOperation: appContext.onAddOperation,
                            oasJson: appContext.oasJson,
                            path: path
                        });
                    }
                ),
                Object.keys(oasOperations).length > 0 && _react2.default.createElement(
                    _semanticUiReact.Accordion,
                    { fluid: true },
                    oasOperations && Object.keys(oasOperations).map(function (operation, index) {
                        return _react2.default.createElement(
                            _appContext2.default.Consumer,
                            null,
                            function (appContext) {
                                return _react2.default.createElement(_operation2.default, {
                                    path: path,
                                    opType: operation,
                                    oasOp: oasOperations[operation],
                                    activeIndex: activeIndex,
                                    currIndex: index,
                                    handleExpand: _this2.handleOperationExpand,
                                    onDeleteOperation: appContext.onDeleteOperation
                                });
                            }
                        );
                    })
                )
            );
        }
    }]);

    return OasOperations;
}(_react2.default.Component);

OasOperations.prototypes = {
    oasOperations: _propTypes2.default.object.isRequired,
    path: _propTypes2.default.string.isRequired
};

exports.default = OasOperations;