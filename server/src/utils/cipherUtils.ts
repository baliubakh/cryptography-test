class CipherUtils {
  caesarEncrypt(message: string, shift: number) {
    message = message.toUpperCase();
    return message.replace(/[A-Z]/g, rot);

    function rot(correspondance: string) {
      const charCode = correspondance.charCodeAt(0);
      //A = 65, Z = 90
      return String.fromCharCode(
        charCode + shift <= 90
          ? charCode + shift
          : ((charCode + shift) % 90) + 64
      );
    }
  }

  xorEncrypt(message: string, key: string) {
    let result = "";
    while (key.length < message.length) {
      key += key;
    }
    for (let i = 0; i < message.length; i++) {
      const value1 = message[i].charCodeAt(0);
      const value2 = key[i].charCodeAt(0);

      const xorValue = value1 ^ value2;

      let xorValueAsHexString = xorValue.toString(16);

      if (xorValueAsHexString.length < 2) {
        xorValueAsHexString = "0" + xorValueAsHexString;
      }

      result += xorValueAsHexString;
    }
    return result;
  }
}

export const cipherUtils = new CipherUtils();
