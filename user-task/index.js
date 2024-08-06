import { Task } from './task.js'
import { User } from './user.js'

const task = new Task()
const user = new User(task)

user.do()
