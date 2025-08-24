// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้

userTaskList.push({ id: 5, task: "Walk the dog" });

for (let task of userTaskList) {
  if (task.id === 4) {
    task.task = "Go to the gym";
  }
};

userTaskList.pop();

let lastTask = userTaskList.slice(-1)[0];
console.log(`"Task id: ${lastTask.id}, ${lastTask.task}"`);