'use strict'
const Task = use('App/Models/Task')
const { test } = use('Test/Suite')('Tasks')

test('it should create a task when model is correct', async ({ assert }) => {
  // Arrange
  const task = new Task();
  task.title = 'Some Tittle';

  // Act
  const errors = task.validateSync();

  // Assert
  assert.isUndefined(errors, 'there was no error')
})
