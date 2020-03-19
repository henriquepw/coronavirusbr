import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      active: string;
      activeDark: string;
      background: string;
      primaryText: string;
      secundaryBackground: string;
    };
  }
}
