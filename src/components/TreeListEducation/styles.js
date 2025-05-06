import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Container = styled('div')`
//   width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
//   font-family: ui-monospace, monospace;
//   font-size: 18px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex:1;
`

export const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color:rgb(255, 255, 255);
  fill:rgb(209, 209, 209);
`

export const Title = styled('span')`
  vertical-align: middle;
`

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}

export const List = styled('li')`
     font-weight: 100;
    font-size: 14px;
    /* width: 250px; */
    // font-family: ui-monospace, monospace;
    width: 250px;
    overflow-wrap: break-word;
    white-space: normal;
        margin-bottom: 10px;
       list-style: square inside;
           color: #b0acac;
`
