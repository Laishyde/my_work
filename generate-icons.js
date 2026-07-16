const sharp = require('sharp');
const path = require('path');

const sourceImage = './assets/images/quentro.jpg';
const outputDir = './public';

async function generateIcons() {
  try {
    // Generate icon-192.png
    await sharp(sourceImage)
      .resize(192, 192)
      .png()
      .toFile(path.join(outputDir, 'icon-192.png'));
    console.log('Generated icon-192.png');

    // Generate icon-512.png
    await sharp(sourceImage)
      .resize(512, 512)
      .png()
      .toFile(path.join(outputDir, 'icon-512.png'));
    console.log('Generated icon-512.png');

    // Generate apple-touch-icon.png
    await sharp(sourceImage)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');

    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
