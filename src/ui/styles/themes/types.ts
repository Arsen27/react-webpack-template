type TColors = Record<string, string | string[]>;

export type TTheme = {
  name: string;
  colors: {
    text: TColors;
    accent: TColors;
    bg: TColors;
    border: TColors;
  };
};
