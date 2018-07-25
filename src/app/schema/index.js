import {schema} from 'normalizr';

export const client = new schema.Entity('clients');
export const arrayOfClients = new schema.Array(client);

export const address = new schema.Entity('addresses');
export const arrayOfAddresses = new schema.Array(address);

export const company = new schema.Entity('companies');
export const arrayOfCompanies = new schema.Array(company);

export const status = new schema.Entity('status');
export const arrayOfStatus = new schema.Array(status);

export const statusGroup = new schema.Entity('statusGroup');

export const project = new schema.Entity('projects');
export const arrayOfProjects = new schema.Array(project);

export const staff = new schema.Entity('staff');
export const arrayOfStaff = new schema.Array(staff);

export const user = new schema.Entity('users');
export const arrayOfUsers = new schema.Array(user);

export const todo = new schema.Entity('todos');
export const arrayOfTodos = new schema.Array(todo);

export const workDay = new schema.Entity('workDays');
export const arrayOfWorkDays = new schema.Array(workDay);

export const scheduledTask = new schema.Entity('scheduledTasks');
export const arrayOfScheduleTasks = new schema.Array(scheduledTask);
