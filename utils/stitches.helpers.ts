import { theme } from "../stitches.config";

type Theme = typeof theme;
type TokenKey = keyof Theme;

export const tokensToProps = <P extends string, T extends TokenKey>(
  prop: P,
  tokenKey: T,
  getStyles: (token: string) => any
) =>
  Object.values(theme[tokenKey]).reduce(
    (acc, { token }) => {
      // @ts-ignore
      acc[prop][token] = getStyles(`$${token}`);
      return acc;
    },
    { [prop]: {} } as {
      [prop in P]: { [token in keyof Theme[T]]: any };
    }
  );
