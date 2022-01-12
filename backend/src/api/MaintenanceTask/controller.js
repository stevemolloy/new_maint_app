import { success, notFound } from '../../services/response/'
import { MaintenanceTask } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  MaintenanceTask.create(body)
    .then((maintenanceTask) => maintenanceTask.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  MaintenanceTask.find(query, select, cursor)
    .then((maintenanceTasks) => maintenanceTasks.map((maintenanceTask) => maintenanceTask.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  MaintenanceTask.findById(params.id)
    .then(notFound(res))
    .then((maintenanceTask) => maintenanceTask ? maintenanceTask.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  MaintenanceTask.findById(params.id)
    .then(notFound(res))
    .then((maintenanceTask) => maintenanceTask ? Object.assign(maintenanceTask, body).save() : null)
    .then((maintenanceTask) => maintenanceTask ? maintenanceTask.view(true) : null)
    .then(success(res))
    .catch(next)
