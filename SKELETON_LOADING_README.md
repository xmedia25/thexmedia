# Skeleton Loading Components - YouTube Style

This project includes optimized skeleton loading components for both images and videos, providing a smooth user experience similar to YouTube's loading states.

## 🚀 Features

### ✨ **YouTube-Style Skeleton Loading**
- Smooth shimmer animations
- Responsive design
- Dark theme support
- High contrast mode support
- Reduced motion support for accessibility

### 🖼️ **Image Skeleton Loading**
- Shows skeleton while image loads
- Smooth opacity transitions
- Error handling with fallbacks
- Customizable appearance

### 🎥 **Video Skeleton Loading**
- YouTube-style video placeholders
- Play button overlays
- Loading states for video content
- Custom controls support

## 📁 Component Structure

```
src/components/ui/
├── skeleton-loader.tsx      # Base skeleton component
├── optimized-image.tsx      # Enhanced image with skeleton
└── optimized-video.tsx      # Enhanced video with skeleton
```

## 🛠️ Usage

### 1. **Basic Skeleton Loader**

```tsx
import SkeletonLoader from '@/components/ui/skeleton-loader';

// Image skeleton
<SkeletonLoader 
  type="image" 
  width={400} 
  height={300} 
/>

// Video skeleton
<SkeletonLoader 
  type="video" 
  width={400} 
  height={225} 
/>
```

### 2. **Optimized Image Component**

```tsx
import OptimizedImage from '@/components/ui/optimized-image';

<OptimizedImage 
  src="/path/to/image.jpg"
  alt="Description"
  width={400}
  height={300}
  showSkeleton={true}
  fallback="/path/to/fallback.jpg"
/>
```

**Props:**
- `src`: Image source URL
- `alt`: Alt text for accessibility
- `width/height`: Dimensions
- `showSkeleton`: Enable/disable skeleton loading
- `fallback`: Fallback image on error
- `className`: Custom CSS classes
- `style`: Custom inline styles

### 3. **Optimized Video Component**

```tsx
import OptimizedVideo from '@/components/ui/optimized-video';

<OptimizedVideo 
  src="/path/to/video.mp4"
  width={400}
  height={225}
  showSkeleton={true}
  controls={true}
  muted={true}
  autoPlay={false}
/>
```

**Props:**
- `src`: Video source URL
- `width/height`: Dimensions
- `showSkeleton`: Enable/disable skeleton loading
- `controls`: Show video controls
- `muted`: Mute video by default
- `autoPlay`: Auto-play video
- `loop`: Loop video
- `playsInline`: Mobile-friendly playback

## 🎨 Customization

### CSS Customization

The skeleton loading styles are defined in `public/assets/css/skeleton-loading.css`. You can customize:

- Colors and themes
- Animation speeds
- Skeleton dimensions
- Shimmer effects
- Responsive breakpoints

### Component Customization

```tsx
// Custom skeleton appearance
<SkeletonLoader 
  type="image" 
  width={400} 
  height={300}
  className="custom-skeleton"
/>

// Custom image loading
<OptimizedImage 
  src="/image.jpg"
  alt="Custom image"
  showSkeleton={true}
  skeletonClassName="custom-image-skeleton"
/>
```

## 🔧 Implementation Examples

### Replace Standard Images

```tsx
// Before
import Image from 'next/image';
<Image src={imageSrc} alt="description" />

// After
import OptimizedImage from '@/components/ui/optimized-image';
<OptimizedImage src={imageSrc} alt="description" showSkeleton={true} />
```

### Replace Standard Videos

```tsx
// Before
<video src={videoSrc} controls />

// After
import OptimizedVideo from '@/components/ui/optimized-video';
<OptimizedVideo src={videoSrc} controls showSkeleton={true} />
```

### Gallery Implementation

```tsx
import OptimizedImage from '@/components/ui/optimized-image';

const Gallery = ({ images }) => (
  <div className="gallery">
    {images.map((image, index) => (
      <div key={index} className="gallery-item">
        <OptimizedImage 
          src={image.src}
          alt={image.alt}
          width={300}
          height={200}
          showSkeleton={true}
        />
      </div>
    ))}
  </div>
);
```

## 📱 Responsive Design

The skeleton components automatically adapt to different screen sizes:

- **Mobile**: Smaller skeleton elements
- **Tablet**: Medium-sized elements
- **Desktop**: Full-sized elements

## ♿ Accessibility Features

- **Reduced Motion**: Respects user preferences
- **High Contrast**: Enhanced visibility
- **Dark Theme**: Automatic theme detection
- **Screen Readers**: Proper ARIA labels

## 🚀 Performance Benefits

1. **Perceived Performance**: Users see content immediately
2. **Smooth Transitions**: No jarring loading states
3. **Error Handling**: Graceful fallbacks
4. **Lazy Loading**: Optimized resource loading

## 🧪 Testing

Visit `/skeleton-demo` to see all components in action:

- Image skeleton loading
- Video skeleton loading
- Standalone skeleton loaders
- Performance features showcase

## 📋 Migration Checklist

- [ ] Install skeleton loading CSS
- [ ] Replace `Image` with `OptimizedImage`
- [ ] Replace `video` with `OptimizedVideo`
- [ ] Test skeleton loading states
- [ ] Verify responsive behavior
- [ ] Check accessibility features

## 🐛 Troubleshooting

### Common Issues

1. **Skeleton not showing**: Ensure `showSkeleton={true}`
2. **CSS not loading**: Check CSS import path
3. **Performance issues**: Verify image/video sizes
4. **Mobile issues**: Test responsive breakpoints

### Debug Mode

```tsx
// Enable debug logging
<OptimizedImage 
  src="/image.jpg"
  alt="Debug image"
  showSkeleton={true}
  onLoad={() => console.log('Image loaded')}
  onError={() => console.log('Image error')}
/>
```

## 📚 Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Animation Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 🤝 Contributing

To improve the skeleton loading components:

1. Test on different devices
2. Verify accessibility compliance
3. Optimize performance
4. Add new features
5. Update documentation

---

**Note**: These components are designed to work with Next.js 14+ and React 18+. Ensure compatibility with your project setup.
