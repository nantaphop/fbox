'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n'], ['\n    display: flex;\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var toAttr = function toAttr(attr) {
    return function (propsName, attrValue) {
        return function (props) {
            return props[propsName] && attr + ': ' + (attrValue ? attrValue : propsName) + ';';
        };
    };
};
var useAttrIfPropsExist = function useAttrIfPropsExist(propsName) {
    return function (props) {
        return props[propsName] && propsName + ': ' + props[propsName] + ';';
    };
};
var useAttrIfProxyPropsExist = function useAttrIfProxyPropsExist(propsName, attr) {
    return function (props) {
        return props[propsName] && attr + ': ' + props[propsName] + ';';
    };
};

var flexDirection = toAttr('flex-direction');
var justifyContent = toAttr('justify-content');
var alignItems = toAttr('align-items');
var alignSelf = toAttr('align-self');
var alignContent = toAttr('align-content');
var flexGrow = toAttr('flex-grow');
var flexShrink = toAttr('flex-shrink');
var flexWrap = toAttr('flex-wrap');

var FBox = _styledComponents2.default.div(_templateObject, flexDirection('column'), flexDirection('columnReverse', 'column-reverse'), flexDirection('row'), flexDirection('rowReverse', 'row-reverse'), justifyContent('center'), justifyContent('flexStart', 'flex-start'), justifyContent('flexEnd', 'flex-end'), justifyContent('baseline'), justifyContent('spaceBetween', 'space-between'), justifyContent('spaceAround', 'space-around'), alignContent('contentCenter', 'center'), alignContent('contentFlexStart', 'flex-start'), alignContent('contentFlexEnd', 'flex-end'), alignContent('contentBaseline', 'baseline'), alignContent('contentSpaceBetween', 'space-between'), alignContent('contentSpaceAround', 'space-around'), alignItems('alignCenter', 'center'), alignItems('alignFlexStart', 'flex-start'), alignItems('alignFlexEnd', 'flex-end'), alignItems('alignBaseline', 'baseline'), alignItems('alignStretch', 'stretch'), alignSelf('selfCenter', 'center'), alignSelf('selfFlexStart', 'flex-start'), alignSelf('selfFlexEnd', 'flex-end'), alignSelf('selfBaseline', 'baseline'), alignSelf('selfStretch', 'stretch'), flexGrow('grow1', '1'), flexGrow('grow2', '2'), flexGrow('grow3', '3'), flexGrow('grow4', '4'), flexGrow('grow5', '5'), flexGrow('shrink1', '1'), flexGrow('shrink2', '2'), flexGrow('shrink3', '3'), flexGrow('shrink4', '4'), flexGrow('shrink5', '5'), flexWrap('wrap'), flexWrap('nowrap'), flexWrap('wrapReverse', 'wrap-reverse'), useAttrIfPropsExist('background'), useAttrIfPropsExist('width'), useAttrIfPropsExist('height'), useAttrIfProxyPropsExist('p', 'padding'), useAttrIfProxyPropsExist('pt', 'padding-top'), useAttrIfProxyPropsExist('pr', 'padding-right'), useAttrIfProxyPropsExist('pb', 'padding-bottom'), useAttrIfProxyPropsExist('pl', 'padding-left'), useAttrIfProxyPropsExist('m', 'margin'), useAttrIfProxyPropsExist('mt', 'margin-top'), useAttrIfProxyPropsExist('mr', 'margin-right'), useAttrIfProxyPropsExist('mb', 'margin-bottom'), useAttrIfProxyPropsExist('ml', 'margin-left'));

exports.default = FBox;