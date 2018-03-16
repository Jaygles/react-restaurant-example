export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export function uppAndPlu(string) {
  return `${string.charAt(0).toUpperCase() + string.slice(1)}s`;
}
