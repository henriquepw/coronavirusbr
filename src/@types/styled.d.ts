import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      active: string;
      activeDark: string;
      backgound: string;
      primaryText: string;
      secundaryBackgound: string;
    };
  }
}
