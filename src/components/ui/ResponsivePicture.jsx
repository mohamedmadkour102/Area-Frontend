function buildSrcSet(urlByWidth) {
  return Object.entries(urlByWidth)
    .map(([width, url]) => `${url} ${width}w`)
    .join(', ')
}

function ResponsivePicture({
  sources,
  fallbackSrc,
  alt,
  className,
  sizes,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  draggable = false,
}) {
  return (
    <picture>
      {sources.map((source) => (
        <source
          key={source.type}
          type={source.type}
          srcSet={buildSrcSet(source.srcSetByWidth)}
          sizes={sizes}
        />
      ))}

      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        draggable={draggable}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  )
}

export default ResponsivePicture
