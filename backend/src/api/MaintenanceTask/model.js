import mongoose, { Schema } from 'mongoose'

const maintenanceTaskSchema = new Schema({
  datetime: { type: Date, required: true },
  reporter: { type: String, required: true, max: 128 },
  fixer: { type: String, max: 128 },
  where: { type: String, max: 128 },
  task: { type: String, max: 8192 },
  starttime: String,
  endtime: String,
  approved: Boolean,
  week_number: { type: Number },
  archived: { type: Boolean, default: false },
  done: { type: Boolean, default: false}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

maintenanceTaskSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      datetime: this.datetime,
      reporter: this.reporter,
      fixer: this.fixer,
      where: this.where,
      task: this.task,
      starttime: this.starttime,
      endtime: this.endtime,
      approved: this.approved,
      week_number: this.week_number,
      archived: this.archived,
      done: this.done,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('MaintenanceTask', maintenanceTaskSchema)

export const schema = model.schema
export default model
