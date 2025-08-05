import { Schema, model } from "mongoose";

const documentSchema = new Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileType: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: String,
        default: "..."
    },
    reviewStatus: {
        type: String,
        enum: ["Pending", "Completed", "Rejected"],
        default: "Pending"
    },
    environment: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Document = model("Document", documentSchema);