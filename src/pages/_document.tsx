import { useToggleMenu } from "@/context/MenuContext";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { isMenuOpen } = useToggleMenu();
  return (
    <Html lang="en">
      <Head />
      <body className={`${isMenuOpen ? "no-scroll" : ""}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
