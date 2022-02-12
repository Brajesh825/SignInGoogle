const express = require("express");
const app = express();

const { OAuth2Client } = require("google-auth-library");
const CLIENT_ID =
    "713660828924-ksog7katon41s8tjod2nudud918a5tfr.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

app.use(express.json());

app.get("/", async(req, res) => {
    const ticket = await client.verifyIdToken({
        idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4MmU0NTBhMzVhMjA4MWZhYTFkOWFlMWQyZDc1YTBmMjNkOTFkZjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzEzNjYwODI4OTI0LWtzb2c3a2F0b240MXM4dGpvZDJudWR1ZDkxOGE1dGZyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzEzNjYwODI4OTI0LWtzb2c3a2F0b240MXM4dGpvZDJudWR1ZDkxOGE1dGZyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1NDE0OTA1MjgwNjE1OTcxNjczIiwiZW1haWwiOiJ0ZXMyNzc2OUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjhpT3h5SWcwMXQySEFnVDFYVlNnVFEiLCJuYW1lIjoiVGVzdCBUZXMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKeXFpX3dnQ2tuUFRhZE5hdW1XWFQ3NmtEOFpxcm14VGozbllJZGQ9czk2LWMiLCJnaXZlbl9uYW1lIjoiVGVzdCIsImZhbWlseV9uYW1lIjoiVGVzIiwibG9jYWxlIjoiZW4tR0IiLCJpYXQiOjE2NDQ1MjI2MDEsImV4cCI6MTY0NDUyNjIwMSwianRpIjoiZWE0MmZmY2JlYTZiMTg4ODA5MWM5ZjE5NDNkOGRkNmI2NjRkNzcyOCJ9.F10YCeS0Rn9vwmE2KoMbTqUtt6Aci6ckZgsYofZlEjq41W1IUyomsb9EKeLIQBABi84pIoqgrDKYRU_GGrg43XpinL7Hy8mliq4qk_09gZ6lvDcDMG0euwu_xaZwjL8PjYr9HXy-2GalfSfmJJMYabPX6VCqtwNMMAE83A5xmHlA2wzVjsgD7RCzfeHJrMWn2M2rJslhkkWIgoAXua6tm_UPcd09a46AETQc8ihFJGsbYGG_BjSkY5iYaplIyPZVdHssMVI8eDawK6V1HNq-Np_1L3vEzGwqX4qEUyMDUgQAKrjq1kcO5FKz7sw139tppSjWHR66v96w6tObqsaHmw",
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    res.send(payload);
});

app.listen(4000, () => {
    console.log("Server started at 4000");
});