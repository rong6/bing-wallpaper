"use client"

import { useEffect } from "react"

export default function ScriptLoader() {
  useEffect(() => {
    console.log("ScriptLoader: 开始加载脚本")
    
    // 检查是否已经存在
    if (window.images) {
      console.log("ScriptLoader: window.images 已存在，无需重新加载")
      window.dispatchEvent(new Event('imagesLoaded'))
      return
    }
    
    // 简单地加载脚本并触发事件
    const script = document.createElement('script')
    script.src = '/script.js'
    script.async = false // 修改为同步加载，确保执行完成
    
    // 脚本加载完成后触发自定义事件
    script.onload = () => {
      console.log("ScriptLoader: 脚本加载完成", window.images ? `发现${window.images.length}张图片` : "未找到图片数据")
      
      // 手动将 window.images 初始化为空数组（如果未定义）
      if (!window.images) {
        console.warn("ScriptLoader: window.images 未定义，创建空数组")
        window.images = []
      }
      
      window.dispatchEvent(new Event('imagesLoaded'))
    }
    
    script.onerror = (error) => {
      console.error("ScriptLoader: 脚本加载失败", error)
      // 即使失败也创建一个空数组，避免报错
      window.images = []
      window.dispatchEvent(new Event('imagesLoaded'))
    }
    
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return <div suppressHydrationWarning style={{ display: 'none' }} />
}