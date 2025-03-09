"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"

interface Image {
  src: string
  name: string
}

// 为 Window 接口添加 images 属性
declare global {
  interface Window {
    images: Image[]
    BingWallpaperDebug: any
  }
}

// 创建一个测试数据，以防 window.images 加载失败时使用
const TEST_IMAGES = [
  { src: siteConfig.images.placeholderImage, name: '图片加载失败' },
  { src: siteConfig.images.placeholderImage, name: '图片加载失败' },
  { src: siteConfig.images.placeholderImage, name: '图片加载失败' }
]

const debug = (window.BingWallpaperDebug || {
  log: () => {},
  error: () => {},
  warn: () => {},
  logImageLoading: () => {},
  logUrlConstruction: () => {}
});

export default function Gallery() {
  const [images, setImages] = useState<Image[]>([])
  const [visibleImages, setVisibleImages] = useState<Image[]>([])
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const imagesPerPage = 12

  // 调试函数，用于检查CDN URL构建
  useEffect(() => {
    if (siteConfig.images.useCDN && images.length > 0) {
      try {
        const testImage = images[0];
        const imgPath = testImage.src.replace("./images/", "/images/");
        const originNoProtocol = window.location.origin.replace(/^https?:\/\//, '');
        const cdnUrl = `${siteConfig.images.cdnBaseUrl}/${originNoProtocol}${imgPath}?w=${siteConfig.images.thumbnailSize}&quality=90&strip=all`;
        
        debug.logUrlConstruction("CDN URL调试：", {
          原图路径: testImage.src,
          处理后路径: imgPath,
          域名无协议: originNoProtocol,
          最终CDN_URL: cdnUrl
        });
      } catch (e) {
        debug.error("CDN URL调试失败:", e);
      }
    }
  }, [images]);

  // 直接加载script.js中的数据
  useEffect(() => {
    // 直接从脚本加载图片数据
    const loadImagesFromScript = () => {
      const script = document.createElement('script')
      script.src = '/script.js'
      script.async = false
      script.onload = () => {
        if (window.images && window.images.length > 0) {
          debug.logImageLoading(`加载到${window.images.length}张图片`);
          setImages(window.images)
          setVisibleImages(window.images.slice(0, imagesPerPage))
          setLoading(false)
        } else {
          setError("图片数据无法加载，请刷新页面")
          debug.error("图片数据为空");
          setImages(TEST_IMAGES)
          setVisibleImages(TEST_IMAGES)
          setLoading(false)
        }
      }
      script.onerror = () => {
        debug.error("脚本加载失败");
        setError("图片数据无法加载，请刷新页面")
        setImages(TEST_IMAGES)
        setVisibleImages(TEST_IMAGES)
        setLoading(false)
      }
      document.body.appendChild(script)
    }

    loadImagesFromScript()

    return () => {
      // 清理可能添加的脚本元素
      const scriptElements = document.querySelectorAll('script[src="/script.js"]')
      scriptElements.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      })
    }
  }, [imagesPerPage])

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setVisibleImages(images.slice(0, nextPage * imagesPerPage));
    debug.log("加载更多图片:", nextPage * imagesPerPage);
  }

  // 优化的URL转换函数，使用CDN和缩略图
  const getThumbnailUrl = (src: string) => {
    // 如果是测试图片，直接返回
    if (src === siteConfig.images.placeholderImage) return src
    
    try {
      // 处理相对路径
      const imgPath = src.replace("./images/", "/images/")
      
      // 如果配置使用CDN，则构建CDN URL
      if (siteConfig.images.useCDN) {
        try {
          // 构建URL但不包括协议和域名部分
          const originNoProtocol = window.location.origin.replace(/^https?:\/\//, '')
          // 正确格式化CDN URL
          return `${siteConfig.images.cdnBaseUrl}/${originNoProtocol}${imgPath}?w=${siteConfig.images.thumbnailSize}&quality=90&strip=all`
        } catch (e) {
          debug.warn("CDN URL构建失败，回退到本地路径", e)
          return imgPath
        }
      }
      
      // 不使用CDN，直接返回本地路径
      return imgPath
    } catch (e) {
      debug.error("URL处理失败", e)
      return siteConfig.images.placeholderImage
    }
  }

  // 获取预览大图URL
  const getPreviewUrl = (src: string) => {
    if (src === siteConfig.images.placeholderImage) return src
    
    try {
      const imgPath = src.replace("./images/", "/images/")
      
      if (siteConfig.images.useCDN) {
        try {
          const originNoProtocol = window.location.origin.replace(/^https?:\/\//, '')
          return `${siteConfig.images.cdnBaseUrl}/${originNoProtocol}${imgPath}?w=${siteConfig.images.previewSize}&quality=90`
        } catch (e) {
          console.warn("CDN URL构建失败，回退到本地路径", e)
          return imgPath
        }
      }
      
      return imgPath
    } catch (e) {
      console.error("URL处理失败", e)
      return siteConfig.images.placeholderImage
    }
  }
  
  // 获取原始图片URL
  const getOriginalUrl = (src: string) => {
    if (src === siteConfig.images.placeholderImage) return src
    return src.replace("./images/", "/images/")
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-1000">
      <ThemeToggle />
      
      <header className="py-16 text-center">
        <h1 className="font-xiaolai text-5xl mb-4 font-medium">Bing每日壁纸</h1>
        <p className="font-noto-serif-sc text-lg text-muted-foreground italic">每天发现世界的美</p>
      </header>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {loading && <div className="text-center py-4">正在加载图片数据...</div>}
        {error && <div className="text-center py-4 text-red-500">{error}</div>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/3]">
                  <Skeleton className="w-full h-full opacity-[0.05] animate-pulse" />
                </div>
              ))
            : visibleImages.map((image, index) => (
                <div
                  key={image.src + index}
                  className="group relative aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="absolute inset-1 md:inset-3 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={getThumbnailUrl(image.src)}
                      alt={image.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        debug.error(`图片加载失败: ${image.src}`, e);
                        const target = e.target as HTMLImageElement;
                        target.src = siteConfig.images.placeholderImage;
                      }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-background/80 to-transparent">
                      <div className="absolute bottom-0 p-4 w-full">
                        <p className="text-sm line-clamp-2 font-noto-serif-sc">{image.name}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -inset-4 bg-background/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{
                      background: `radial-gradient(circle at center, var(--glow-color, rgba(255,255,255,0.1)) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              ))}
        </div>

        {!loading && visibleImages.length < images.length && (
          <div className="flex justify-center mt-12 mb-16">
            <Button variant="outline" size="lg" onClick={loadMore} className="group bg-background/50 backdrop-blur-sm font-noto-serif-sc">
              加载更多
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-md border-border/50">
          <DialogTitle className="sr-only">
            {selectedImage?.name || "图片查看"}
          </DialogTitle>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 z-10 hover:bg-background/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {selectedImage && (
              <div className="space-y-4">
                <img
                  src={getPreviewUrl(selectedImage.src)}
                  alt={selectedImage.name}
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = siteConfig.images.placeholderImage;
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-noto-serif-sc">{selectedImage.name}</p>
                  <Button variant="outline" size="sm" className="shrink-0 font-noto-serif-sc" asChild>
                    <a href={getOriginalUrl(selectedImage.src)} download={selectedImage.name}>
                      <Download className="h-4 w-4 mr-2" />
                      下载原图
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p className="font-noto-serif-sc">
          Copyright ©{" "}
          <a href="https://rong6.cn" className="hover:text-foreground transition-colors">
            {siteConfig.creator}
          </a>{" "}
          All rights reserved.
        </p>
        <p className="font-noto-serif-sc">
            Powered by{" "}
            <a href="https://github.com/rong6/bing-wallpaper" className="hover:text-foreground transition-colors">
              bing-wallpaper
            </a>{" "}
        </p>
      </footer>
    </div>
  )
}

