export function getPreview(text: string): string {
  const maxLength = 128;
  const maxLines = 7;
  let shorten = false;
  const lines = text.split("\n");
  if (lines.length > maxLines) {
    text = lines.slice(0, maxLines).join("\n");
    shorten = true;
  }
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
    shorten = true;
  }
  return shorten ? `${text}...` : text;
}
