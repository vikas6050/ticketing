import mongoose from "mongoose";

// an interface that describe the properties
// to provide new users

interface UserAttrs {
  email: string;
  password: string;
}

// interface that describe the properties user model have

interface UserModel extends mongoose.Model<Userdoc> {
  build(attrs: UserAttrs): Userdoc;
}

// interface that describe properties of documents have

interface Userdoc extends mongoose.Document {
  email: string;
  password: string;
}
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};
const User = mongoose.model<Userdoc, UserModel>("User", userSchema);
User.build({
  email: "test@text.com",
  password: "password",
});

export { User };
