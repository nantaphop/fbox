import styled from 'styled-components'

const toAttr = (attr) => (propsName, attrValue) => props => (props[propsName] && `${attr}: ${attrValue ? attrValue : propsName};`)
const useAttrIfPropsExist = propsName => props => (props[propsName] && `${propsName}: ${props[propsName]};`)
const useAttrIfProxyPropsExist = (propsName, attr) => props => (props[propsName] && `${attr}: ${props[propsName]};`)

const flexDirection = toAttr('flex-direction')
const justifyContent = toAttr('justify-content')
const alignItems = toAttr('align-items')
const alignSelf = toAttr('align-self')
const alignContent = toAttr('align-content')
const flexGrow = toAttr('flex-grow')
const flexShrink = toAttr('flex-shrink')
const flexWrap = toAttr('flex-wrap')


const FBox = styled.div`
    display: flex;
    ${flexDirection('column')}
    ${flexDirection('columnReverse', 'column-reverse')}
    ${flexDirection('row')}
    ${flexDirection('rowReverse', 'row-reverse')}
    ${justifyContent('center')}
    ${justifyContent('flexStart', 'flex-start')}
    ${justifyContent('flexEnd', 'flex-end')}
    ${justifyContent('baseline')}
    ${justifyContent('spaceBetween', 'space-between')}
    ${justifyContent('spaceAround', 'space-around')}
    ${alignContent('contentCenter', 'center')}
    ${alignContent('contentFlexStart', 'flex-start')}
    ${alignContent('contentFlexEnd', 'flex-end')}
    ${alignContent('contentBaseline', 'baseline')}
    ${alignContent('contentSpaceBetween', 'space-between')}
    ${alignContent('contentSpaceAround', 'space-around')}
    ${alignItems('alignCenter', 'center')}
    ${alignItems('alignFlexStart', 'flex-start')}
    ${alignItems('alignFlexEnd', 'flex-end')}
    ${alignItems('alignBaseline', 'baseline')}
    ${alignItems('alignStretch', 'stretch')}
    ${alignSelf('selfCenter', 'center')}
    ${alignSelf('selfFlexStart', 'flex-start')}
    ${alignSelf('selfFlexEnd', 'flex-end')}
    ${alignSelf('selfBaseline', 'baseline')}
    ${alignSelf('selfStretch', 'stretch')}
    ${flexGrow('grow1', '1')}
    ${flexGrow('grow2', '2')}
    ${flexGrow('grow3', '3')}
    ${flexGrow('grow4', '4')}
    ${flexGrow('grow5', '5')}
    ${flexGrow('shrink1', '1')}
    ${flexGrow('shrink2', '2')}
    ${flexGrow('shrink3', '3')}
    ${flexGrow('shrink4', '4')}
    ${flexGrow('shrink5', '5')}
    ${flexWrap('wrap')}
    ${flexWrap('nowrap')}
    ${flexWrap('wrapReverse', 'wrap-reverse')}
    ${useAttrIfPropsExist('background')}
    ${useAttrIfPropsExist('width')}
    ${useAttrIfPropsExist('height')}
    ${useAttrIfProxyPropsExist('p', 'padding')}
    ${useAttrIfProxyPropsExist('pt', 'padding-top')}
    ${useAttrIfProxyPropsExist('pr', 'padding-right')}
    ${useAttrIfProxyPropsExist('pb', 'padding-bottom')}
    ${useAttrIfProxyPropsExist('pl', 'padding-left')}
    ${useAttrIfProxyPropsExist('m', 'margin')}
    ${useAttrIfProxyPropsExist('mt', 'margin-top')}
    ${useAttrIfProxyPropsExist('mr', 'margin-right')}
    ${useAttrIfProxyPropsExist('mb', 'margin-bottom')}
    ${useAttrIfProxyPropsExist('ml', 'margin-left')}
`

export default FBox