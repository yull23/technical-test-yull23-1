// Para la rama A
export enum InitialCoursesBranchA {
  CourseA01 = 'Course-A-cycle-01',
  CourseA02 = 'Course-A-cycle-02',
  CourseA03 = 'Course-A-cycle-03',
  CourseA04 = 'Course-A-cycle-04',
  CourseA05 = 'Course-A-cycle-05',
  CourseA06 = 'Course-A-cycle-06',
  CourseA07 = 'Course-A-cycle-07',
  CourseA08 = 'Course-A-cycle-08',
  CourseA09 = 'Course-A-cycle-09',
}

// Para la rama B
export enum InitialCoursesBranchB {
  CourseB01 = 'Course-B-cycle-01',
  CourseB02 = 'Course-B-cycle-02',
  CourseB03 = 'Course-B-cycle-03',
  CourseB04 = 'Course-B-cycle-04',
  CourseB05 = 'Course-B-cycle-05',
  CourseB06 = 'Course-B-cycle-06',
  CourseB07 = 'Course-B-cycle-07',
  CourseB08 = 'Course-B-cycle-08',
  CourseB09 = 'Course-B-cycle-09',
}

// Para la rama C
export enum InitialCoursesBranchC {
  CourseC01 = 'Course-C-cycle-01',
  CourseC02 = 'Course-C-cycle-02',
  CourseC03 = 'Course-C-cycle-03',
  CourseC04 = 'Course-C-cycle-04',
  CourseC05 = 'Course-C-cycle-05',
  CourseC06 = 'Course-C-cycle-06',
  CourseC07 = 'Course-C-cycle-07',
  CourseC08 = 'Course-C-cycle-08',
  CourseC09 = 'Course-C-cycle-09',
}

// Para la rama D
export enum InitialCoursesBranchD {
  CourseD01 = 'Course-D-cycle-01',
  CourseD02 = 'Course-D-cycle-02',
  CourseD03 = 'Course-D-cycle-03',
  CourseD04 = 'Course-D-cycle-04',
  CourseD05 = 'Course-D-cycle-05',
  CourseD06 = 'Course-D-cycle-06',
  CourseD07 = 'Course-D-cycle-07',
  CourseD08 = 'Course-D-cycle-08',
  CourseD09 = 'Course-D-cycle-09',
}

// Para la rama E
export enum InitialCoursesBranchE {
  CourseE01 = 'Course-E-cycle-01',
  CourseE02 = 'Course-E-cycle-02',
  CourseE03 = 'Course-E-cycle-03',
  CourseE04 = 'Course-E-cycle-04',
  CourseE05 = 'Course-E-cycle-05',
  CourseE06 = 'Course-E-cycle-06',
  CourseE07 = 'Course-E-cycle-07',
  CourseE08 = 'Course-E-cycle-08',
  CourseE09 = 'Course-E-cycle-09',
}

// Para la rama F
export enum InitialCoursesBranchF {
  CourseF01 = 'Course-F-cycle-01',
  CourseF02 = 'Course-F-cycle-02',
  CourseF03 = 'Course-F-cycle-03',
  CourseF04 = 'Course-F-cycle-04',
  CourseF05 = 'Course-F-cycle-05',
  CourseF06 = 'Course-F-cycle-06',
  CourseF07 = 'Course-F-cycle-07',
  CourseF08 = 'Course-F-cycle-08',
  CourseF09 = 'Course-F-cycle-09',
}

// Para la rama G
export enum InitialCoursesBranchG {
  CourseG01 = 'Course-G-cycle-01',
  CourseG02 = 'Course-G-cycle-02',
  CourseG03 = 'Course-G-cycle-03',
  CourseG04 = 'Course-G-cycle-04',
  CourseG05 = 'Course-G-cycle-05',
  CourseG06 = 'Course-G-cycle-06',
  CourseG07 = 'Course-G-cycle-07',
  CourseG08 = 'Course-G-cycle-08',
  CourseG09 = 'Course-G-cycle-09',
}

export const allCourses = [
  ...Object.values(InitialCoursesBranchA),
  ...Object.values(InitialCoursesBranchB),
  ...Object.values(InitialCoursesBranchC),
  ...Object.values(InitialCoursesBranchD),
  ...Object.values(InitialCoursesBranchE),
  ...Object.values(InitialCoursesBranchF),
  ...Object.values(InitialCoursesBranchG),
];
