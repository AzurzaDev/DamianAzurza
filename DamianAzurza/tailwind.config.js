
/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    darkMode: 'selector',
    colors: {
      boton: "#636363", 
      secondary: "#6b7280",
      customBlue: "#445868",
      customRed: "#6b4946",
      customGreen: "#0f766e",
      customYellow: "#7c775f",
      customPurple: "#0f766e",
      customPink: "#059669",
      textWhite: "white",
      footer: "#49465a",
     fondoServicios:"#636363",
     fondoMas:"#D9D9D9",
     fondoClaro:"#EBEBEB",
     fondoIconos:"#DADADA",
     iconos:"#595959",
     fondoClarito:"#FAFAFA"

    },
    fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'], // Definir la fuente Nunito
        architects: ['Architects Daughter', 'sans-serif'],
      },
  },
};
export const plugins = [];

