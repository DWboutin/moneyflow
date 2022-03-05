export const baseFontSize = 16;
export const toREM = (sizePixel: number, withUnit = true): string | number => {
  const result = sizePixel / baseFontSize;

  if (!withUnit) {
    return result;
  }

  return `${result}rem`;
};

export const fontFamily = `'Lexend Deca', sans-serif`;

export const fontSizes = {
  h1: toREM(36),
  h2: toREM(24),
  h3: toREM(24),
  large: toREM(18),
  normal: toREM(14),
  small: toREM(12),
  xsmall: toREM(11),
  caption: toREM(10),
};
