export const siteConfig = {
  name: "Bing每日壁纸",
  description: "每天发现世界的美",
  // 图片加载设置
  images: {
    // 是否使用CDN
    useCDN: true,
    // CDN基本URL
    cdnBaseUrl: "https://i0.wp.com",
    // 缩略图尺寸
    thumbnailSize: 600,
    // 查看大图尺寸
    previewSize: 1200,
    // 加载失败占位图
    placeholderImage: "/placeholder.svg"
  },
  // 调试设置
  debug: {
    // 是否启用调试模式
    enabled: true, // 启用调试，找出问题所在
    // 是否记录图片加载情况
    logImageLoading: true,
    // 是否在控制台输出URL构建信息
    logUrlConstruction: true,
    // 是否检查资源可用性
    checkAssets: true
  },
  // 主题
  theme: {
    // 主题切换动画持续时间(毫秒)
    transitionDuration: 300
  },
  // 网站元数据
  creator: "Rong6",
  url: "https://rong6.cn"
}
