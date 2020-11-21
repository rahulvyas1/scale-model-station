import mongoose from 'mongoose'
import { Password } from '../services/password';
import { nanoid } from 'nanoid'
import { photoSchema } from './photo';
import {User, UserDoc} from './user';
// An interface that describes the properties
// that are required to create a new Post
interface postAttrs {
    postId: string;
    title: string;
    user: UserDoc;
    description?: string;
    photos: Array<string>;
}

// An interface that describes the properties
// that a post model has
interface PostModel extends mongoose.Model<PostDoc> {
    build(attrs: postAttrs): PostDoc;
}


// An interface that describes the properties
// that a post document has
interface PostDoc extends mongoose.Document {
    postId: string;
    title: string;
    user: string;
    description?: string;
    photos: Array<string>;
}

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    photos: {
        type: [String],
        required: true
    },
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v
            ret.id = ret._id
            delete ret._id
        }

    }
})


postSchema.statics.build = (attrs: postAttrs) => {
    return new Post(attrs)
}

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema)


export { Post }