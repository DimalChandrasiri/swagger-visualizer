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

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _addResource = require('./add-resource');

var _addResource2 = _interopRequireDefault(_addResource);

var _appContext = require('../../context/app-context');

var _appContext2 = _interopRequireDefault(_appContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wrapper component to map resources in
 * swagger JSON.
 */
var OasResources = function (_React$Component) {
    _inherits(OasResources, _React$Component);

    /**
     * Constructor
     * @param {Object} props props object
     */
    function OasResources(props) {
        _classCallCheck(this, OasResources);

        var _this = _possibleConstructorReturn(this, (OasResources.__proto__ || Object.getPrototypeOf(OasResources)).call(this, props));

        _this.state = {
            activeIndex: -1,
            showAddResource: false
        };

        _this.handleResourceExpand = _this.handleResourceExpand.bind(_this);
        _this.handleShowAddResource = _this.handleShowAddResource.bind(_this);
        return _this;
    }

    /**
     * Event handler for resource component expand
     * @param {Object} e click event
     * @param {Object} titleProps Accordion title props
     */


    _createClass(OasResources, [{
        key: 'handleResourceExpand',
        value: function handleResourceExpand(e, titleProps) {
            var index = titleProps.index;
            var activeIndex = this.state.activeIndex;

            var newIndex = activeIndex === index ? -1 : index;

            this.setState({ activeIndex: newIndex });
        }

        /**
         * Event handler for show add resource form
         */

    }, {
        key: 'handleShowAddResource',
        value: function handleShowAddResource() {
            var showAddResource = this.state.showAddResource;

            this.setState({
                showAddResource: !showAddResource
            });
        }

        /**
         * Render Method
         * @returns {ReactElement} Resource element
         */
        /* eslint-disable */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var resObj = this.props.resObj;
            var _state = this.state,
                activeIndex = _state.activeIndex,
                showAddResource = _state.showAddResource;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _semanticUiReact.Button,
                    { size: 'mini', icon: true, labelPosition: 'left', onClick: this.handleShowAddResource },
                    _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' }),
                    'Add Resource'
                ),
                showAddResource && _react2.default.createElement(
                    _appContext2.default.Consumer,
                    null,
                    function (appContext) {
                        return _react2.default.createElement(_addResource2.default, { onAddResource: appContext.onAddResource });
                    }
                ),
                resObj && Object.keys(resObj).length > 0 && _react2.default.createElement(
                    _semanticUiReact.Accordion,
                    { className: 'resource-container', fluid: true },
                    resObj && Object.keys(resObj).map(function (resource, index) {
                        return _react2.default.createElement(_resource2.default, {
                            resPath: resource,
                            oasOps: resObj[resource],
                            activeIndex: activeIndex,
                            currIndex: index,
                            handleExpand: _this2.handleResourceExpand
                        });
                    })
                )
            );
        }
    }]);

    return OasResources;
}(_react2.default.Component);

OasResources.prototypes = {
    resObj: _propTypes2.default.object.isRequired
};

exports.default = OasResources;