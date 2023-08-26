import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      body: ["Lato", "sans-serif"],
      heading: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        carolinaBlue: "#74B3CE",
        blue: "#508991",
        prussianBlue: "#172A3A",
        midnightGreen: "#004346",
        mint: "#09BC8A",
      }
    }
  }
} as Options;
