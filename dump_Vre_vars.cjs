const fs = require('fs');

const jsContent = fs.readFileSync('/tmp/index.js', 'utf8');

function findAndPrint(arrayName) {
  const index = jsContent.indexOf(arrayName + '=');
  if (index === -1) {
    console.log(`Array "${arrayName}" not found.`);
    return;
  }
  let startBracket = jsContent.indexOf('[', index);
  let openCount = 0;
  let endBracket = -1;
  for (let i = startBracket; i < jsContent.length; i++) {
    if (jsContent[i] === '[') openCount++;
    else if (jsContent[i] === ']') {
      openCount--;
      if (openCount === 0) {
        endBracket = i;
        break;
      }
    }
  }
  if (endBracket !== -1) {
    const code = jsContent.slice(startBracket, endBracket + 1);
    const parsed = eval(code);
    console.log(JSON.stringify(parsed, null, 2));
  } else {
    console.log(`Could not find closing bracket for ${arrayName}`);
  }
}

findAndPrint('qre');
findAndPrint('Ure');
