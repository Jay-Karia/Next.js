import {NextResponse, NextRequest} from "next/server";
import {z} from "zod";
import client from "@/prisma/client";

const schema = z.object({
    title: z.string().min(1, 'Title is required').max(255, 'Exceeded max length'),
    description: z.string().min(1, 'Description is required').max(1000, 'Exceeded max length'),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {title, description} = body;
        const valid = schema.safeParse({title, description});

        if (!valid.success) {
            return NextResponse.json({message: "Invalid data", errors: valid.error, success: false}, {status: 400});
        }

        const newIssue = await client.issue.create({
            data: {
                title,
                description,
            }
        })

        return NextResponse.json({message: "Issue created", data: newIssue, success: true}, {status: 200});
    } catch (error:any) {
        return NextResponse.json({message: "Something went wrong", error: error.message, success: false}, {status: 500});
    }

}