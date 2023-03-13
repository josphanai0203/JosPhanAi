let main = document.querySelector("#main");
let studentsList = [];
class Student {
  constructor(studentCode, name, nameClass, email, birthDate, module) {
    this.studentCode = studentCode;
    this.name = name;
    this.nameClass = nameClass;
    this.email = email;
    this.birthDate = birthDate;
    this.module = module;
  }
}
function render() {
  sort();
  head = [
    `
    <tr>
        <th class="studentCode">Mã Học Viên</th>
        <th class="name">Họ và Tên</th>
        <th class="nameClass">Lớp</th>
        <th class="email">Email</th>
        <th class="birthDate">Ngày Sinh</th>
    </tr>
`,
  ];
  let body = studentsList.map((student) => {
    return `
            <tr>
                <td>${student.studentCode}</td>
                <td>${student.name}</td>
                <td>${student.nameClass}</td>
                <td>${student.email}</td>
                <td>${student.birthDate}</td>
            </tr>
        `;
  });
  let htmls = head.concat(body);
  main.innerHTML = htmls.join("");
}
function add() {
  let stdCode = enterStudentCode();
  let stdName = enterStdName();
  let stdClass = enterStdClass();
  let stdEmail = enterStdEmail();
  let stdBirth = enterStdBirth();
  let stdModule = enterStdModule();
  studentsList.push(
    new Student(stdCode, stdName, stdClass, stdEmail, stdBirth, stdModule)
  );
  render();
}
function fix() {
  let stdCode = enterStudentCode();
  let check = studentsList.some((student) => {
    return student.studentCode == stdCode;
  });
  if (check) {
    let student = studentsList.find(
      (student) => student.studentCode == stdCode
    );
    student.name = enterStdName();
    student.nameClass = enterStdClass();
    student.email = enterStdEmail();
    student.birthDate = enterStdBirth();
    student.module = enterStdModule();
    render();
  } else {
    alert("Không tồn tại Học Viên này");
  }
}
function sort() {
  studentsList.sort((a, b) => {
    let nameA = a.name.split(" ");
    let nameB = b.name.split(" ");
    if (nameA[nameA.length-1] < nameB[nameB.length -1]) return -1;
    else if  (nameA[nameA.length-1] > nameB[nameB.length -1]) return 1;
    else return 0;
  });
}
function deleteStd() {
  let stdCode = enterStudentCode();
  let check = studentsList.some((student) => {
    return student.studentCode == stdCode;
  });
  if (check) {
    let id;
    let student = studentsList.forEach((student, index) => {
      if (student.studentCode == stdCode) {
        id = index;
      }
    });
    studentsList.splice(id, 1);
    render();
  } else {
    alert("Không tồn tại Học Viên này");
  }
}
function enterStudentCode() {
  let input = prompt("Nhập Mã Học Viên (HV-XXXX):");
  if (/^[HV-]/.test(input) && input.length == 7) {
    return input;
  } else {
    alert("Nhap sai mã họ viên");
    return enterStudentCode();
  }
}
function enterStdName() {
  let input = prompt("Nhập Tên Học Viên (tối đa 50 kí tự):");
  if (input.length <= 50) {
    return input;
  } else {
    alert("Tên học viên quá dài");
    return enterStdName();
  }
}
function enterStdClass() {
  let input = prompt("Nhập Tên Lớp:");
  return input;
}
function enterStdEmail() {
  let input = prompt("Nhập Email :");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    return input;
  } else {
    alert("sai Email");
    return enterStdEmail();
  }
}
function enterStdBirth() {
  let input = prompt("Nhập Ngày sinh (dd/mm/yyyy):");
  let check = Date.parse(input);
  if (isNaN(check)) {
    alert("sai Ngày");
    return enterStdBirth();
  } else {
    return input;
  }
}
function enterStdModule() {
  let input = prompt("Nhập Module:");
  if (/[1-6]/.test(input)) {
    return input;
  } else {
    alert("Sai Module");
    return enterStdModule();
  }
}
function start() {
  render();
}
start();
