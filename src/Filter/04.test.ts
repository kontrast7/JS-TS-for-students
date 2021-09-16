test("should take old mans older then 90", () => {
  const ages = [5, 65, 15, 18, 69, 15, 162];

  const predicate = (age: number) => age > 90;

  const oldAge = ages.filter((age) => age > 90);

  expect(oldAge.length).toBe(1);
  expect(oldAge[0]).toBe(162);
});

test("should take courses chipped 160", () => {
  const courses = [
    { title: "css", price: 155 },
    { title: "html", price: 180 },
    { title: "react", price: 280 },
  ];
  const cheapCoursesPredicate = (course: CoursesType) => {
    return course.price < 160;
  };

  const cheapCourses = courses.filter((course) => course.price < 160);

  expect(cheapCourses.length).toBe(1);
  expect(cheapCourses[0].price).toBe(155);
});

test("get only completed tasks", () => {
  const tasks = [
    { title: "css", isDone: true },
    { title: "html", isDone: false },
    { title: "react", isDone: true },
  ];
  let filterTasks = tasks.filter((f) => f.isDone);
  expect(filterTasks.length).toBe(2);
  expect(filterTasks[0].title).toBe("css");
});
