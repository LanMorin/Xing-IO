import dbConnect from "../../../lib/dbConnect";
import Tab from "../../../models/Tab"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
    // try {
    //     const { title, category } = req.body;
    //     console.log('Connecting to MongoDB');
    //     await dbConnection();
    //     console.log('Connected to MongoDB');
    
    //     console.log('Creating document');
    //     const tab = await Tab.find(req.body);
    //     console.log('Created document');
    
    //     res.json({ tab });    
    // } catch (error) {
    //     console.log(error);
    //     res.json({error})
    // }


    const { method } = req;
    dbConnect();
    if (method === "GET") {
        try {
        const models = await Tab.find();
        res.status(200).json(models);
        } catch (err) {
        res.status(500).json(err);
        }
  }

}
