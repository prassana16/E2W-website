/**
 * Image path resolver for GitHub Pages deployment
 * Handles both local development and production builds
 */

const getBasePath = () => {
  // In production (GitHub Pages), use the repository name as base path
  if (import.meta.env.PROD) {
    return '/E2W-website';
  }
  // In development, no base path needed
  return '';
};

/**
 * Resolve image path for both development and production
 * @param {string} imagePath - Relative path to image from src/assets/images/
 * @returns {string} - Resolved image path
 */
export const resolveImagePath = (imagePath) => {
  const basePath = getBasePath();
  // Remove leading slash if present and add base path
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${basePath}/assets/images/${cleanPath}`;
};

/**
 * Lazy load image with error handling
 * @param {string} src - Image source
 * @param {string} fallback - Fallback image source
 * @returns {Promise<string>} - Promise that resolves to image source
 */
export const lazyLoadImage = (src, fallback = null) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => resolve(src);
    img.onerror = () => {
      if (fallback) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => resolve(fallback);
        fallbackImg.onerror = () => reject(new Error(`Failed to load both primary and fallback images`));
        fallbackImg.src = fallback;
      } else {
        reject(new Error(`Failed to load image: ${src}`));
      }
    };
    
    img.src = src;
  });
};

export default {
  resolveImagePath,
  lazyLoadImage,
  getBasePath
};
