// 简单的CSS和JS压缩脚本
const fs = require('fs');

function compressCSS(content) {
  return content
    // 移除注释
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // 移除多余的空白字符
    .replace(/\s+/g, ' ')
    // 移除分号前的空格
    .replace(/\s*;\s*/g, ';')
    // 移除大括号前后的空格
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    // 移除冒号后的空格
    .replace(/:\s+/g, ':')
    // 移除逗号后的空格
    .replace(/,\s+/g, ',')
    // 移除开头和结尾的空白
    .trim();
}

function compressJS(content) {
  return content
    // 移除单行注释
    .replace(/\/\/.*$/gm, '')
    // 移除多行注释
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // 移除多余的空白字符
    .replace(/\s+/g, ' ')
    // 移除分号前的空格
    .replace(/\s*;\s*/g, ';')
    // 移除大括号前后的空格
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    // 移除开头和结尾的空白
    .trim();
}

// 压缩CSS
try {
  const cssContent = fs.readFileSync('styles.css', 'utf8');
  const compressedCSS = compressCSS(cssContent);
  fs.writeFileSync('styles.min.css', compressedCSS);
  console.log('CSS compressed successfully');
  console.log(`Original size: ${cssContent.length} bytes`);
  console.log(`Compressed size: ${compressedCSS.length} bytes`);
  console.log(`Savings: ${((cssContent.length - compressedCSS.length) / cssContent.length * 100).toFixed(2)}%`);
} catch (error) {
  console.error('Error compressing CSS:', error);
}

// 压缩JS
try {
  const jsContent = fs.readFileSync('script.js', 'utf8');
  const compressedJS = compressJS(jsContent);
  fs.writeFileSync('script.min.js', compressedJS);
  console.log('JS compressed successfully');
  console.log(`Original size: ${jsContent.length} bytes`);
  console.log(`Compressed size: ${compressedJS.length} bytes`);
  console.log(`Savings: ${((jsContent.length - compressedJS.length) / jsContent.length * 100).toFixed(2)}%`);
} catch (error) {
  console.error('Error compressing JS:', error);
}
