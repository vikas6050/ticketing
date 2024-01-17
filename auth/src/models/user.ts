import mongoose from "mongoose";

// an interface that describe the properties
// to provide new users

interface UserAttrs {
  email: string;
  password: string;
}

// interface that describe the properties user model have

interface UserModel extends mongoose.Model<any> {
  build(attrs: UserAttrs): any;
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
const User = mongoose.model<any, UserModel>("User", userSchema);
User.build({
  email: "test@text.com",
  password: "password",
});
export { User };
