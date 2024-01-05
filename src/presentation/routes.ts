import Elysia from "elysia";
import { CommentBodySchema, CommentParamsSchema, CommentResponseSchema } from "./schemas";
import { commentService } from "../application/comments/service";

export const commentsByPost = new Elysia()
    .model({
        commentresponse: CommentResponseSchema,
        commentparams: CommentParamsSchema,
        commentbody: CommentBodySchema
    })
    .get('/posts/:id/comment', ({ params }) => {
        const postId = params.id
        const comments = commentService.getCommentsByPostId(postId)

        return comments
    }, {
        params: 'commentparams'
    })
    .post('/posts/:id/comment', ({ params, body, set }) => {
        const commentId = crypto.randomUUID();
        const { content } = body
        const postId = params.id

        const newComment = { id: commentId, postId, content }

        commentService.createComment(newComment)

        set.status = 201;

        return {
            success: true,
            message: `Comment was succesfully posted.`,
            content: newComment
        }
    }, {
        body: 'commentbody',
        params: 'commentparams',
        response: 'commentresponse'
    })
