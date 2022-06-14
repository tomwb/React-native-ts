import { View } from 'react-native';
import styled, { css } from 'styled-components';
import { GutterType } from '../theme';

type AlignItemsType = 'center' | 'start' | 'end';
type JustifyContentType =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around';

interface CustomViewProps {
  full?: boolean;
  margin?: GutterType;
  marginTop?: GutterType;
  marginBottom?: GutterType;
  marginLeft?: GutterType;
  marginRight?: GutterType;
  padding?: GutterType;
  paddingTop?: GutterType;
  paddingBottom?: GutterType;
  paddingLeft?: GutterType;
  paddingRight?: GutterType;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
}

export const CustomView = styled(View).attrs((props: CustomViewProps) => ({
  full: props.full,
  margin: props.margin,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
  padding: props.padding,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
  paddingRight: props.paddingRight,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
}))`
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
    // --------- margin ----------
    // margin
    if (props.margin && props.theme.gutter[props.margin]) {
      return css`
        margin: ${props.theme.gutter[props.margin]};
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
    // --------- pading ----------
    // padding
    if (props.padding && props.theme.gutter[props.padding]) {
      return css`
        padding: ${props.theme.gutter[props.padding]};
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
