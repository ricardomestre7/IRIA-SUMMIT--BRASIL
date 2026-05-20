/**
 * Mock API services simulating backend CRUD operations and utilities
 */

/**
 * Simulates generating a SHA256 hash in JavaScript
 * @param {string} value 
 * @returns {string}
 */
export function generateHash(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Return pseudo-SHA256 representation
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  const part2 = Math.abs(hash * 31).toString(16).padStart(8, '0');
  const part3 = Math.abs(hash * 17).toString(16).padStart(8, '0');
  const part4 = Math.abs(hash * 7).toString(16).padStart(8, '0');
  return `${hex}${part2}${part3}${part4}`.padEnd(64, 'a').substring(0, 64);
}

/**
 * Helper to download mock data as a CSV file in browser
 * @param {Array} headers - Array of headers (strings)
 * @param {Array<Object>} rows - Array of objects containing row fields
 * @param {string} filename - Output name
 */
export function downloadCsv(headers, rows, filename = "iria-export.csv") {
  let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
  
  // Add headers
  csvContent += headers.join(",") + "\n";
  
  // Add rows
  rows.forEach(row => {
    const escapedRow = headers.map(header => {
      const cell = row[header] !== undefined && row[header] !== null ? String(row[header]) : "";
      const cleaned = cell.replace(/"/g, '""');
      return `"${cleaned}"`;
    });
    csvContent += escapedRow.join(",") + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link); // Required for FF
  
  link.click();
  document.body.removeChild(link);
}
