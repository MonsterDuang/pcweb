import crypto from 'crypto-js'

export function aesEncode(str, iv, secretKey) {
    if (!iv) throw new Error('iv is must be a required')
    if (!secretKey) throw new Error('secretKey is must be a required')
    secretKey = crypto.enc.Utf8.parse(secretKey);
    iv = crypto.enc.Utf8.parse(iv);
    var encrypted = crypto.AES.encrypt(str, secretKey, {
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
    });
    encrypted = encrypted.ciphertext.toString(crypto.enc.Base64);
    return encrypted
}