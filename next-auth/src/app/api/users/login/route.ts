import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
// @ts-ignore
import jwt from "jsonwebtoken";
// @ts-ignore
import bcryptjs from "bcryptjs";

connect().then(async () => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

export async function POST(request: NextRequest) {
    try {
        const {body} = await request.json();
        const {email, password} = body

        // check if the user exists
        const user = await User.findOne({email: email})
        if (user) {
            // check if the password is correct
            const isPasswordCorrect = await bcryptjs.compare(password, user.password);
            if (isPasswordCorrect) {
                // creating a token
                const tokenData = {
                    id: user._id,
                    email: user.email,
                    username: user.username,
                }

                const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1h"})

                const response = NextResponse.json({
                    msg: "User logged in successfully",
                    status: 200,
                    success: true
                })
                response.cookies.set("token", token, { httpOnly: true})

                return response


            } else {
                return NextResponse.json({msg: "Password is incorrect", success: false}, {status: 200})
            }

        } else {
            return NextResponse.json({msg: "User does not exist"}, {status: 200})
        }

    } catch (error: any) {
        return NextResponse.json({error: error.message, msg: "Some internal error occurred" , success: false}, {status: 400})
    }
}