export function cleanHtmlContent(html: string): string {
  if (!html) return '';
  
  // Only remove contentEditable data attributes, preserve everything else
  let cleaned = html.replace(/\s*data-[^=]*="[^"]*"/g, '');
  
  // Remove empty paragraphs and divs only
  cleaned = cleaned.replace(/<(p|div)(\s[^>]*)?>(\s|&nbsp;)*<\/(p|div)>/g, '');
  
  return cleaned.trim();
}