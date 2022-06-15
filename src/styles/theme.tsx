export type ColorsType = 'primary' | 'secundary' | 'black' | 'white' | 'red';
export type GutterType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type FontSizeType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl';
export type FontWeightType =
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export const Theme = {
  colors: {
    primary: '#712eee',
    secundary: '#e2dd35',
    white: '#f6f6f6',
    gray: '#c3c3c3',
    black: '#14131d',
    red: '#f23131',
  },
  gutter: {
    sm: '12px',
    md: '24px',
    lg: '32px',
    xl: '46px',
  },
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
    xxxl: '36px',
    xxxxl: '48px',
    xxxxxl: '56px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
};
