import { ICommentEntity } from "../persistence/entity"

export interface Comment {
    postId: string,
    id: string,
    content: string,
    // author: string
    create: (comment: ICommentEntity) => ICommentEntity
    update: ({ id, content }: { id: string, content: string }) => void
    delete: ({ id }: { id: string }) => void
}