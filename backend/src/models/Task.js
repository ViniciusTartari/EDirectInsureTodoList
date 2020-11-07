const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Task', TaskSchema);
