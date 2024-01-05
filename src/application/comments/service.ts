import { ICommentEntity } from "../../persistence/comments/entity"
import { commentRepository } from "../../persistence/comments/repository"

interface ICommentService {
    getCommentsByPostId: (postId: string) => ICommentEntity[] | undefined
    createComment: (comment: ICommentEntity) => void
}

const getCommentsByPostId = (postId: string): ICommentEntity[] | undefined => {
    const comment = commentRepository.findCommentsByPostId(postId)

    return comment
}

const createComment = (comment: ICommentEntity) => {
    commentRepository.saveComment(comment)
}

export const commentService: ICommentService = {
    createComment,
    getCommentsByPostId
}
