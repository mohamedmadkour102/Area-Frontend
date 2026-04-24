import path from 'node:path'
import sharp from 'sharp'

const input = path.resolve('src/assets/images/hero/laptopbackground.png')
const output = path.resolve('public/og.jpg')

await sharp(input, { failOn: 'none' })
  .resize({ width: 1200, height: 630, fit: 'cover' })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(output)

console.log(`Wrote ${output}`)
