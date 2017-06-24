import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import FBox from '../src/FBox'
import Welcome from './Welcome';
import styled from 'styled-components'

const Child = styled.div`
  width: 50px;
  height: 50px;
  background-color: blue;
  border: 1px black solid;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChildAutoSize = styled(Child) `
  width: auto !important;
  height: auto !important;
  padding: 10px;
`

const background = 'lightblue'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('FBox', module)
  .add('flex-direction with column props', () => (
    <FBox column background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('flex-direction with row props', () => (
    <FBox row background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('flex-direction with columnReverse props', () => (
    <FBox columnReverse background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('flex-direction with rowReverse props', () => (
    <FBox rowReverse background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('justify-content with center props', () => (
    <FBox center background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('justify-content with flexStart props', () => (
    <FBox flexStart background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('justify-content with flexEnd props', () => (
    <FBox flexEnd background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('justify-content with baseline props', () => (
    <FBox baseline background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('justify-content with spaceBetween props', () => (
    <FBox spaceBetween background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('justify-content with spaceAround props', () => (
    <FBox spaceAround background={background}>
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('align-items with alignCenter props', () => (
    <FBox alignCenter background={background} height="200px;">
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('align-items with alignFlexStart props', () => (
    <FBox alignFlexStart background={background} height="200px;">
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('align-items with alignFlexEnd props', () => (
    <FBox alignFlexEnd background={background} height="200px;">
      <Child>1</Child>
      <Child>2</Child>
      <Child>3</Child>
      <Child>4</Child>
      <Child>5</Child>
    </FBox>
  ))
  .add('align-items with alignBaseline props', () => (
    <FBox alignBaseline background={background} height="200px;">
      <ChildAutoSize>1</ChildAutoSize>
      <ChildAutoSize>2</ChildAutoSize>
      <ChildAutoSize>3</ChildAutoSize>
      <ChildAutoSize>4</ChildAutoSize>
      <ChildAutoSize>5</ChildAutoSize>
    </FBox>
  ))
  .add('align-items with alignStretch props', () => (
    <FBox alignStretch background={background} height="200px;">
      <ChildAutoSize>1</ChildAutoSize>
      <ChildAutoSize>2</ChildAutoSize>
      <ChildAutoSize>3</ChildAutoSize>
      <ChildAutoSize>4</ChildAutoSize>
      <ChildAutoSize>5</ChildAutoSize>
    </FBox>
  ))
  .add('align-self with selfCenter, selfFlexStart, selfFlexEnd, selfBaseline and selfStretch props', () => (
    <FBox column align>
      Container has alignCenter
      <FBox alignCenter background={background} height="200px" width="1000px">
        <FBox selfCenter><ChildAutoSize>selfCenter</ChildAutoSize></FBox>
        <ChildAutoSize>No Self Align</ChildAutoSize>
        <FBox selfFlexStart><ChildAutoSize>selfFlexStart</ChildAutoSize></FBox>
        <ChildAutoSize>No Self Align</ChildAutoSize>
        <FBox selfFlexEnd><ChildAutoSize>selfFlexEnd</ChildAutoSize></FBox>
        <ChildAutoSize>No Self Align</ChildAutoSize>
        <FBox selfBaseline><ChildAutoSize>selfBaseline</ChildAutoSize></FBox>
        <ChildAutoSize>No Self Align</ChildAutoSize>
        <FBox selfStretch><ChildAutoSize>selfStretch</ChildAutoSize></FBox>
      </FBox>
    </FBox>
  ))
  .add('manipulate padding with p, pt, pr, pb and pl', () => (
    <FBox column width="600px">
      {'<FBox background="blue" width="60px" height="60px">'}
      <FBox background="blue" width="60px" height="60px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
      {'<FBox background="blue" width="60px" height="60px" p="10px">'}
      <FBox background="blue" width="60px" height="60px" p="10px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
      {'<FBox background="blue" width="60px" height="60px" pt="10px">'}
      <FBox background="blue" width="60px" height="60px" pt="10px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
      {'<FBox background="blue" width="60px" height="60px" pr="10px">'}
      <FBox background="blue" width="60px" height="60px" pr="10px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
      {'<FBox background="blue" width="60px" height="60px" pb="10px">'}
      <FBox background="blue" width="60px" height="60px" pb="10px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
      {'<FBox background="blue" width="60px" height="60px" pl="10px">'}
      <FBox background="blue" width="60px" height="60px" pl="10px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
      {'default padding to 10px but custom padding on right and bottom'}
      {'<FBox background="blue" width="60px" height="60px" p="10px" pr="20px" pb="30px">'}
      <FBox background="blue" width="60px" height="60px" p="10px" pr="20px" pb="30px">
        <FBox background="yellow" width="60px" height="60px" />
      </FBox>
    </FBox>
  ))
  .add('manipulate margin with m, mt, mr, mb and ml', () => (
    <FBox row width="400px" wrap background="pink">
      <FBox width="100px" height="100px" background="yellow" mr="10px">mr="10px"</FBox>
      <FBox width="100px" height="100px" background="yellow" mt="20px">mt="20px</FBox>
      <FBox width="100px" height="100px" background="yellow" ml="30px">ml="30px</FBox>
      <FBox width="100px" height="100px" background="yellow" mr="10px">mr="10px</FBox>
      <FBox width="100px" height="100px" background="yellow" m="10px">m="10px"</FBox>
      <FBox width="100px" height="100px" background="yellow" m="10px" mb="30px">m="10px" mb="30px"</FBox>
      <FBox width="100px" height="100px" background="yellow" mt="70px">mt="70px"</FBox>
      <FBox width="100px" height="100px" background="yellow" mt="60px" ml="15px">mt="60px" ml="15px"</FBox>
      <FBox width="100px" height="100px" background="yellow" ml="30px" mt="60px" mb="20px">ml="30px" mt="60px" mb="20px"</FBox>
    </FBox>
  ))
  .add('flex-grow with grow1 grow2 grow3 grow4 grow5 props', () => (
    <FBox column>
      <FBox background={background}>
        <FBox p="10px">no grow</FBox>
        <FBox p="10px" grow1 background='red'>with grow1 props</FBox>
        <FBox p="10px">no grow</FBox>
      </FBox>
      <FBox background={background} mt="20px">
        <FBox p="10px" grow2>with grow2 props</FBox>
        <FBox p="10px" grow1 background='red'>with grow1 props</FBox>
        <FBox p="10px" grow2>with grow2 props</FBox>
      </FBox>
      <FBox background={background} mt="20px">
        <FBox p="10px" grow1>with grow1 props</FBox>
        <FBox p="10px" grow2 background='red'>with grow2 props</FBox>
        <FBox p="10px" grow3 background='pink'>with grow3 props</FBox>
        <FBox p="10px" grow4 background='yellow'>with grow4 props</FBox>
        <FBox p="10px" grow5 background='blue'>with grow5 props</FBox>
      </FBox>
      <FBox background={background} mt="20px">
        <FBox p="10px" grow1>with grow1 props</FBox>
        <FBox p="10px" grow3 background='red'>with grow3 props</FBox>
      </FBox>
    </FBox>
  ))
  .add('flex-shrink with shrink1 shrink2 shrink3 shrink4 shrink5 props', () => (
    <FBox column>
      <FBox background={background}>
        <FBox p="10px">no shrink</FBox>
        <FBox p="10px" shrink1 background='red'>with shrink1 props</FBox>
        <FBox p="10px">no shrink</FBox>
      </FBox>
      <FBox background={background} mt="20px">
        <FBox p="10px" shrink2>with shrink2 props</FBox>
        <FBox p="10px" shrink1 background='red'>with shrink1 props</FBox>
        <FBox p="10px" shrink2>with shrink2 props</FBox>
      </FBox>
      <FBox background={background} mt="20px">
        <FBox p="10px" shrink1>with shrink1 props</FBox>
        <FBox p="10px" shrink2 background='red'>with shrink2 props</FBox>
        <FBox p="10px" shrink3 background='pink'>with shrink3 props</FBox>
        <FBox p="10px" shrink4 background='yellow'>with shrink4 props</FBox>
        <FBox p="10px" shrink5 background='blue'>with shrink5 props</FBox>
      </FBox>
      <FBox background={background} mt="20px">
        <FBox p="10px" shrink1>with shrink1 props</FBox>
        <FBox p="10px" shrink3 background='red'>with shrink3 props</FBox>
      </FBox>
    </FBox>
  ))
  .add('flex-wrap with wrap, nowrap, wrapReverse props', () => (
    <FBox column>
      nowrap (default)
    <FBox background={background} width="200px;" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
        <Child>10</Child>
      </FBox>
      wrap
    <FBox wrap background={background} width="200px;" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
        <Child>10</Child>
      </FBox>
      wrapReverse
    <FBox wrapReverse background={background} width="200px;" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
        <Child>10</Child>
      </FBox>
    </FBox>
  ))
  .add('align-content with wrap, nowrap, wrapReverse props', () => (
    <FBox column>
      contentCenter
    <FBox wrap contentCenter background={background} width="200px;" height="300px" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
      </FBox>
      contentFlexStart
    <FBox wrap contentFlexStart background={background} width="200px;" height="300px" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
      </FBox>
      contentFlexEnd
    <FBox wrap contentFlexEnd background={background} width="200px;" height="300px" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
      </FBox>
      contentBaseline
    <FBox wrap contentBaseline background={background} width="200px;" height="300px" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
      </FBox>
      contentSpaceBetween
    <FBox wrap contentSpaceBetween background={background} width="200px;" height="300px" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
      </FBox>
      contentSpaceAround
    <FBox wrap contentSpaceAround background={background} width="200px;" height="300px" m="10px">
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
        <Child>4</Child>
        <Child>5</Child>
        <Child>6</Child>
        <Child>7</Child>
        <Child>8</Child>
        <Child>9</Child>
      </FBox>
    </FBox>
  ))
storiesOf('Simple Use Case', module)
  .add('Header', () => (
    <FBox column background="lightgrey" alignStretch>
      <FBox row spaceBetween>
        <FBox background="blue" p="10px">Logo</FBox>
        <FBox background="yellow" p="10px" pl="50px" grow1>Title</FBox>
        <FBox background="green" p="10px">Current User</FBox>
      </FBox>
      <pre>
        {`
          <FBox row spaceBetween>
            <FBox background="blue" p="10px">Logo</FBox>
            <FBox background="yellow" p="10px" pl="50px" grow1>Title</FBox>
            <FBox background="green" p="10px">Current User</FBox>
          </FBox>
        `}
      </pre>
    </FBox>
  ))
  .add('Center Child', () => (
    <FBox column>
      <FBox width="400px" height="300px" background="pink" alignCenter center>
        <FBox width="100px" height="70px" background="blue" p="10px">Logo</FBox>
      </FBox>
      <pre>
        {`
          <FBox width="400px" height="300px" background="pink" alignCenter center>
            <FBox width="100px" height="70px" background="blue" p="10px">Logo</FBox>
          </FBox>
        `}
      </pre>
    </FBox>
  ))
  .add('Comment', () => (
    <FBox column>
      <FBox row width="300px" height="100px" background="pink" >
        <FBox center alignCenter width="50px">
          <FBox background="red" p="10px">
            Pic
          </FBox>
        </FBox>
        <FBox column background="yellow" grow1 p="10px">
          <FBox row spaceBetween mb="10px">
            <FBox>#10</FBox>
            <FBox>2017-06-23</FBox>
            <FBox>username</FBox>
          </FBox>
          <FBox>
            CommentCommentComment
          </FBox>
        </FBox>
      </FBox>
      <pre>
        {`
          <FBox row width="300px" height="100px" background="pink" >
            <FBox center alignCenter width="50px">
              <FBox background="red" p="10px">
                Pic
              </FBox>
            </FBox>
            <FBox column background="yellow" grow1 p="10px">
              <FBox row spaceBetween mb="10px">
                <FBox>#10</FBox>
                <FBox>2017-06-23</FBox>
                <FBox>username</FBox>
              </FBox>
              <FBox>
                CommentCommentComment
              </FBox>
            </FBox>
          </FBox>
        `}
      </pre>
    </FBox>
  ))




