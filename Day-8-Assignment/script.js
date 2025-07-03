// sum of even numbers from 0 to 100
let evenSum = 0;
for (let i = 0; i <= 100; i += 2) {
  evenSum += i;
}
console.log("Sum of even numbers from 0 to 100:", evenSum);

// 2. Multiplication Table Generator
let num = parseInt(prompt("Enter a number to generate its multiplication table:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 3. Pattern Printing
let pattern = "";
for (let i = 1; i <= 5; i++) {
  pattern += "*";
  console.log(pattern);
}

// 4. Input Validation
let userInput;
do {
  userInput = parseInt(prompt("Enter a number between 1 and 10:"));
} while (isNaN(userInput) || userInput < 1 || userInput > 10);
console.log("Valid input received:", userInput);

// 5. Reverse an Array
let arr = [1, 2, 3, 4, 5];
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log("Reversed Array:", reversed);

// 6. Frequency Counter
let nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let frequency = {};
for (let n of nums) {
  frequency[n] = (frequency[n] || 0) + 1;
}
console.log("Frequency Counter:", frequency);

// 7. Sum of Positive Numbers
let mixedNums = [3, -1, 5, -2, 9];
let posSum = 0;
for (let n of mixedNums) {
  if (n > 0) posSum += n;
}
console.log("Sum of positive numbers:", posSum);

// 8. Student Record System
let student = {
  name: "Alice",
  age: 20,
  grade: "B",
  subjects: ["Math", "English"]
};

function addSubject(subject) {
  student.subjects.push(subject);
}

function updateGrade(newGrade) {
  student.grade = newGrade;
}

function displayStudentInfo() {
  console.log("Student Info:", student);
}

addSubject("Science");
updateGrade("A");
displayStudentInfo();

// 9. Library System
let library = [
  { title: "Book A", author: "Author A", year: 2020, available: true },
  { title: "Book B", author: "Author B", year: 2021, available: false },
];

function displayAvailableBooks() {
  console.log("Available Books:");
  library.filter(book => book.available).forEach(book => console.log(book));
}

function borrowBook(title) {
  let book = library.find(b => b.title === title);
  if (book && book.available) {
    book.available = false;
    console.log(`${title} has been borrowed.`);
  } else {
    console.log(`${title} is not available.`);
  }
}

function addBook(title, author, year) {
  library.push({ title, author, year, available: true });
  console.log(`${title} added to the library.`);
}

displayAvailableBooks();
borrowBook("Book A");
addBook("Book C", "Author C", 2022);
displayAvailableBooks();
