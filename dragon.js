const screen = Array.from(
  { length: 35 },
  (x) => Array.from({ length: 65 }, (x) => " "),
);

const dragon = [
  "                       _..gggggppppp.._                       ".split(""),
  "                  _.gd$$$$$$$$$$$$$$$$$$bp._                  ".split(""),
  '               .g$$$$$$P^^""j$$b""""^^T$$$$$$p.               '.split(""),
  '            .g$$$P^T$$b    d$P T;       ""^^T$$$p.            '.split(""),
  '          .d$$P^"  :$; `  :$;                "^T$$b.          '.split(""),
  "        .d$$P'      T$b.   T$b                  `T$$b.        ".split(""),
  "       d$$P'      .gg$$$$bpd$$$p.d$bpp.           `T$$b       ".split(""),
  "      d$$P      .d$$$$$$$$$$$$$$$$$$$$bp.           T$$b      ".split(""),
  "     d$$P      d$$$$$$$$$$$$$$$$$$$$$$$$$b.          T$$b     ".split(""),
  "    d$$P      d$$$$$$$$$$$$$$$$$$P^^T$$$$P            T$$b    ".split(""),
  "   d$$P    '-'T$$$$$$$$$$$$$$$$$$bggpd$$$$b.           T$$b   ".split(""),
  "  :$$$      .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.g.     $$$;  ".split(""),
  '  $$$;     d$$$$$$$$$$$$$$$$$$$$$$$P^"^T$$$$P^^T$$$;    :$$$  '.split(""),
  ' :$$$     :$$$$$$$$$$$$$$:$$$$$$$$$_    "^T$bpd$$$$,     $$$; '.split(""),
  " $$$;     :$$$$$$$$$$$$$$bT$$$$$P^^T$p.    `T$$$$$$;     :$$$ ".split(""),
  ":$$$      :$$$$$$$$$$$$$$P `^^^'    \"^T$p.    lb`TP       $$$;".split(""),
  ":$$$      $$$$$$$$$$$$$$$              `T$$p._;$b         $$$;".split(""),
  "$$$;      $$$$$$$$$$$$$$;                `T$$$$:Tb        :$$$".split(""),
  "$$$;      $$$$$$$$$$$$$$$                        Tb    _  :$$$".split(""),
  ":$$$     d$$$$$$$$$$$$$$$.                        $b.__Tb $$$;".split(""),
  ":$$$  .g$$$$$$$$$$$$$$$$$$$p...______...gp._      :$`^^^' $$$;".split(""),
  " $$$;  `^^'T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p.    Tb._, :$$$ ".split(""),
  ' :$$$       T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b.   "^"  $$$; '.split(""),
  "  $$$;       `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b      :$$$  ".split(""),
  "  :$$$        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$;  ".split(""),
  "   T$$b    _  :$$`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;   d$$P   ".split(""),
  "    T$$b   T$g$$; :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  d$$P    ".split(""),
  "     T$$b   `^^'  :$$ \"^T$$$$$$$$$$$$$$$$$$$$$$$$$$$ d$$P     ".split(""),
  "      T$$b        $P     T$$$$$$$$$$$$$$$$$$$$$$$$$;d$$P      ".split(""),
  "       T$$b.      '       $$$$$$$$$$$$$$$$$$$$$$$$$$$$P       ".split(""),
  "        `T$$$p.   bug    d$$$$$$$$$$$$$$$$$$$$$$$$$$P'        ".split(""),
  "          `T$$$$p..__..g$$$$$$$$$$$$$$$$$$$$$$$$$$P'          ".split(""),
  '            "^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$^"            '.split(""),
  '               "^T$$$$$$$$$$$$$$$$$$$$$$$$$$P^"               '.split(""),
  '                   """^^^T$$$$$$$$$$P^^^"""                   '.split(""),
];

const generateRandom = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const drawScreen = () => console.log(screen.map((x) => x.join("")).join("\n"));

const redraw = () => {
  const x1 = generateRandom(0, 34);
  const y1 = generateRandom(0, 63);
  const x2 = generateRandom(0, 34);
  const y2 = generateRandom(0, 63);
  const x3 = generateRandom(0, 34);
  const y3 = generateRandom(0, 63);
  const x4 = generateRandom(0, 34);
  const y4 = generateRandom(0, 63);

  screen[x1][y1] = dragon[x1][y1];
  screen[x2][y2] = dragon[x2][y2];
  screen[x3][y3] = dragon[x3][y3];
  screen[x4][y4] = dragon[x4][y4];
};

setInterval(() => {
  console.clear();
  console.clear();
  drawScreen();
  redraw();
}, 50);
