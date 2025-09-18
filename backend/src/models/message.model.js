import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  senderId : {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId : {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  image: {
    type: String
  },
  text: {
    type: String
  }
},{timestamps: true});

const Message = mongoose.model('Message', MessageSchema);

export default Message;