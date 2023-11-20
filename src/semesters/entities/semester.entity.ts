import { Enrollment } from 'src/enrollments/entities/enrollment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.semester, {
    cascade: true,
  })
  enrollments: Enrollment[];
}
