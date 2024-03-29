import {NextRequest, NextResponse} from "next/server";
import client from "@/prisma/client";
import {issueSchema, patchIssueSchema} from "@/app/validationSchemas";
import checkSession from "@/app/auth/checkSession";

export async function PATCH(request: NextRequest, {params}: { params: { id: string } }) {
    try {
        if (!await checkSession(request)) {
            return NextResponse.json({
                message: "You are not authenticated",
                success: false
            }, {status: 401});
        }

        const body = await request.json();
        const {title, description, status, assigneeId} = body;
        const valid = patchIssueSchema.safeParse({title, description, status});

        if (!valid.success) {
            return NextResponse.json({message: "Invalid data", errors: valid.error.format(), success: false}, {status: 400});
        }

        if (assigneeId) {
            const user = await client.user.findUnique({
                where: {
                    id: assigneeId
                }
            });
            if (!user) {
                return NextResponse.json({message: "Assignee not found", success: false}, {status: 404});
            }
        }

        const issue = await client.issue.findUnique({
            where: {
                id: Number(params.id)
            }
        });
        if (!issue) {
            return NextResponse.json({message: "Issue not found", success: false}, {status: 404});
        }

        const updatedIssue = await client.issue.update({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                description,
                status,
                // @ts-ignore
                assigneeId
            }
        })

        return NextResponse.json({message: "Issue updated", success: true, issue: updatedIssue}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({message: "Something went wrong", error: error.message, success: false}, {status: 500});
    }

}

export async function DELETE(request: NextRequest, {params}: { params: { id: string } }) {
    try {
        if (!await checkSession(request)) {
            return NextResponse.json({
                message: "You are not authenticated",
                success: false
            }, {status: 401});
        }

        const issue = await client.issue.findUnique({
            where: {
                id: Number(params.id)
            }
        });
        if (!issue) {
            return NextResponse.json({message: "Issue not found", success: false}, {status: 404});
        }

        await client.issue.delete({
            where: {
                id: Number(params.id)
            }
        })

        return NextResponse.json({message: "Issue deleted", success: true}, {status: 200});
    } catch (error: any) {
        return NextResponse.json({message: "Something went wrong", error: error.message, success: false}, {status: 500});
    }
}