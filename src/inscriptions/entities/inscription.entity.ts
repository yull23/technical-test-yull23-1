import { Course } from 'src/courses/entities/course.entity';
import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inscription {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Enrollment, (enrollment) => enrollment.inscriptions)
  enrollment: Enrollment;

  @ManyToOne(() => Course, (course) => course.inscriptions)
  course: Course;
}
