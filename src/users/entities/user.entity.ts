import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ListRole } from 'src/common/enums/list-role.enum';
import { Student } from 'src/students/entities/student.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsNotEmpty()
  lastName: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ type: 'enum', default: ListRole.Student, enum: ListRole })
  @IsNotEmpty()
  role: ListRole;

  @Column({ nullable: false, select: false })
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  password: string;

  @OneToOne(() => Teacher, (teacher) => teacher.user, { eager: true })
  teacher: Teacher;

  @OneToOne(() => Student, (student) => student.user, { eager: true })
  student: Student;
}
