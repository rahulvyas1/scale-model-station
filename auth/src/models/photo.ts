import mongoose from 'mongoose'
import { Password } from '../services/password';
import shortid from 'shortid';
import { userSchema } from './user'
// An interface that describes the properties
// that are required to create a new Photo
interface photoAttrs {
    user: string;
    url: string;
}

// An interface that describes the properties
// that a photo model has
interface PhotoModel extends mongoose.Model<PhotoDoc> {
    build(attrs: photoAttrs): PhotoDoc;
}


// An interface that describes the properties
// that a photo document has
interface PhotoDoc extends mongoose.Document {
    user: string;
    url: string;
}

const photoSchema = new mongoose.Schema({
    user: {
        type: userSchema,
        required: true
    },
    url: {
        type: String,
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


photoSchema.statics.build = (attrs: photoAttrs) => {
    return new Photo(attrs)
}

const Photo = mongoose.model<PhotoDoc, PhotoModel>('Photo', photoSchema)


export { Photo, photoSchema }