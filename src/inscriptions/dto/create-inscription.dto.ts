import { IsNumber, IsString } from 'class-validator';

export class CreateInscriptionDto {
  @IsNumber()
  idMatricula: number;
  @IsString()
  courseCode: string;
}
