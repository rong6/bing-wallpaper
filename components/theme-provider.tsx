"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    // 添加主题切换监听
    const handleThemeChange = () => {
      document.documentElement.classList.add('theme-transition');
      
      // 添加淡入效果
      const body = document.body;
      body.classList.add('theme-fade-in');
      
      // 延迟后移除过渡类
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
        body.classList.remove('theme-fade-in');
      }, 1000);
    };
    
    // 监听主题变化事件
    window.addEventListener('themeChange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

