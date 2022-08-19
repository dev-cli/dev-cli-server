module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    package: { type: String },
  });

  return mongoose.model('Project', UserSchema);
};
