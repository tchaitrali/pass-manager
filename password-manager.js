console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
	username: 'Chaitrali',
	balance: 1000
},
{
	username: 'ABC',
	balance: 2000
}]);

var accounts = storage.getItemSync('accounts');
//console.log(accounts)

//push on new accounts
accounts.push({
	username: 'Jen',
	balance:75
});

//save using setTemSync
storage.setItemSync('accounts', accounts);
console.log(accounts)
