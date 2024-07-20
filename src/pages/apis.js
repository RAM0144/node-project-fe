// interact with the backend server to create, delete & read all the objects

// read all the Students
const baseUrl = `${import.meta.env.VITE_BE_URL}`; // Replace with your API base URL

// Function to read all students
async function getAllStudents() {
  try {
    const response = await fetch(`${baseUrl}/students`, {
      headers: {
        authorization: localStorage.getItem("authToken"),
      },
    });
    if (response.status === 401) {
      throw new Error("401")
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching students:', error);

    if (error.message === "401") {
      throw new Error("Unauthorized")
    }
  }
}

// Function to create a new student
async function createStudent(newStudent) {
  try {
    const response = await fetch(`${baseUrl}/students`, {
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
    const response = await fetch(`${baseUrl}/students/${studentId}`, {
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

// authentication related API's
// Register
const registerUser = async (userDetails) => {

  try {
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();

  } catch (error) {
    console.error(`Error while Registering the User`, error);

  }
  return undefined;

};

// login
const loginUser = async (userDetails) => {

  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails)
  });
  if (response.status === 401 || response.status === 400) {
    const { msg } = await response.json()
    throw new Error(msg);
  }
  return await response.json();

};

// get all teachers
async function getAllTeachers() {
  try {
    const response = await fetch(`${baseUrl}/teachers`, {
      headers: {
        authorization: localStorage.getItem("authToken"),
      },
    });
    if (response.status === 401) {
      throw new Error("401")
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching teachers:', error);

    if (error.message === "401") {
      throw new Error("Unauthorized")
    }
  }
}



export { getAllStudents, createStudent, deleteStudent, registerUser, loginUser, getAllTeachers };

// read all the Teachers