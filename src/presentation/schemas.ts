import { t } from "elysia"

export const CommentResponseSchema = t.Object({
    success: t.Boolean(),
    message: t.String(),
    content: t.Object({
        id: t.String(),
        postId: t.String(),
        content: t.String()
    })
})

export const CommentParamsSchema = t.Object({
    id: t.String()
})

export const CommentBodySchema = t.Object({
    content: t.String()
})
