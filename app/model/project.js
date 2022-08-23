module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    package: { type: String },
    name: { type: String },
    version: { type: String },
    type: { type: String },
    installCommand:{ type: String },
    startCommand:{ type: String },
  });

  return mongoose.model('Project', UserSchema);
};
