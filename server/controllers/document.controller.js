import { Document } from "../models/document.model.js";

const addDocument = async (req, res) => {
    try {
        const { fileName, fileType, startTime, endTime, environment, reviewStatus } = req.body;

        if (!fileName || !fileType || !environment || !reviewStatus) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const document = new Document({
            fileName,
            fileType,
            startTime,
            endTime,
            environment,
            reviewStatus
        });

        await document.save();
        res.status(201).send({ message: "Document added successfully" });

    } catch (error) {
        console.log("error in adding document", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const getDocuments = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const documents = await Document.find().skip(skip).limit(limit);
        const totalDocuments = await Document.countDocuments();
        const totalPages = Math.ceil(totalDocuments / limit);

        res.status(200).send({ documents, totalPages });
    } catch (error) {
        console.log("error in retrieving documents", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const calculateDocuments = async (req, res) => {
    try {
        const pendingCount = await Document.countDocuments({ reviewStatus: "Pending" });
        // Count documents with status "Completed"
        const completedCount = await Document.countDocuments({ reviewStatus: "Completed" });
        // Count documents with status "Rejected"
        const rejectedCount = await Document.countDocuments({ reviewStatus: "Rejected" });

        res.status(200).send({
            Pending: pendingCount,
            Completed: completedCount,
            Rejected: rejectedCount,
        });
    } catch (error) {
        console.log("error in calculating documents", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

const lastUpdatedAt = async (req, res) => {
    try {
        // Get the last updated time from your documents
        const lastUpdatedDoc = await Document.findOne().sort({ updatedAt: -1 });
        const lastUpdatedTime = lastUpdatedDoc ? lastUpdatedDoc.updatedAt : null;
        return res.status(200).send({ lastUpdated: lastUpdatedTime });
    } catch (error) {
        console.log("error in retrieving documents", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

export { addDocument, getDocuments, calculateDocuments, lastUpdatedAt };