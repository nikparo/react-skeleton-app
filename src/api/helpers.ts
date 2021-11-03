// Type guard for filtering out undefined values from arrays.
// https://stackoverflow.com/a/46700791/5909251
export function notEmpty<V>(value: V | null | undefined): value is V {
  return value != null;
}
