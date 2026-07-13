const fs = require('fs');

const jsContent = fs.readFileSync('/tmp/index.js', 'utf8');

function findExactArray(arrayName) {
  const index = jsContent.indexOf(arrayName + '=');
  if (index === -1) {
    console.log(`Array/Object "${arrayName}" not found.`);
    return;
  }
  let startBracket = jsContent.indexOf('[', index);
  if (startBracket === -1 || startBracket > index + 20) {
    startBracket = jsContent.indexOf('{', index);
  }
  let openChar = jsContent[startBracket];
  let closeChar = openChar === '[' ? ']' : '}';
  let openCount = 0;
  let endBracket = -1;
  for (let i = startBracket; i < jsContent.length; i++) {
    if (jsContent[i] === openChar) openCount++;
    else if (jsContent[i] === closeChar) {
      openCount--;
      if (openCount === 0) {
        endBracket = i;
        break;
      }
    }
  }
  if (endBracket !== -1) {
    console.log(`--- ${arrayName} ---`);
    console.log(jsContent.slice(startBracket, endBracket + 1));
    console.log('---------------------\n');
  } else {
    console.log(`Could not find closing bracket for ${arrayName}`);
  }
}

findExactArray('Wre');
findExactArray('Hre');
