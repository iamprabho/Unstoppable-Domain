import UAuth from "@uauth/js"
const uauth = new UAuth({
    
        clientID: "d0cd0a69-d632-42b0-b421-c8f31a573735",
        redirectUri: "http://localhost:3000",
        scope: "openid wallet"
      
    
})
window.login = async() =>{
    try{
        const authorization = await uauth.loginWithPopup();
        const domainName = authorization.idToken.sub;
        const walletAddress = authorization.idToken.wallet_address;
        console.log("logged in");
        console.log("domain name:",domainName)
        console.log(authorization);
        console.log("ETH Wallet Address:",walletAddress);


    }catch(error){
        console.error(error);

    }

}
window.logout = async ()=>{
    await uauth.logout()
    console.log("logged out with unstopable");

}
