import mongoose, { Document, Schema } from 'mongoose';

export interface IEnquiry extends Document {
  studentName: string;
  parentName: string;
  mobile: string;
  email?: string;
  academicClass: string;
  stream: string;
  message?: string;
  referenceId: string;
  status: 'new' | 'contacted' | 'counseling_scheduled' | 'enrolled' | 'archived';
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema(
  {
    studentName: { type: String, required: true, trim: true },
    parentName: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    academicClass: { type: String, required: true },
    stream: { type: String, required: true },
    message: { type: String, trim: true },
    referenceId: { 
      type: String, 
      required: true, 
      unique: true, 
      default: () => `VC-${Math.floor(100000 + Math.random() * 900000)}` 
    },
    status: { 
      type: String, 
      enum: ['new', 'contacted', 'counseling_scheduled', 'enrolled', 'archived'], 
      default: 'new' 
    }
  },
  {
    timestamps: true
  }
);

export const Enquiry = mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
