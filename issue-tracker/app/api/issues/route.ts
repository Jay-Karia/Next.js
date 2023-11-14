import {NextResponse, NextRequest} from "next/server";
import {z} from "zod";
import client from "@/prisma/client";

const schema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(3).max(1000),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {title, description} = body;
        const valid = schema.safeParse({title, description});

        if (!valid.success) {
            return NextResponse.json({message: "Invalid data", errors: valid.error});
        }

        const newIssue = await client.issue.create({
            data: {
                title,
                description,
            }
        })

        return NextResponse.json({message: "Issue created", data: newIssue});
    } catch (error:any) {
        return NextResponse.json({message: "Something went wrong", error: error.message});
    }

}