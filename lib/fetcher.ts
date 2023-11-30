import axios from "axios"

export const getComments = async () => {
    const res = await axios.get(`/api/comments`);
    return res.data;

}



export const addComment = async ({ comment, userId, commentId }: { comment: string, userId: string, commentId: string }) => {
    const res = await axios.post(`/api/comments`, { comment, userId, commentId });
    return res.data;
}

export type Comment = {
    comment:string;
    commentId:string;
    postDate:Date;
    userId:string


}