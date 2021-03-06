import mongoose, { Schema } from 'mongoose';

const maintenanceTaskSchema = new Schema({
  datetime: { type: Date, required: true },
  reporter: { type: String, required: true },
  fixer: { type: String },
  linac: Boolean,
  R11: Boolean,
  R12: Boolean,
  R31: Boolean,
  R3235: Boolean,
  spf: Boolean,
  other: Boolean,
  task: { type: String },
  starttime: String,
  endtime: String,
  approved: Boolean,
  week_number: { type: Number },
  year: { type: Number },
  archived: { type: Boolean, default: false },
  done: { type: Boolean, default: false}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id; }
  }
});

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
    };

    return full ? {
      ...view
      // add properties for a full view
    } : view;
  }
};

const model = mongoose.model('MaintenanceTask', maintenanceTaskSchema);

export const schema = model.schema;
export default model;
