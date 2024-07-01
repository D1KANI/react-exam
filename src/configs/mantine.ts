import { colorsTuple, createTheme } from "@mantine/core";

export const mantineTheme = createTheme({
  fontFamily: "Ubuntu, sans-serif",
  colors: {
    custom: colorsTuple("#333333"),
    text: colorsTuple("#222222"),
  },
  primaryColor: "custom",
});
