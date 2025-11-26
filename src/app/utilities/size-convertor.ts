export function toLineHeight(percent:any) {
  let p = parseInt(percent);

  if (isNaN(p)) return "1.2"; // default fallback
  if (p < 80) p = 80; // avoid text overlapping (min 0.8)
  if (p > 200) p = 200; // max safety

  return (p / 100).toFixed(2); // convert to CSS unitless
}

export function fontSizeResponsive(size:any) {
  let s = parseInt(size);

  if (s < 10) s = 10; // min size
  if (s > 200) s = 200; // max safe size

  const min = Math.round(s * 0.6);

  return `clamp(${min}px, ${s / 10}vw, ${s}px)`;
}

export function fontWeightValid(weight:any) {
  const w = parseInt(weight);

  if ([100,200,300,400,500,600,700,800,900].includes(w)) {
    return w;
  }

  return 400; // default safe fallback
}
