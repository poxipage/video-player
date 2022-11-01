//Install tailwindcss
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("daisyui"), 
    require("@tailwindcss/typography"), 
    require("tailwind-scrollbar-hide"),
  ],
  daisyui:{
    themes:false,
  }
};
