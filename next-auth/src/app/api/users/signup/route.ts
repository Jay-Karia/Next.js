import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import {NextRequest, NextResponse} from "next/server";
// @ts-ignore
import bcryptjs from "bcryptjs";


connect().then(async () => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {username, email, password} = body.body

        // check if the user exists
        const user = await User.findOne({email: email})
        if (user) {
            return NextResponse.json({msg: "User already exists"}, {status: 200})
        }

        // hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const savedUser = await new User({
            username: username,
            email: email,
            password: hashedPassword,
        } as any).save()

        return NextResponse.json({
            msg: "User created successfully",
            status: 200,
            savedUser: savedUser,
            success: true
        })


    } catch (error: any) {
        return NextResponse.json({msg: error.message , success: false}, {status: 200})
    }
}