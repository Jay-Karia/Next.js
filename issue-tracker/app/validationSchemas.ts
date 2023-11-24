import {z} from "zod";

export const issueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255, 'Exceeded max length'),
    description: z.string().min(1, 'Description is required').max(1000, 'Exceeded max length'),
    status: z.enum(['OPEN', 'CLOSED', 'IN_PROGRESS']).default('OPEN'),
})

export const patchIssueSchema = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(255, 'Exceeded max length')
        .optional(),
    description: z
        .string()
        .min(1, 'Description is required')
        .max(1000, 'Exceeded max length')
        .optional(),
    assigneeId: z
        .string()
        .min(1, 'Assignee is required')
        .max(255, 'Exceeded max length')
        .optional()
        .nullable(),
});