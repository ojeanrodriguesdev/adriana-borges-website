'use client';

import { useEffect } from 'react';

/**
 * Componente para monitoramento de Core Web Vitals
 * Monitora LCP, FID, CLS, FCP, TTFB
 */
export default function WebVitals() {
  useEffect(() => {
    // Função para enviar métricas para Google Analytics
    const sendToAnalytics = (metric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log para desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    };

    // Função para obter CLS
    const getCLS = (onPerfEntry) => {
      let clsValue = 0;
      let clsEntries = [];
      let sessionValue = 0;
      let sessionEntries = [];

      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = sessionEntries[0];
            const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

            if (sessionValue && 
                entry.startTime - lastSessionEntry.startTime < 1000 && 
                entry.startTime - firstSessionEntry.startTime < 5000) {
              sessionValue += entry.value;
              sessionEntries.push(entry);
            } else {
              sessionValue = entry.value;
              sessionEntries = [entry];
            }

            if (sessionValue > clsValue) {
              clsValue = sessionValue;
              clsEntries = [...sessionEntries];
              onPerfEntry({ name: 'CLS', value: clsValue, entries: clsEntries });
            }
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    };

    // Função para obter FID
    const getFID = (onPerfEntry) => {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          onPerfEntry({ name: 'FID', value: entry.processingStart - entry.startTime, entries: [entry] });
        }
      }).observe({ type: 'first-input', buffered: true });
    };

    // Função para obter LCP
    const getLCP = (onPerfEntry) => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        onPerfEntry({ name: 'LCP', value: lastEntry.startTime, entries: [lastEntry] });
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    };

    // Função para obter FCP
    const getFCP = (onPerfEntry) => {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            onPerfEntry({ name: 'FCP', value: entry.startTime, entries: [entry] });
          }
        }
      }).observe({ type: 'paint', buffered: true });
    };

    // Função para obter TTFB
    const getTTFB = (onPerfEntry) => {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.responseStart > 0) {
            onPerfEntry({ 
              name: 'TTFB', 
              value: entry.responseStart - entry.requestStart, 
              entries: [entry] 
            });
          }
        }
      }).observe({ type: 'navigation', buffered: true });
    };

    // Registrar observadores
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getLCP(sendToAnalytics);
    getFCP(sendToAnalytics);
    getTTFB(sendToAnalytics);

    // Verificar se LCP está dentro do limite recomendado (2.5s)
    const checkLCPThreshold = () => {
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        const lcp = lcpEntries[lcpEntries.length - 1];
        if (lcp.startTime > 2500) {
          console.warn(`LCP está acima do limite recomendado: ${lcp.startTime}ms`);
          // Aqui você pode implementar otimizações adicionais
        }
      }
    };

    // Verificar LCP após carregamento completo
    window.addEventListener('load', () => {
      setTimeout(checkLCPThreshold, 1000);
    });

  }, []);

  return null; // Este componente não renderiza nada
}

/**
 * Hook para monitorar performance de componentes específicos
 */
export function usePerformanceMonitor(componentName) {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'component_render_time', {
          event_category: 'Performance',
          event_label: componentName,
          value: Math.round(renderTime),
        });
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);
}

/**
 * Componente para preload de recursos críticos
 */
export function CriticalResourcePreloader() {
  useEffect(() => {
    // Preload de fontes críticas
    const preloadFont = (href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Preload de imagens críticas
    const preloadImage = (src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    };

    // Preload de recursos críticos
    preloadFont('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2');
    
    // Adicionar preload de imagens críticas aqui
    // preloadImage('/hero-image.jpg');
    
  }, []);

  return null;
}
