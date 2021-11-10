import CryptoJS from 'crypto-js'

describe('Crypto', () => {
  it('Crypto should use keyHex and passwd as plaintext', () => {
    const key = 'Dsd230C3'
    const passwd = 'Ab123456'
    const keyHex = CryptoJS.enc.Utf8.parse(key) // convert key to hex
    const encryptObj = CryptoJS.DES.encrypt(passwd, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    })

    const ciphertext = encryptObj.ciphertext
    const ciphertextBase64Format = ciphertext.toString(CryptoJS.enc.Base64)
    expect(encryptObj.toString()).toBe(ciphertextBase64Format)
    // 此结果来源于 http://tool.chacuo.net/cryptdes：ECB模式，pkcs5padding填充，输出base64，字符集utf8
    expect(ciphertextBase64Format).toBe('8qKvnz70RLPT1fbM0TMJEw==')

    const ciphertextOpenSSLFormat = ciphertext.toString()
    // 此结果来源于 http://tool.chacuo.net/cryptdes：ECB模式，pkcs5padding填充，输出hex，字符集utf8
    expect(ciphertextOpenSSLFormat).toBe('f2a2af9f3ef444b3d3d5f6ccd1330913')
  })
})
