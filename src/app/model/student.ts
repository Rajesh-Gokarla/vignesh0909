export class Student {
  _id: any;
  rollno: string;
  name: string;
  dept: string;
  year: string;
  sec: string;
  sem: Number;
  phno: string;
  grades: Array<{
    subject: String,
    sem: Number,
    grade: String,
    credits: Number,
    sgpa: Number,
    cgpa: Number,
  }>;
  placements: Object;
}
