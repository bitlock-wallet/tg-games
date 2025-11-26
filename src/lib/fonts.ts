import localFont from "next/font/local";

export const ClashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  display: "swap",
  weight: "100 900",
  style: "normal",
});

export default ClashDisplay;
