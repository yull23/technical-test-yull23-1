import { Semester } from 'src/semesters/entities/semester.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Semester, (semester) => semester.enrollments)
  semester: Semester;
}
