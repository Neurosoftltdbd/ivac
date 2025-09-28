import JavaScriptObfuscator from 'javascript-obfuscator';

/**
 * Obfuscate JavaScript code using javascript-obfuscator.
 * @param {string} code - The JavaScript code to obfuscate.
 * @returns {string} - The obfuscated JavaScript code.
 */
export function obfuscateJsCode(code) {
    const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75
    });
    return obfuscationResult.getObfuscatedCode();
}
