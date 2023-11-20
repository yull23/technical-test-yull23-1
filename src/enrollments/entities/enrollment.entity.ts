import { Inscription } from 'src/inscriptions/entities/inscription.entity';
import { Semester } from 'src/semesters/entities/semester.entity';
import { Student } from 'src/students/entities/student.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Semester, (semester) => semester.enrollments)
  semester: Semester;

  @ManyToOne(() => Student, (student) => student.enrollments)
  student: Student;

  @OneToMany(() => Inscription, (inscription) => inscription.enrollment)
  inscriptions: Inscription[];
}
