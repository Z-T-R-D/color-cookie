type Complimentary = [string, string];
type Triad = [string, string, string];
type SplitComplementary = [string, string, string];
type Tetrad = [string, string, string, string];
type Shades = [string, string, string, string, string];

export class ColorConverter {
  private rgbColor: string = "";
  private errorMassage: string = "";

  constructor(code: string) {
    if (code.startsWith("#")) {
      this.rgbColor = this.convertHexToRgb(code);
    } else if (this.isNamedColor(code)) {
      this.rgbColor = this.ConvertNamedColorToHex(code);
    } else if (code === "" || !code) {
      this.rgbColor = this.generateColor();
    } else {
      this.errorMassage = "Invalid color";
    }
  }

  private checkRgb(rgb: string) {
    if (!rgb.startsWith("rgb(") || !rgb.endsWith(")")) {
      this.errorMassage = "Invalid RGB color";
    }
  }

  private convertRgbToHex(rgb: string) {
    this.checkRgb(rgb);
    const rgbValues = rgb.match(/\d+/g)!;
    const r = parseInt(rgbValues[0]).toString(16).padStart(2, "0");
    const g = parseInt(rgbValues[1]).toString(16).padStart(2, "0");
    const b = parseInt(rgbValues[2]).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
  }

  private ConvertNamedColorToHex(colorName: string) {
    const tempElement = document.createElement("div");
    tempElement.style.color = colorName;
    document.body.appendChild(tempElement);
    const color = getComputedStyle(tempElement).color;
    document.body.removeChild(tempElement);
    if (color === "rgb(0, 0, 0)") {
      this.errorMassage = "Invalid named color";
    }
    return color;
  }

  private convertHexToRgb(hex: string) {
    if (hex.charAt(0) === "#") {
      hex = hex.slice(1);
    }
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    } else if (hex.length !== 6) {
      this.errorMassage = "Invalid hexadecimal color";
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  private isNamedColor(color: string) {
    const namedColors = [
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
    ];
    return namedColors.includes(color.toLowerCase());
  }

  private generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  get ErrorMessage() {
    return this.errorMassage;
  }

  get color() {
    return this.convertRgbToHex(this.rgbColor);
  }

  get tetrad(): Tetrad {
    const rgb = this.rgbColor;
    this.checkRgb(rgb);
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
    this.checkRgb(rgb);
    const rgbValues = rgb.match(/\d+/g)!;
    const r = parseInt(rgbValues[0]);
    const g = parseInt(rgbValues[1]);
    const b = parseInt(rgbValues[2]);
    const shade1 = `rgb(${r - 50}, ${g - 50}, ${b - 50})`;
    const shade2 = `rgb(${r - 100}, ${g - 100}, ${b - 100})`;
    const shade3 = `rgb(${r - 150}, ${g - 150}, ${b - 150})`;
    const shade4 = `rgb(${r - 200}, ${g - 200}, ${b - 200})`;
    return [
      this.convertRgbToHex(shade4),
      this.convertRgbToHex(shade3),
      this.convertRgbToHex(shade2),
      this.convertRgbToHex(shade1),
      this.convertRgbToHex(rgb),
    ];
  }

  get triad(): Triad {
    const rgb = this.rgbColor;
    this.checkRgb(rgb);
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
    this.checkRgb(rgb);
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
    this.checkRgb(rgb);
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
