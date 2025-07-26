'use client';
import React from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const  ThemeSetting = () => {
  const { setTheme, theme } = useTheme();
  const [settingOpen, setSettingOpen] = React.useState(false);

  console.log('theme', theme);

  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
  };
  return (
    <>
      {/* Theme settings buttons and SVG elements removed */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false
})
