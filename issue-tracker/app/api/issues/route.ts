import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";
import {issueSchema} from "@/app/validationSchemas";

export async function POST(request: NextRequest) {
    // try {
        const body = await request.json();
        const {title, description, status} = body;
        const valid = issueSchema.safeParse({title, description, status});
        if (!valid.success) {
            return NextResponse.json({message: "Invalid data", errors: valid.error.format(), success: false}, {status: 400});
        }

        const newIssue = await client.issue.create({
            data: {
                title,
                description,
                status
            }
        })

        return NextResponse.json({message: "Issue created", data: newIssue, success: true}, {status: 200});
    // } catch (error:any) {
    //     return NextResponse.json({message: "Something went wrong", error: error.message, success: false}, {status: 500});
    // }

}