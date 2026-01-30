const screen = " ".repeat(100).split("");
const drawScreen = () => console.log(screen.join(""));

const contentMaker = (text) => {
  const content = text;
  let index = 0;
  return () => content[index++ % text.length];
};

const charOfContent = contentMaker("Good morning   ");

const maintainScreen = (char) => {
  screen.push(char);
  screen.shift();
};

setInterval(() => {
  console.clear();
  maintainScreen(charOfContent());
  drawScreen();
}, 100);
