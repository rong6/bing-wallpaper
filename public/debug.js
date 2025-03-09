(function() {
  // 创建全局调试对象
  window.BingWallpaperDebug = {
    enabled: false,
    
    // 初始化调试模块
    init: function() {
      const siteConfig = window.siteConfig || { debug: { enabled: false } };
      
      if (!siteConfig.debug || !siteConfig.debug.enabled) {
        this.enabled = false;
        return;
      }
      
      this.enabled = true;
      console.log('调试模式已启用');

      // 检查环境变量
      this.log('当前运行环境:', {
        hostname: window.location.hostname,
        protocol: window.location.protocol,
        pathname: window.location.pathname
      });
    },
    
    // 调试日志
    log: function() {
      if (!this.enabled) return;
      console.log.apply(console, arguments);
    },
    
    // 错误日志
    error: function() {
      // 始终记录错误，即使在非调试模式下
      console.error.apply(console, arguments);
    },
    
    // 警告日志
    warn: function() {
      if (!this.enabled) return;
      console.warn.apply(console, arguments);
    },
    
    // 图片加载日志
    logImageLoading: function() {
      if (!this.enabled) return;
      console.log.apply(console, arguments);
    },
    
    // URL构建日志
    logUrlConstruction: function() {
      if (!this.enabled) return;
      console.log.apply(console, arguments);
    },
    
    // 检查公共资源
    checkPublicAssets: function() {
      if (!this.enabled) return;
      
      const assets = [
        '/script.js',
        '/placeholder.svg',
        '/images'
      ];
      
      this.log('开始检查资源可用性...');
      assets.forEach(asset => {
        fetch(asset)
          .then(response => {
            this.log(`资源 ${asset} 状态:`, response.status, response.ok ? '可用' : '不可用');
          })
          .catch(error => {
            this.error(`资源 ${asset} 加载失败:`, error);
          });
      });
    }
  };
  
  // 初始化调试
  setTimeout(() => window.BingWallpaperDebug.init(), 100);
})();
