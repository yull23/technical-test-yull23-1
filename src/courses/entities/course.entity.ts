import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  courseCode: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;
}
