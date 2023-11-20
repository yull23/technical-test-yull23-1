import { MinLength } from 'class-validator';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(6)
  name: string;

  @Column()
  credits: number;

  @Column({ unique: true })
  courseCode: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;
}
