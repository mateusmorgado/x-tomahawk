import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        },
        text: {
        type: String,
        max: 500,
        },
        img: {
        type: String,
        },
        likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        ],
        comments: [
        {
            user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            },
            text: {
            type: String,
            required: true,
            },
            // createdAt: {
            // type: Date,
            // default: new Date(),
            // },
        },
        ],
    },
    { timestamps: true }
    );

    const Post = mongoose.model("Post", postSchema);

    export default Post;