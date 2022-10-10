const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // links: [{ type: Types.ObjectId, ref: 'Link' }],
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  phoneNumber: { type: String, require: false },
  hasPhone: { type: Boolean, require: true },
  files: { type: String },
  isActivated: {type: Boolean, default: false},
  activationCode: {type: String}
});

module.exports = model('User', schema);
