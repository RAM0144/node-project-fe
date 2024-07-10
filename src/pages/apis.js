// interact with the backend server to create, delete & read all the objects

// read all the Students
const baseUrl = `${import.meta.env.VITE_BE_URL}/students`; // Replace with your API base URL

// Function to read all students
async function getAllStudents() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);
    
  }
}

// Function to create a new student
async function createStudent(newStudent) {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error creating student:", error);
    }
  }

// Function to delete a student by ID
async function deleteStudent(studentId) {
  try {
    const response = await fetch(`${baseUrl}/${studentId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json(); // Deletion successful
  } catch (error) {
    console.error(`Error deleting student with ID ${studentId}:`, error);
    
  }
}

export { getAllStudents, createStudent, deleteStudent };

// read all the Teachers