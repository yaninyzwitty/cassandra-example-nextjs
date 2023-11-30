import cassandraDb from "@/cassandra";
import { NextResponse } from "next/server";

export async function GET (res:Response) {
    try {

        const query = `select user_id, comment_id, comment, dateOf(post_id) AS post_date from comments`;

        const result = await cassandraDb.execute(query, [], { prepare: true });

        const data = result.rows.map(row => ({
            userId: row.user_id.toString(),
            commentId: row.comment_id.toString(),
            comment: row.comment,
            postDate: row.post_date

        }));


        return NextResponse.json(data);


        
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
        
    }

}
export async function POST (req:Request, res:Response) {
    try {
        const { comment, commentId, userId  } = await req.json();

        if(!comment || !commentId || !userId) {
            return new NextResponse('Missing data', { status: 400 })
        }


        const insetQuery = `INSERT INTO comments (comment_id, comment, user_id, post_id) VALUES (?, ?, ?, NOW())`;
        const params = [commentId, comment, userId];

        await cassandraDb.execute(insetQuery, params, { prepare: true })
        .then(() => console.log("dATA INSERTED succesfully😂"))
        .catch((err) => console.log(err));

        return NextResponse.json({
            commentId,
            comment,
            userId
        })
        


      


        
    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
        
    }

}