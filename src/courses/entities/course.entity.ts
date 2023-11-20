import { MinLength } from 'class-validator';
import { Inscription } from 'src/inscriptions/entities/inscription.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @MinLength(6)
  name: string;

  @Column()
  credits: number;

  @Column({ unique: true })
  courseCode: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses, {
    nullable: true,
    eager: true,
  })
  teacher: Teacher;

  @OneToMany(() => Inscription, (inscription) => inscription.course)
  inscriptions: Inscription[];
}
