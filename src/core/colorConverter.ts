// types
type Hex = string;
type Rgb = {
  red: number;
  green: number;
  blue: number;
};
type Hsl = {
  hue: number;
  saturation: number;
  lightness: number;
};
type MainColor = [Hex];
type Complimentary = [Hex, Hex];
type SplitComplimentary = [Hex, Hex, Hex];
type Triad = [Hex, Hex, Hex, Hex];
type Tetrad = [Hex, Hex, Hex, Hex, Hex];
export interface Combinations {
  mainColor: MainColor;
  complimentary: Complimentary;
  splitComplimentary: SplitComplimentary;
  triad: Triad;
  tetrad: Tetrad;
}
type Parser = {
  color: Hsl;
  start: number;
  end: number;
  interval: number;
};
// generate and return  hex color
function generateHex(): Hex {
  let colorRange = "1234567890abcdef";
  let hexadecimal = "";
  while (hexadecimal.length < 6) {
    // generate Hex values
    hexadecimal += colorRange[Math.floor(Math.random() * colorRange.length)];
  }
  return `#${hexadecimal}`;
}
// convert hex to rgb
function convertHexToRgb(params: Hex): Rgb {
  let red = 0,
    green = 0,
    blue = 0;
  params = params.slice(1, params.length);
  if (params.length === 3) {
    red = parseInt("0x" + params[0] + params[0]);
    green = parseInt("0x" + params[1] + params[1]);
    blue = parseInt("0x" + params[2] + params[2]);
  } else if (params.length === 6) {
    red = parseInt("0x" + params[0] + params[1]);
    green = parseInt("0x" + params[2] + params[3]);
    blue = parseInt("0x" + params[4] + params[5]);
  } else {
    red = 0;
    blue = 0;
    green = 0;
  }
  return { red, green, blue };
}
// convert rgb to hsl
function convertRgbToHsl(params: Rgb): Hsl {
  // make r,g,b a fraction of 1
  let { red, green, blue } = params;
  red /= 255;
  green /= 255;
  blue /= 255;

  // find min and max channel value
  let cmin = Math.min(red, green, blue),
    cmax = Math.max(red, green, blue),
    change = cmax - cmin,
    hue = 0,
    saturation = 0,
    lightness = 0;
  // calculate hue
  if (change === 0) {
    // no difference
    hue = 0;
  } else if (cmax === red) {
    // red is max
    hue = ((green - blue) / change) % 6;
  } else if (cmax === green) {
    // green is max
    hue = (blue - red) / change + 2;
  } else {
    // blue is max
    hue = (red - green) / change + 4;
  }
  hue = Math.round(hue * 60);
  if (hue < 0) {
    // make nagetive hue positive
    hue += 360;
  } else {
    hue = hue;
  }
  lightness = (cmax + cmin) / 2;
  saturation = change == 0 ? 0 : change / (1 - Math.abs(2 * lightness - 1));
  saturation = +(saturation * 100).toFixed(1);
  lightness = +(lightness * 100).toFixed(1);

  return { hue, saturation, lightness };
}
// convert hex to hsl
function convertHexToHsl(params: Hex): Hsl {
  // first convert to rgb
  let rgb = convertHexToRgb(params);
  // convert rgb to hsl
  let hsl = convertRgbToHsl(rgb);
  return hsl;
}
// convert hsl to rgb color
function convertHslToRgb(params: Hsl): Rgb {
  // Must be fractions of 1
  params.saturation /= 100;
  params.lightness /= 100;
  let c = (1 - Math.abs(2 * params.lightness - 1)) * params.saturation,
    x = c * (1 - Math.abs(((params.hue / 60) % 2) - 1)),
    m = params.lightness - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= params.hue && params.hue < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= params.hue && params.hue < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= params.hue && params.hue < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= params.hue && params.hue < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= params.hue && params.hue < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= params.hue && params.hue < 360) {
    r = c;
    g = 0;
    b = x;
  } else {
    r = r;
    g = g;
    b = b;
  }
  //   getting the rgb
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  return { red: r, green: g, blue: b };
}
// convert hsl to hex
function convertHslToHex(params: Hsl): Hex {
  // first convert to rgb
  let { red, green, blue } = convertHslToRgb(params);
  // Having obtained RGB,  convert  the channels to hex
  let r = red.toString(16);
  let g = green.toString(16);
  let b = blue.toString(16);
  // Prepend 0s, if necessary
  if (r.length == 1) {
    r = "0" + r;
  } else {
    r = r;
  }
  if (g.length == 1) {
    g = "0" + g;
  } else {
    g = g;
  }
  if (b.length == 1) {
    b = "0" + b;
  } else {
    b = b;
  }
  return `#${r}${g}${b}`;
}
// parser all color type to  its different types
function parser(params: Parser): string[] {
  let { color, start, end, interval } = params;
  let { hue, saturation, lightness } = color;
  let values = [convertHslToHex(color)];
  let count = 1;
  //   loop through and convert back to hex
  for (let i = start; i <= end; i += interval) {
    const h = (hue + i) % 360;
    values[count] = convertHslToHex({
      hue: h,
      saturation: saturation,
      lightness: lightness,
    });
    count++;
  }
  return values;
}

// get  all color combination style
function getCombination(params: Hex): Combinations {
  //   convert to hsl
  const compliment = parser({
    color: convertHexToHsl(params),
    start: 180,
    end: 180,
    interval: 1,
  });

  const splitComp = parser({
    color: convertHexToHsl(params),
    start: 150,
    end: 210,
    interval: 60,
  });

  const triad = parser({
    color: convertHexToHsl(params),
    start: 120,
    end: 240,
    interval: 60,
  });

  const tetrad = parser({
    color: convertHexToHsl(params),
    start: 90,
    end: 270,
    interval: 60,
  });

  return {
    mainColor: [params] as MainColor,
    complimentary: compliment as Complimentary,
    splitComplimentary: splitComp as SplitComplimentary,
    triad: triad as Triad,
    tetrad: tetrad as Tetrad,
  };
}

const generate = (params: Hex): Combinations => {
  let hex: Hex;
  if (params == "") {
    hex = generateHex();
  } else {
    hex = params;
  }
  return getCombination(hex);
};

export default generate;
