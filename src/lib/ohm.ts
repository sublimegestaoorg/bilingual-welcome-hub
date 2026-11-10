export type OhmKey = "v" | "i" | "r" | "p";

/** Given any two of V, I, R, P, compute all four. */
export function solveOhm(k: Partial<Record<OhmKey, number>>): Record<OhmKey, number> {
  let { v, i, r, p } = k;
  if (v != null && i != null) { r = v / i; p = v * i; }
  else if (v != null && r != null) { i = v / r; p = (v * v) / r; }
  else if (v != null && p != null) { i = p / v; r = (v * v) / p; }
  else if (i != null && r != null) { v = i * r; p = i * i * r; }
  else if (i != null && p != null) { v = p / i; r = p / (i * i); }
  else if (r != null && p != null) { v = Math.sqrt(p * r); i = Math.sqrt(p / r); }
  return { v: v ?? NaN, i: i ?? NaN, r: r ?? NaN, p: p ?? NaN };
}
