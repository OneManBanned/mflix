import clientPromise from "../../../lib/mongodb"
import { ObjectId } from "mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");

        const { id } = req.query
        const oid = new ObjectId(id)

        const movie = await db
            .collection("movies")
            .findOne({ _id: oid })

        console.log(movie.title)
        res.json(movie);
    } catch (e) {
        console.log(e)
    }
};