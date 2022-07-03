const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const sendVerification = async (email, string) => {

    const myOAuth2Client = new OAuth2(
            process.env.GOOGLE_CLIENTID_MAIL,
            process.env.GOOGLE_SECRET_CLIENT,
            "https://developers.google.com/oauthplayground"
    )
    
    myOAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    })

    const accessToken = await myOAuth2Client.getAccessToken()
    const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                type: 'OAuth2',
                clientId: process.env.GOOGLE_CLIENTID_MAIL,
                clientSecret: process.env.GOOGLE_SECRET_CLIENT,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            },      
            tls: {  
                rejectUnauthorized: false
            }
        })

    const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'Verify your email',
        html: ` 
                <div>
                    <img src="https://www.canva.com/design/DAFFTxyXTsw/y6dq-fKKwxhx4ipSw9KXhw/edit?utm_content=DAFFTxyXTsw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt="logo" style="width:100%;">
                </div>
                <h1>Welcome to MyTinerary</h1>
                <p>Please click on the link below to verify your email</p>
                <a href="http://localhost:4000/api/user/verify/${string}">Verify</a>`
    }

    await transport.sendMail(mailOptions, (err, response) => {
        if(err){
            console.log(err)
        } else {
            console.log(`Please check your ${email} to verify your account`)
        }
    })
}

module.exports = sendVerification