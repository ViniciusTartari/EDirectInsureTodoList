const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
  async createTask(request, response) {
    const task = await Task.create(request.body);

    return response.json(task);
  },

  async readAllTasks(request, response) {
    const tasks = await Task.find();

    return response.json(tasks);
  },

  async readProjectTasks(request, response) {
    const tasks = await Task.find({ projectId: request.params.id });

    return response.json(tasks);
  },

  async updateTask(request, response) {
    const task = await Task.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    return response.json(task);
  },

  async deleteTask(request, response) {
    await Task.findByIdAndDelete(request.params.id);

    return response.status(200).send();
  },
};
