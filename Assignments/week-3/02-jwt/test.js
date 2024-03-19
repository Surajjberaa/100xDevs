const jwt = require('jsonwebtoken');
const zod = require("zod")
const jwtPassword = 'secret';



function signJwt(username, password) {
    // Your code here
    const usernameSchema = zod.string().email();
    const passwordSchema = zod.string().min(6);

    const email = usernameSchema.safeParse(username)
    const pass = passwordSchema.safeParse(password)
    // console.log(email);
    // console.log(password);
    if (!email.success || !pass.success) {
        return null
    }else{
        const userJwt = jwt.sign({username}, jwtPassword)
        console.log(userJwt);
    }

}

const token = signJwt("kirat@gmail.com", "12gfd67")
const decode = jwt.decode(token)
console.log(decode.username);

function decodeJwt(token) {
    // Your code here
    const decode = jwt.decode(token);
    if (!decode) {
        console.log(false);
        return false
    }else{
        console.log(true);
        return true
    }
}

// decodeJwt("eyJhbGciOiJIUzI1NiJ9.YmVyYTIwMDRAZ21haWwuY29t._QH2iXG_Kn5ogUnOWOlITiAly0OcPR_Wo2LaR2vzZGU")


function verifyJwt(token) {
    // Your code here
    let verified = true
    try{
        jwt.verify(token, jwtPassword)

    }catch(e){
        verified = false
    }
    return verified
}

// verifyJwt("eyJhbGciOiJIUzI1NiJ9.YmVyYTIwMDRAZ21haWwuY29t._QH2iXG_Kn5ogUnOWOlITiAly0OcPR_Wo2LaR2vzZGU")