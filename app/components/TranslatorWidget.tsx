"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function TranslateWidget() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr", "fa"],
      wrapper_selector: ".gtranslate_wrapper",
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper" />
      <Script
        src="https://cdn.gtranslate.net/widgets/latest/float.js"
        strategy="afterInteractive"
      />
    </>
  );
}