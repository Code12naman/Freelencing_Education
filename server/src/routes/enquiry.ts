import { Router, Request, Response } from 'express';
import { Enquiry } from '../models/Enquiry.js';

export const enquiryRouter = Router();

enquiryRouter.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentName, parentName, mobile, email, academicClass, stream, message } = req.body;

    if (!studentName || !parentName || !mobile || !academicClass || !stream) {
      res.status(400).json({ 
        success: false, 
        message: 'Please fill in all mandatory fields.' 
      });
      return;
    }

    const referenceId = `VC-${Math.floor(100000 + Math.random() * 900000)}`;

    const newEnquiry = new Enquiry({
      studentName,
      parentName,
      mobile,
      email,
      academicClass,
      stream,
      message,
      referenceId
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Admission enquiry successfully submitted to Vardhani Classes admissions team.',
      referenceId: newEnquiry.referenceId
    });
  } catch (error) {
    console.error('Error saving admission enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while processing enquiry. Please connect directly via WhatsApp.'
    });
  }
});

enquiryRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Could not fetch records.' });
  }
});
