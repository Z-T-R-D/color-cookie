type ColorScheme = string[];
type Complimentary = ColorScheme & { length: 2 };
type Triad = ColorScheme & { length: 3 };
type SplitComplementary = ColorScheme & { length: 3 };
type Tetrad = ColorScheme & { length: 4 };
type Shades = ColorScheme & { length: 5 };

export class ColorConverter {
  private rgbColor: string = "";
  private errorMessage: string = "";
  private namedColors = new Set([
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
  ]);

  constructor(code: string) {
    let rgbColor = "";
    switch (true) {
      case code.startsWith("#"):
        rgbColor = this.convertHexToRgb(code);
        break;
      case this.isNamedColor(code):
        rgbColor = this.ConvertNamedColorToHex(code);
        break;
      case code === "" || !code:
        rgbColor = this.generateColor();
        break;
      default:
        this.errorMessage = "Invalid color";
    }
    this.rgbColor = this.checkRgb(rgbColor);
  }

  private checkRgb(rgb: string) {
    if (!/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/.test(rgb)) {
      this.errorMessage = "Invalid RGB color";
      return "";
    }
    return rgb;
  }

  private convertRgbToHex(rgb: string) {
    const [r, g, b] = rgb
      .match(/\d+/g)!
      .map((num) => parseInt(num).toString(16).padStart(2, "0"));
    return `#${r}${g}${b}`;
  }

  private ConvertNamedColorToHex(colorName: string) {
    const tempElement = document.createElement("div");
    tempElement.style.color = colorName;
    document.body.appendChild(tempElement);
    const color = getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement);
    return color;
  }

  private convertHexToRgb(hex: string) {
    const [r, g, b] = hex
      .replace("#", "")
      .match(/.{1,2}/g)!
      .map((num) => parseInt(num, 16));
    return `rgb(${r}, ${g}, ${b})`;
  }

  private isNamedColor(color: string) {
    return this.namedColors.has(color.toLowerCase());
  }

  private generateColor() {
    return `rgb(${Array(3)
      .fill(0)
      .map(() => Math.floor(Math.random() * 256))
      .join(", ")})`;
  }

  get ErrorMessage() {
    return this.errorMessage;
  }

  get color() {
    return this.convertRgbToHex(this.rgbColor);
  }

  get tetrad(): Tetrad {
    const rgb = this.rgbColor;
    const rgbValues = rgb.match(/\d+/g)!;
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
    const tetradColor1 = `rgb(${g}, ${b}, ${r})`;
    const tetradColor2 = `rgb(${b}, ${r}, ${g})`;
    const tetradColor3 = `rgb(${b}, ${g}, ${r})`;
    return [
      this.convertRgbToHex(rgb),
      this.convertRgbToHex(tetradColor1),
      this.convertRgbToHex(tetradColor2),
      this.convertRgbToHex(tetradColor3),
    ];
  }

  get shades(): Shades {
    const rgb = this.rgbColor;
    const rgbValues = rgb.match(/\d+/g)!;
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
    const shade1 = `rgb(${r - 50}, ${g - 50}, ${b - 50})`;
    const shade2 = `rgb(${r - 100}, ${g - 100}, ${b - 100})`;
    const shade3 = `rgb(${r - 150}, ${g - 150}, ${b - 150})`;
    const shade4 = `rgb(${r - 200}, ${g - 200}, ${b - 200})`;
    return [
      this.convertRgbToHex(rgb),
      this.convertRgbToHex(shade1),
      this.convertRgbToHex(shade2),
      this.convertRgbToHex(shade3),
      this.convertRgbToHex(shade4),
    ];
  }

  get triad(): Triad {
    const rgb = this.rgbColor;
    const rgbValues = rgb.match(/\d+/g)!;
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
    const triadColor1 = `rgb(${g}, ${b}, ${r})`;
    const triadColor2 = `rgb(${b}, ${r}, ${g})`;
    return [
      this.convertRgbToHex(rgb),
      this.convertRgbToHex(triadColor1),
      this.convertRgbToHex(triadColor2),
    ];
  }

  get complimentary(): Complimentary {
    const rgb = this.rgbColor;
    const rgbValues = rgb.match(/\d+/g)!;
    const r = 255 - parseInt(rgbValues[0]);
    const g = 255 - parseInt(rgbValues[1]);
    const b = 255 - parseInt(rgbValues[2]);
    const complementaryColor = `rgb(${r}, ${g}, ${b})`;
    return [
      this.convertRgbToHex(rgb),
      this.convertRgbToHex(complementaryColor),
    ];
  }

  get splitComplementary(): SplitComplementary {
    const rgb = this.rgbColor;
    const rgbValues = rgb.match(/\d+/g)!;
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
    const splitComplementaryColor1 = `rgb(${r}, ${g}, ${b + 30})`;
    const splitComplementaryColor2 = `rgb(${r}, ${g}, ${b - 30})`;
    return [
      this.convertRgbToHex(rgb),
      this.convertRgbToHex(splitComplementaryColor1),
      this.convertRgbToHex(splitComplementaryColor2),
    ];
  }
}
