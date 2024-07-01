// we cannot able to Update Const variable
const accountId=144553
// accountId=4789 // This is not Possible


let accountEmail="2001spati@gmail.com"
accountEmail="@gmail.com"

var accountPassword="12345"
accountPassword="71245"

let accountState
// If we not assogn any value to variable then JS took as Undefined

accountCity="Jaipur"
accountCity="Pune"
//we can use variable without datatypes also, but it is not good practice

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* NOTE: we do not use var because of issue in block spoce and functional scope */