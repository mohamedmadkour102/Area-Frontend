import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const widths = [640, 960, 1280, 1600, 1920]

const targets = [
  // Large raster assets used on the landing page
  path.resolve('src/assets/images/mountainimage/mountainimagesection.jpg'),
  path.resolve('src/assets/images/mount2/mountain2.jpg'),
  path.resolve('src/assets/images/johnsmith/johnsmith.jpg'),
  path.resolve('src/assets/images/seebig/seebigpic.jpg'),
  path.resolve('src/assets/images/hero/laptopbackground.png'),
]

async function optimizeFile(inputPath) {
  const parsed = path.parse(inputPath)
  const base = path.join(parsed.dir, parsed.name)

  const meta = await sharp(inputPath, { failOn: 'none' }).metadata()
  const inputWidth = meta.width ?? null

  // Master "full" image: cap width to reduce absurdly large sources.
  const masterWidth = inputWidth ? Math.min(inputWidth, 1920) : 1920

  if (parsed.ext.toLowerCase() === '.png') {
    await sharp(inputPath, { failOn: 'none' })
      .rotate()
      .resize({ width: masterWidth, withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(`${base}-optimized.png`)

    // Keep stable import path by replacing the original in-place.
    await fsRenameReplace(`${base}-optimized.png`, inputPath)
  } else {
    await sharp(inputPath, { failOn: 'none' })
      .rotate()
      .resize({ width: masterWidth, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(`${base}-optimized.jpg`)

    await fsRenameReplace(`${base}-optimized.jpg`, inputPath)
  }

  for (const w of widths) {
    if (inputWidth && w > inputWidth) continue

    await sharp(inputPath, { failOn: 'none' })
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(`${base}-w${w}.webp`)

    if (parsed.ext.toLowerCase() === '.png') {
      await sharp(inputPath, { failOn: 'none' })
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(`${base}-w${w}.png`)
    } else {
      await sharp(inputPath, { failOn: 'none' })
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true, progressive: true })
        .toFile(`${base}-w${w}.jpg`)
    }
  }
}

async function fsRenameReplace(from, to) {
  await fs.rm(to, { force: true })
  await fs.rename(from, to)
}

for (const file of targets) {
  console.log(`Optimizing: ${file}`)
  await optimizeFile(file)
}

console.log('Done.')
