import { render } from "@testing-library/react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

export const renderTheme = (children: DefaultTheme) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
