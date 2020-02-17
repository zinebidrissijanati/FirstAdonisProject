'use strict'
const Task = use('App/Models/Task')

class TaskController {
  async index({ response }) {
    const tasks = await Task.find({})
    return response.json(tasks)
  }

  async store({ request, response }) {
    // persist to database
    const task = new Task()
    task.title = request.input('title')
    await task.save()
    return response.json(task)
  }
  async delete({ params, response }) {
    const id = params.id
    Task.deleteOne({ _id: id }, function (err) { });

    return response.json(null)
  }
  async update({ params, request, response }) {
    const id = params.id
    const titre = request.input('title')
    const task = await Task.findOneAndUpdate({ _id: id }, { title: titre }, { new: true })
    return response.json(task)
  }
  async show({ params, response }) {
    const id = params.id
    const task = await Task.findById(id, function (err, task) { });
    return response.json(task)
  }
}

module.exports = TaskController
