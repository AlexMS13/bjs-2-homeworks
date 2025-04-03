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
    if (!this.marks) return;
    const filteredMarks = marks.filter(mark => mark >= 1 && mark <= 5); 
    this.marks.push(...filteredMarks);
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) return 0;
    const complete = this.marks.reduce((summ, mark) => summ + mark, 0); 
    return complete / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
    delete this.subject; 
    delete this.marks; 
    this.excluded = reason;
}
