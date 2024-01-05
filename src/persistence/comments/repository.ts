import { ICommentEntity } from './entity';
import { commentStorage } from '../../infrastructure/database';

interface ICommentRepository {
    saveComment: (comment: ICommentEntity) => void
    findCommentById: (commentId: string) => ICommentEntity | undefined
    findCommentsByPostId: (postId: string) => ICommentEntity[] | undefined
}

const findCommentById = (commentId: string): ICommentEntity | undefined => {
    return commentStorage.find((comment, _) => comment.id === commentId)
}

const findCommentsByPostId = (postId: string): ICommentEntity[] | undefined => {
    return commentStorage.filter((comment, _) => comment.postId === postId)
}

const saveComment = (comment: ICommentEntity) => {
    commentStorage.push(comment)
}

export const commentRepository: ICommentRepository = {
    saveComment,
    findCommentById,
    findCommentsByPostId
}