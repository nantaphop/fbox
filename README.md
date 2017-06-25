# FBox
Flexbox Component for Reactjs. Powered by Styled-Components.

# Motivation
Flexbox is really powerful but it have to write so many css style. Moreover, we have to write a lot of boilerplate code to set the layout of our component for example FBox will turn following boilerplate style to something more sugar! 
```
display: flex;
flex-direction: row;
justify-content: center;
alignItems: center;
padding: 10px;
```

with FBox you can just write...

```
<FBox center alignCenter p="10px">.....</FBox>
```

# Installation
```
npm install --save fbox
```
# Usage
```
import FBox from 'fbox'
...
...
<FBox alignCenter center p="10px">
    ....Your contents...
</FBox>
```
Noted: Usually, you will have to use nested FBox together to create a layout.

# Example

please check `/stories/index.js` for example usage. You also use `npm run storybook` to run the sample on your machine.

# Props

Props that is Boolean type you just have to add props name to FBox like this `<FBox center alignCenter>...</FBox>`

Props that is string type you have to add value to FBox like this `<FBox background="red" p="10px" ml="2em">...</FBox>`

|Prop Type| Prop Name | Generate CSS |
|---------|-----------|---------------|
| Boolean | column   | flex-direction: column;
| Boolean | columnReverse | flex-direction: column-reverse; 
| Boolean | row |  flex-direction: row; 
| Boolean | rowReverse |  flex-direction: row-reverse; 
| Boolean | center |  justify-content: column-reverse; 
| Boolean | flexStart |  justify-content: column-reverse; 
| Boolean | flexEnd | justify-content: flex-end;
| Boolean | baseline | justify-content: baseline;
| Boolean | spaceBetween | justify-content: space-between;
| Boolean | spaceAround | justify-content: space-around;
| Boolean | contentCenter | align-content: content-center;
| Boolean | contentFlexStart | align-content: flex-start;
| Boolean | contentFlexEnd | align-content: flex-end;
| Boolean | contentBaseline | align-content: baseline;
| Boolean | contentSpaceBetween | align-content: space-between;
| Boolean | contentSpaceAround | align-content: space-around;
| Boolean | alignCenter | align-items: center;
| Boolean | alignFlexStart | align-items: flex-start;
| Boolean | alignFlexEnd | align-items: flex-end;
| Boolean | alignBaseline | align-items: baseline;
| Boolean | alignStretch | align-items: stretch;
| Boolean | selfCenter | align-self: center;
| Boolean | selfFlexStart | align-self: flex-start;
| Boolean | selfFlexEnd | align-self: flex-end;
| Boolean | selfBaseline | align-self: baseline;
| Boolean | selfStretch | align-self: stretch;
| Boolean | grow1 | flex-grow: 1;
| Boolean | grow2 | flex-grow: 2;
| Boolean | grow3 | flex-grow: 3;
| Boolean | grow4 | flex-grow: 4;
| Boolean | grow5 | flex-grow: 5;
| Boolean | shrink1 | flex-shrink: 1;
| Boolean | shrink2 | flex-shrink: 2;
| Boolean | shrink3 | flex-shrink: 3;
| Boolean | shrink4 | flex-shrink: 4;
| Boolean | shrink5 | flex-shrink: 5;
| Boolean | wrap | flex-wrap: wrap;
| Boolean | nowrap | flex-wrap: nowrap;
| Boolean | wrapReverse | flex-wrap: wrap-reverse;
| string | background | background: ____;
| string | width | width: ____;
| string | height | height: ____;
| string | p | padding: ____;
| string | pt | padding-top: ____;
| string | pr | padding-right: ____;
| string | pb | padding-bottom: ____;
| string | pl | padding-left: ____;
| string | m | margin: ____;
| string | mt | margin-top: ____;
| string | mr | margin-right: ____;
| string | mb | margin-bottom: ____;
| string | ml | margin-left: ____;















