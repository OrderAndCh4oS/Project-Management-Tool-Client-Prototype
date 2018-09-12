import { schema } from 'normalizr';

export const client = new schema.Entity('clients', {}, {idAttribute: 'uuid'});
export const arrayOfClients = new schema.Array(client);

export const address = new schema.Entity('addresses', {},
    {idAttribute: 'uuid'});
export const arrayOfAddresses = new schema.Array(address);

export const company = new schema.Entity('companies', {},
    {idAttribute: 'uuid'});
export const arrayOfCompanies = new schema.Array(company);

export const status = new schema.Entity('status', {}, {idAttribute: 'uuid'});
export const arrayOfStatus = new schema.Array(status);

export const statusGroup = new schema.Entity('statusGroup',
    {}, {idAttribute: 'uuid'});

export const project = new schema.Entity('projects', {}, {idAttribute: 'uuid'});
export const arrayOfProjects = new schema.Array(project);

export const staff = new schema.Entity('staff', {}, {idAttribute: 'uuid'});
export const arrayOfStaff = new schema.Array(staff);

export const user = new schema.Entity('users', {}, {idAttribute: 'uuid'});
export const arrayOfUsers = new schema.Array(user);

export const job = new schema.Entity('jobs', {}, {idAttribute: 'uuid'});
export const arrayOfJobs = new schema.Array(job);

export const workDay = new schema.Entity('workDays', {}, {idAttribute: 'uuid'});
export const arrayOfWorkDays = new schema.Array(workDay);

export const scheduledTask = new schema.Entity('scheduledTasks',
    {}, {idAttribute: 'uuid'});
export const arrayOfScheduleTasks = new schema.Array(scheduledTask);
