const ages = [5, 65, 15, 18, 69, 15, 162];

const oldAge = [];

const predicate = (age: number) => age > 90;

type CoursesType = {
  title: string;
  price: number;
};

const courses = [
  { title: "css", price: 155 },
  { title: "html", price: 180 },
  { title: "react", price: 280 },
];
const cheapCoursesPredicate = (course: CoursesType) => course.price < 160;

const cheapCourses = [];
