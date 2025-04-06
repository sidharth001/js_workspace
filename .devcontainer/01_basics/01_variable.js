const accountId=143358
let accountEmail="sidharth@google.com"
var accountPassword= "12345"
accountCity ="Karnal"

// accountId=2 not allowed

accountEmail="sidharth001@gmail.com"
accountPassword="12334"
accountCity="Delhi"
let accountState
console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
