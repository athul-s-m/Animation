const screen = [
  (" ".repeat(70) + "                __/___         ").split(""),
  (" ".repeat(70) + "          _____/______|        ").split(""),
  (" ".repeat(70) + "  _______/_____\\______\\_____   ").split(""),
  (" ".repeat(70) + "  \\              < < <      |  ").split(""),
  "~".repeat(100).split(""),
];

const drawScreen = () => console.log(screen.map((x) => x.join("")).join("\n"));

const cycle = (length) => {
  let index = 0;
  return () => index++ % length;
};

const callCycle = cycle(screen[0].length);

const redraw = (position) => {
  for (let index = 0; index < 4; index++) {
    const char = position < 60 ? " " : screen[index][position];
    screen[index].push(char);
    screen[index].shift();
  }
};

setInterval(() => {
  console.clear();
  redraw(callCycle());
  drawScreen();
}, 100);
