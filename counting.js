function countToNumber(num) {
  setTimeout(() => {
    console.log('num:', num);
  }, num*1000);
}

for (let i = 0; i < 1000; i++) {
  countToNumber(i);
}

process.stdin.on("data", (data) => {
  console.log(data.toString());
  if (data.toString() === 'stop') {
    console.log("stopping...");
    process.exit();
  }
});
