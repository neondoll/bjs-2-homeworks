function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

  return this;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (Object.keys(this).includes("marks")) {
    marks.forEach((mark) => {
      this.marks.push(mark);
    });
  }
}

Student.prototype.getAverage = function () {
  if (!Object.keys(this).includes("marks") || this.marks.length === 0) {
    return 0;
  }

  return this.marks.reduce((accumulator, mark, markIndex, marks) => {
    accumulator += mark;

    if (markIndex === marks.length - 1) {
      accumulator /= marks.length;
    }

    return accumulator;
  }, 0);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}
