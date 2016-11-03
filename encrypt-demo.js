var crypto = require('crypto-js');

var secretMsg = {
	name : 'Bond',
	secreteName : '007'
};
var secretKey = '123abc';

//Encrypt
var encryptedMsg = crypto.AES.encrypt(JSON.stringify(secretMsg),secretKey);
console.log('Encrypted Msg:' + encryptedMsg);

//Decrypt;
var bytes = crypto.AES.decrypt(encryptedMsg, secretKey);
var decryptedMsg = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Msg:' + decryptedMsg.name + ' ' + secretMsg.secreteName);