function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks) {
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
