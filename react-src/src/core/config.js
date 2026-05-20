/**
 * IRIA Platform Configuration and Utilities
 */

export const PLATFORM_CONFIG = {
  appName: "IRIA SUMMIT BRASIL",
  year: "2026",
  countryCode: "BRA",
  defaultCityCode: "CWB", // Curitiba
  verifyDomain: "verify.iriasummit.com",
};

/**
 * Generates an IRIA-ID matching the format: BRA-CWB-2026-XXXXXX
 * @param {number|string} seq - Sequence number
 * @param {string} cityCode - City code (CWB, POA, SSA)
 * @returns {string}
 */
export function generateIriaId(seq, cityCode = PLATFORM_CONFIG.defaultCityCode) {
  const cleanSeq = String(seq).padStart(6, '0');
  const city = String(cityCode).toUpperCase();
  return `${PLATFORM_CONFIG.countryCode}-${city}-${PLATFORM_CONFIG.year}-${cleanSeq}`;
}

/**
 * Validates an IRIA-ID string
 * @param {string} id 
 * @returns {boolean}
 */
export function validateIriaId(id) {
  const pattern = /^BRA-(CWB|POA|SSA)-2026-\d{6}$/i;
  return pattern.test(id);
}
