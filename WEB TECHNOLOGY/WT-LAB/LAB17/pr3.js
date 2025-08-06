const fs = require('fs');


fs.readFile('D:/SEM3/Web technology/revision/Dom.html', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});



fs.readFile('D:/SEM3/Web technology/revision/apple.jpg', (err, data) => {
  if (err) throw err;

  console.log('Image size:', data.length, 'bytes');
});

fs.writeFile('D:/SEM3/Web technology/revision/Dom.html', 'Hello World', (err) => {
  if (err) throw err;
  console.log('Written!');
});


fs.stat('D:/SEM3/Web technology/revision/Dom.html', (err, stats) => {
  if (err) throw err;
  console.log(stats.size);
});