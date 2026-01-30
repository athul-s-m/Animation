const randomNumberUpto100 = () => Math.floor(Math.random() * 100);
const drawScreen = (space, char) => console.log(" ".repeat(space) + char);

setInterval(() => {
  drawScreen(randomNumberUpto100(), "*");
}, 1000);
