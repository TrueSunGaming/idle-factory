const start = [
    "",
    "m",
    "b",
    "tr",
    "quadr",
    "quint",
    "sext",
    "sept",
    "oct",
    "non"
];

const first = [
    "",
    "un",
    "duo",
    "tre",
    "quattour",
    "quin",
    "sex",
    "septen",
    "octo",
    "novem"
];

const second = [
    "",
    "dec",
    "vigint",
    "trigint",
    "quadragint",
    "quinquagint",
    "sexagint",
    "septuagint",
    "octogint",
    "nonagint"
];

const third = [
    "",
    "cent"
];

export function formatNumber(x: number): string {
    let neg: boolean = x < 0;
    if (neg) x = Math.abs(x);
    x = Math.floor(x);

    if (x < 1e3) return `${neg ? "-" : ""}${x}`;
    if (x < 1e6) return `${neg ? "-" : ""}${x.toLocaleString()}`;
    if (x > Number.MAX_VALUE) return `${neg ? "-" : ""}Infinity`;

    const idx: number = x.toLocaleString("en-us").split(",").length - 2;

    if (idx < 10) return `${neg ? "-" : ""}${(x / (1000 ** (idx + 1))).toFixed(3)} ${start[idx]}illion`;
    const ones = idx % 10;
    const tens = Math.floor((idx % 100) / 10);
    if (idx < 100) return `${neg ? "-" : ""}${(x / (1000 ** (idx + 1))).toFixed(3)} ${first[ones]}${second[tens]}illion`;
    const hund = Math.floor((idx % 1000) / 100);
    return `${neg ? "-" : ""}${(x / (1000 ** (idx + 1))).toFixed(3)} ${first[ones]}${second[tens]}${third[hund]}illion`;
}