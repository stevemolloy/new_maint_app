import { MaintenanceTask } from '.'

let maintenanceTask

beforeEach(async () => {
  maintenanceTask = await MaintenanceTask.create({ datetime: 'test', reporter: 'test', fixer: 'test', where: 'test', task: 'test', starttime: 'test', endtime: 'test', approved: 'test', week_number: 'test', archived: 'test', done: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = maintenanceTask.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(maintenanceTask.id)
    expect(view.datetime).toBe(maintenanceTask.datetime)
    expect(view.reporter).toBe(maintenanceTask.reporter)
    expect(view.fixer).toBe(maintenanceTask.fixer)
    expect(view.where).toBe(maintenanceTask.where)
    expect(view.task).toBe(maintenanceTask.task)
    expect(view.starttime).toBe(maintenanceTask.starttime)
    expect(view.endtime).toBe(maintenanceTask.endtime)
    expect(view.approved).toBe(maintenanceTask.approved)
    expect(view.week_number).toBe(maintenanceTask.week_number)
    expect(view.archived).toBe(maintenanceTask.archived)
    expect(view.done).toBe(maintenanceTask.done)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = maintenanceTask.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(maintenanceTask.id)
    expect(view.datetime).toBe(maintenanceTask.datetime)
    expect(view.reporter).toBe(maintenanceTask.reporter)
    expect(view.fixer).toBe(maintenanceTask.fixer)
    expect(view.where).toBe(maintenanceTask.where)
    expect(view.task).toBe(maintenanceTask.task)
    expect(view.starttime).toBe(maintenanceTask.starttime)
    expect(view.endtime).toBe(maintenanceTask.endtime)
    expect(view.approved).toBe(maintenanceTask.approved)
    expect(view.week_number).toBe(maintenanceTask.week_number)
    expect(view.archived).toBe(maintenanceTask.archived)
    expect(view.done).toBe(maintenanceTask.done)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
