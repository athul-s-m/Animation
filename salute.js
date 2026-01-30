const attention = [
  "       .---.",
  "      /_____\\",
  "      ( '.' )",
  "       \\_-_/_",
  "    .-\"`'V'//-.",
  "   / ,   |// , \\",
  "  / /|Ll //Ll|\\ \\",
  " / / |__//   | \\_\\",
  " \\ \\/---|[]==| / /",
  "  \\/\\__/ |   \\/\\/",
  "   |/_   | Ll_\\|",
  '     |`^"""^`|',
  "     |   |   |",
  "     |   |   |",
  "     |   |   |",
  "     |   |   |",
  "     L___l___J",
  "      |_ | _|",
  "     (___|___)",
  "      ^^^ ^^^",
];

const salute = [
  "       .---.",
  "  ___ /_____\\",
  " /\\.-`( '.' )",
  "/ /    \\_-_/_",
  "\\ `-.-\"`'V'//-.",
  " `.__,   |// , \\",
  "     |Ll //Ll|\\ \\",
  "     |__//   | \\_\\",
  "    /---|[]==| / /",
  "    \\__/ |   \\/\\/",
  "    /_   | Ll_\\|",
  '     |`^"""^`|',
  "     |   |   |",
  "     |   |   |",
  "     |   |   |",
  "     |   |   |",
  "     L___l___J",
  "      |_ | _|",
  "     (___|___)",
  "      ^^^ ^^^",
];

let currentPost = attention;
const drawScreen = () => console.log(currentPost.join("\n"));

const respect = () => {
  const id = setInterval(() => {
    console.clear();
    drawScreen();
    if (currentPost === salute) return;
    currentPost = currentPost === attention && salute;
  }, 1000);
};

const id = respect();

clearInterval();
