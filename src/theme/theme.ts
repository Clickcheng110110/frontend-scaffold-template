import { extendTheme } from "@chakra-ui/react";

import { styles } from "./style";

const themeConfig = {
  colors: {
    black: {
      "600": "rgba(24, 23, 39, 0.7)",
      "500": "rgba(24, 23, 39, 1)",
      "100": "rgba(24, 23, 39, 1)",
      "70": "rgba(24, 23, 39, 0.7)",
      "60": "rgba(0, 0, 0, 0.6)",
      "30": "rgba(0, 0, 0, 0.3)",
      "40": "rgba(0, 0, 0, 0.4)",
      "20": "rgba(0,0,0,0.2)",
      "3": "rgba(0,0,0,0.03)",
    },
    white: {
      "100": "#ffffff",
      "70": "rgba(255, 255, 255, 0.7)",
      "60": "rgba(255, 255, 255, 0.6)",
      "30": "rgba(255, 255, 255, 0.3)",
      "40": "rgba(255, 255, 255, 0.4)",
      "20": "rgba(255, 255, 255, 0.2)",
      "10": "rgba(255, 255, 255, 0.1)",
      "3": "rgba(255, 255, 255, 0.03)",
    },
  },
  breakpoints: {
    sm: "375px",
    md: "768px",
    lg: "960px",
    xl: "1440px",
  },

  styles: styles,
  textStyle: {
    text: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "22px",
    },
    normal: {
      // you can also use responsive styles
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "24px",
    },
  },
};

// const config = {};

export const theme = extendTheme(themeConfig);
