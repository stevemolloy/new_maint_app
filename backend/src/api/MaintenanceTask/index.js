import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update } from './controller'
import { schema } from './model'
export MaintenanceTask, { schema } from './model'

const router = new Router()
const { datetime, reporter, fixer, where, task, starttime, endtime, approved, week_number, archived, done } = schema.tree

/**
 * @api {post} /MaintenanceTasks Create maintenance task
 * @apiName CreateMaintenanceTask
 * @apiGroup MaintenanceTask
 * @apiParam datetime Maintenance task's datetime.
 * @apiParam reporter Maintenance task's reporter.
 * @apiParam fixer Maintenance task's fixer.
 * @apiParam where Maintenance task's where.
 * @apiParam task Maintenance task's task.
 * @apiParam starttime Maintenance task's starttime.
 * @apiParam endtime Maintenance task's endtime.
 * @apiParam approved Maintenance task's approved.
 * @apiParam week_number Maintenance task's week_number.
 * @apiParam archived Maintenance task's archived.
 * @apiParam done Maintenance task's done.
 * @apiSuccess {Object} maintenanceTask Maintenance task's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Maintenance task not found.
 */
router.post('/',
  body({ datetime, reporter, fixer, where, task, starttime, endtime, approved, week_number, archived, done }),
  create)

/**
 * @api {get} /MaintenanceTasks Retrieve maintenance tasks
 * @apiName RetrieveMaintenanceTasks
 * @apiGroup MaintenanceTask
 * @apiUse listParams
 * @apiSuccess {Object[]} maintenanceTasks List of maintenance tasks.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /MaintenanceTasks/:id Retrieve maintenance task
 * @apiName RetrieveMaintenanceTask
 * @apiGroup MaintenanceTask
 * @apiSuccess {Object} maintenanceTask Maintenance task's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Maintenance task not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /MaintenanceTasks/:id Update maintenance task
 * @apiName UpdateMaintenanceTask
 * @apiGroup MaintenanceTask
 * @apiParam datetime Maintenance task's datetime.
 * @apiParam reporter Maintenance task's reporter.
 * @apiParam fixer Maintenance task's fixer.
 * @apiParam where Maintenance task's where.
 * @apiParam task Maintenance task's task.
 * @apiParam starttime Maintenance task's starttime.
 * @apiParam endtime Maintenance task's endtime.
 * @apiParam approved Maintenance task's approved.
 * @apiParam week_number Maintenance task's week_number.
 * @apiParam archived Maintenance task's archived.
 * @apiParam done Maintenance task's done.
 * @apiSuccess {Object} maintenanceTask Maintenance task's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Maintenance task not found.
 */
router.put('/:id',
  body({ datetime, reporter, fixer, where, task, starttime, endtime, approved, week_number, archived, done }),
  update)

export default router
