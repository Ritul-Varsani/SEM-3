const { exec } = require('child_process');

exec(`"D:/SEM3/Web technology/revision/img_20250430_171738_285[1].webp"`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
});

const { execFile } = require('child_process');

execFile('node', ['--version'], (err, stdout, stderr) => {
  if (err) throw err;
  console.log(`Node.js version: ${stdout}`);
});