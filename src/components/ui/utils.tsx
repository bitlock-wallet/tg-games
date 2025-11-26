export function cn(...inputs: any[]) {
  return inputs
    .flat()
    .filter((v) => typeof v === 'string' && v.length > 0)
    .join(' ');
}
