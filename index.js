let password=[];
password.push("Password 1","Password123 2","Password 3")
console.log(password)
for(let i=0;i<password.length;i++){
    password[i]=password[i].toLowerCase();
    let passwordchek=(password[i].length >= 8) ? "strong" : "weak";
    console.log("password is "+passwordchek);
    let numberletter = password[i].replace(/\s+/g, '');//თუ გვაქვს სადმე სფეისი წაშლის და ამის შემდეგ ასოების რაოდენობა იქნება სიგრძის ტოლი
    let numberletter_1 = numberletter.length;
    console.log(`Password: "${password[i]}", number of letter: ${numberletter_1}`);
}

password.shift();//Remove the first password from the array using shift() and print the updated array.
console.log(password)
password.unshift("strongpassword");//Add a new password to the beginning of the array using unshift() and print the updated array.
console.log(password)



