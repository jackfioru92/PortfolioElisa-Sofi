import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
const RAW=process.argv[2], OUT='./public/img';
const jobs=[['slides',1600,80],['reels',720,78],['brands',900,85]];
let before=0, after=0;
for (const [dir,w,q] of jobs){
  const files=(await readdir(`${RAW}/${dir}`)).filter(f=>/\.(png|jpe?g)$/i.test(f));
  for (const f of files){
    const src=`${RAW}/${dir}/${f}`;
    before+=(await stat(src)).size;
    const out=`${OUT}/${dir}/${f.replace(/\.(png|jpe?g)$/i,'.webp')}`;
    await sharp(src).resize({width:w,withoutEnlargement:true}).webp({quality:q}).toFile(out);
    after+=(await stat(out)).size;
  }
  console.log(`${dir}: ${files.length} file`);
}
await sharp(`${OUT}/logo/se-creative.png`).resize({width:1200}).webp({quality:92}).toFile(`${OUT}/logo/se-creative.webp`);
await sharp(`${OUT}/logo/se-creative.png`).resize(512,512).png().toFile(`${OUT}/logo/icon-512.png`);
await sharp(`${OUT}/logo/se-creative.png`).resize(180,180).flatten({background:'#0a0a0a'}).png().toFile(`${OUT}/logo/apple-touch-icon.png`);
console.log(`${(before/1048576).toFixed(1)} MB -> ${(after/1048576).toFixed(1)} MB`);
