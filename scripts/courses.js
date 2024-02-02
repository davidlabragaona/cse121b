// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
  };

  aCourse.sections = [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
  ];

  function setCourseName(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
  }

  function renderSections(sections) {
    res = sections.map( x => `<tr><td>${x.sectionNum}</td><td>${x.roomNum}</td><td>${x.enrolled}</td><td>${x.days}</td><td>${x.instructor}</td></tr>`);
    let rows = document.querySelector("#sections");
    rows.innerHTML = res.join('');
  }

  //Activity2
  aCourse.changeEnrollment = function(sectionNum, add = true) {
    const section = this.sections.findIndex( x => x.sectionNum == sectionNum);
    if (section >= 0) {
        if (add) {
            this.sections[section].enrolled++;
        }
        else {
            this.sections[section].enrolled--;
        }
        renderSections(this.sections)
    }
  }

  /*aCourse.dropStudent = function(sectionNum) {
    const section = this.sections.findIndex( x => x.sectionNum == sectionNum);
    if (section >= 0) {
        this.sections[section].enrolled--;
        renderSections(this.sections)
    }
  }*/

  document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });

  setCourseName(aCourse);
  renderSections(aCourse.sections);