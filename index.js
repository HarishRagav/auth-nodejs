function verify() {

    const userref = "harish";
    const userpass = "123456a";

    const username = document.getElementById("userid").value;
    const password = document.getElementById("usercode").value;
    if (userref == username && userpass == password){
        alert("connection granted");
    }
    else{
            if(userref != username){
                alert("incorrect username");
            }
            else{
                alert("incorrect password");
            }
        }
}