import { colorsTuple, createTheme } from "@mantine/core";

export const mantineTheme = createTheme({
  fontFamily: "Ubuntu, sans-serif",
  colors: {
    custom: colorsTuple("#333333"),
  },
  primaryColor: "custom",
});
