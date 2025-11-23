export function stripHtmlTags(html: string): string {
  if (!html) return '';
  
  // Create a temporary div to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Return only the text content
  return temp.textContent || temp.innerText || '';
}