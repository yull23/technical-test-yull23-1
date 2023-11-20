import { Semester } from 'src/semesters/entities/semester.entity';
import { Student } from 'src/students/entities/student.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Semester, (semester) => semester.enrollments)
  semester: Semester;

  @ManyToOne(() => Student, (student) => student.enrollments)
  student: Student;
}
