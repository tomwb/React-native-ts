import { View } from 'react-native';
import styled, { css } from 'styled-components';
import { GutterType, ColorsType } from '../theme';

type AlignItemsType = 'center' | 'start' | 'end';
type JustifyContentType =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around';

type ColumnType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

interface CustomViewProps {
  full?: boolean;
  grid?: boolean;
  color?: ColorsType;
  column?: ColumnType;
  marginTop?: GutterType;
  marginBottom?: GutterType;
  marginLeft?: GutterType;
  marginRight?: GutterType;
  paddingTop?: GutterType;
  paddingBottom?: GutterType;
  paddingLeft?: GutterType;
  paddingRight?: GutterType;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
}

export const CustomView = styled(View).attrs((props: CustomViewProps) => ({
  full: props.full,
  grid: props.grid,
  color: props.color,
  column: props.column,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
}))`
  ${props => {
    // width
    if (props.column) {
      return css`
        width: ${((parseFloat(props.column) / 12) * 100).toFixed(2)}%;
      `;
    }
    return null;
  }};

  ${props => {
    // bg color
    if (props.color && props.theme.colors[props.color]) {
      return css`
        background-color: ${props.theme.colors[props.color]};
      `;
    }
    return null;
  }};

  ${props => {
    // grid
    if (props.grid) {
      return css`
        flex-direction: row;
        flex-wrap: wrap;
      `;
    }
    return null;
  }};

  ${props => {
    // full
    if (props.full) {
      return css`
        flex: 1;
      `;
    }
    return null;
  }};

  ${props => {
    // justifyContent
    if (props.justifyContent) {
      return css`
        justify-content: ${props.justifyContent};
      `;
    }
    return null;
  }};

  ${props => {
    // alignItems
    if (props.alignItems) {
      return css`
        align-items: ${props.alignItems};
      `;
    }
    return null;
  }};

  ${props => {
    // margin top
    if (props.marginTop && props.theme.gutter[props.marginTop]) {
      return css`
        margin-top: ${props.theme.gutter[props.marginTop]};
      `;
    }
    return null;
  }};
  ${props => {
    // margin bottom
    if (props.marginBottom && props.theme.gutter[props.marginBottom]) {
      return css`
        margin-bottom: ${props.theme.gutter[props.marginBottom]};
      `;
    }
    return null;
  }};
  ${props => {
    // margin left
    if (props.marginLeft && props.theme.gutter[props.marginLeft]) {
      return css`
        margin-left: ${props.theme.gutter[props.marginLeft]};
      `;
    }
    return null;
  }};
  ${props => {
    // margin right
    if (props.marginRight && props.theme.gutter[props.marginRight]) {
      return css`
        margin-right: ${props.theme.gutter[props.marginRight]};
      `;
    }
    return null;
  }};

  ${props => {
    // padding top
    if (props.paddingTop && props.theme.gutter[props.paddingTop]) {
      return css`
        padding-top: ${props.theme.gutter[props.paddingTop]};
      `;
    }
    return null;
  }};
  ${props => {
    // padding bottom
    if (props.paddingBottom && props.theme.gutter[props.paddingBottom]) {
      return css`
        padding-bottom: ${props.theme.gutter[props.paddingBottom]};
      `;
    }
    return null;
  }};
  ${props => {
    // padding left
    if (props.paddingLeft && props.theme.gutter[props.paddingLeft]) {
      return css`
        padding-left: ${props.theme.gutter[props.paddingLeft]};
      `;
    }
    return null;
  }};
  ${props => {
    // padding right
    if (props.paddingRight && props.theme.gutter[props.paddingRight]) {
      return css`
        padding-right: ${props.theme.gutter[props.paddingRight]};
      `;
    }
    return null;
  }};
`;
