/**
 * Utility to preload images to prevent layout shifts and blank screens
 */

/**
 * Preload a single image
 * 
 * @param {string} src - Image source URL
 * @returns {Promise} - Promise that resolves when image is loaded or rejects on error
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      resolve(src);
    };
    
    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
      reject(src);
    };
    
    img.src = src;
  });
};

/**
 * Preload multiple images
 * 
 * @param {Array<string>} sources - Array of image source URLs
 * @returns {Promise} - Promise that resolves when all images are loaded
 */
export const preloadImages = async (sources) => {
  try {
    // Use Promise.allSettled so one failing image doesn't block others
    const results = await Promise.allSettled(sources.map(src => preloadImage(src)));
    
    // Log which images failed to load
    const failed = results
      .filter(result => result.status === 'rejected')
      .map(result => result.reason);
      
    if (failed.length > 0) {
      console.warn('Some images failed to preload:', failed);
    }
    
    return results;
  } catch (error) {
    console.error('Error preloading images:', error);
    return [];
  }
};
