const mongoose = require('mongoose');

const Project = mongoose.model('Project');

module.exports = {
  async createProject(request, response) {
    const project = await Project.create(request.body);

    return response.json(project);
  },

  async readAllProjects(request, response) {
    const projects = await Project.find({ userId: request.body.userId });

    return response.json(projects);
  },

  async updateProject(request, response) {
    const project = await Project.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      },
    );
    return response.json(project);
  },

  async deleteProject(request, response) {
    await Project.findByIdAndDelete(request.params.id);

    return response.status(200).send();
  },
};
