function evaluateGrade() {
  let marks = prompt("Enter your marks (0 to 100):");
  marks = Number(marks);

  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a valid number between 0 and 100.");
    return;
  }

  let grade, message;

  if (marks >= 90) {
    grade = "A";
    message = "Excellent!";
  } else if (marks >= 75) {
    grade = "B";
    message = "Great job!";
  } else if (marks >= 60) {
    grade = "C";
    message = "Good effort.";
  } else if (marks >= 40) {
    grade = "D";
    message = "You passed.";
  } else {
    grade = "F";
    message = " Better luck next time.";
  }

  alert(`Your Grade: ${grade}\nMessage: ${message}`);
}
