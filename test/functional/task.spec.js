'use strict'

const { test, trait} = use('Test/Suite')('Task')
const Task = use('App/Models/Task')
trait('Test/ApiClient')
test('get list of tasks', async ({ client }) => {
  await Task.create({
    title: 'task testing'
  })

  const response = await client.get('/tasks').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    title: 'task testing'
  }])
})
test('add a task', async ({ client }) => {
  await client.post('/tasks').send({
    title: 'task testing post method'
  }).end()
  const response = await client.get('/tasks').end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    title: 'task testing post method'
  }])
})
test('update a task', async ({ client }) => {
  await client.put('/tasks/5e4acd052e3cd126200f4b2d').send({
    title: 'task testing put method'
  }).end()
  const response = await client.get('/tasks').end()
  response.assertStatus(200)
  response.assertJSONSubset([{
    title: 'task testing put method'
  }])
})

