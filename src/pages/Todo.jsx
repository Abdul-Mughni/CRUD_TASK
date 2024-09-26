import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CrudTodo = () => {
  const [todoId, setTodoId] = useState("");
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [genName, setGenName] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const [genericUsers, setGenericUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filterStatus, setFilterStatus] = useState(""); // State for filter

  // Fetch existing generic users for gen_name dropdown
  useEffect(() => {
    const fetchGenericUsers = async () => {
      try {
        const response = await fetch(
          "https://66f2718e71c84d8058754449.mockapi.io/Generic"
        );
        const data = await response.json();
        const activeGen = data.filter((gen) => gen.gen_Status === "Active");
        setGenericUsers(activeGen);
      } catch (error) {
        console.error("Error fetching generic users:", error);
        toast.error("Failed to fetch generic users", {
          position: "top-center",
        });
      }
    };

    fetchGenericUsers();
  }, []);

  // Fetch todos
  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://66f2718e71c84d8058754449.mockapi.io/Todolist"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
      toast.error("Failed to fetch todos", {
        position: "top-center",
      });
    }
  };

  // Submit Todo
  const submitTodo = async (e) => {
    e.preventDefault();

    if (todoName === "") {
      toast.error("Please enter Todo Name", {
        position: "top-center",
      });
    } else if (todoDescription === "") {
      toast.error("Please enter Todo Description", {
        position: "top-center",
      });
    } else if (todoDate === "") {
      toast.error("Please enter Todo Date", {
        position: "top-center",
      });
    } else if (genName === "") {
      toast.error("Please select Generic User", {
        position: "top-center",
      });
    } else if (todoStatus === "") {
      toast.error("Please select Todo Status", {
        position: "top-center",
      });
    } else {
      try {
        const response = isEditing
          ? await fetch(
              `https://66f2718e71c84d8058754449.mockapi.io/Todolist/${todoId}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  todo_name: todoName,
                  todo_desc: todoDescription,
                  todo_date: todoDate,
                  todo_gen: genName,
                  todo_status: todoStatus,
                }),
              }
            )
          : await fetch(
              "https://66f2718e71c84d8058754449.mockapi.io/Todolist",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  todo_name: todoName,
                  todo_desc: todoDescription,
                  todo_date: todoDate,
                  todo_gen: genName,
                  todo_status: todoStatus,
                }),
              }
            );

        if (response.ok) {
          toast.success(
            isEditing ? "Todo updated successfully" : "Todo added successfully",
            {
              position: "top-center",
            }
          );
          fetchTodos(); // Refresh the todo list
          clearForm();
        } else {
          toast.error("Failed to add/update Todo", {
            position: "top-center",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred while adding/updating Todo", {
          position: "top-center",
        });
      }
    }
  };

  // Clear form fields
  const clearForm = () => {
    setTodoId("");
    setTodoName("");
    setTodoDescription("");
    setTodoDate("");
    setGenName("");
    setTodoStatus("");
    setIsEditing(false);
    setShowModal(false);
  };

  // Open modal for editing
  const openModal = (todo) => {
    setTodoId(todo.id);
    setTodoName(todo.todo_name);
    setTodoDescription(todo.todo_desc);
    setTodoDate(todo.todo_date);
    setGenName(todo.todo_gen);
    setTodoStatus(todo.todo_status);
    setIsEditing(true);
    setShowModal(true);
  };

  // Delete Todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(
        `https://66f2718e71c84d8058754449.mockapi.io/Todolist/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Todo deleted successfully", {
          position: "top-center",
        });
        fetchTodos(); // Refresh the todo list
      } else {
        toast.error("Failed to delete Todo", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while deleting Todo", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    fetchTodos(); // Fetch todos when component mounts
  }, []);

  // Filter todos based on selected status
  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTodos = filterStatus
    ? todos.filter((todo) => todo.todo_status === filterStatus)
    : todos;

  return (
    <>
    <div className="container" style={{marginTop:"10%"}}>
      <h1 className="text-center mt-5">CRUD Todo</h1>
      
        <div className="container ">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 offset-md-3" style={{ backgroundColor:"#cfe0e3" }}>
              <form className="main_form" onSubmit={submitTodo}>
                <div className="row">
                  <div className="col-sm-12">
                    <label style={{ color: "black" }} htmlFor="todoName">
                      Todo Name
                    </label>
                    <input
                      type="text"
                      className="contactus form-control"
                      id="todoName"
                      placeholder="Enter Todo Name"
                      value={todoName}
                      onChange={(e) => setTodoName(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label style={{ color: "black" }} htmlFor="todoDescription">
                      Todo Description
                    </label>
                    <textarea
                      className="contactus form-control"
                      id="todoDescription"
                      placeholder="Enter Todo Description"
                      value={todoDescription}
                      onChange={(e) => setTodoDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-sm-12">
                    <label style={{ color: "black" }} htmlFor="todoDate">
                      Todo Date
                    </label>
                    <input
                      type="date"
                      className="contactus form-control"
                      id="todoDate"
                      value={todoDate}
                      onChange={(e) => setTodoDate(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12">
                    <label style={{ color: "black" }} htmlFor="genName">
                      Select Generic
                    </label>
                    <select
                      className="contactus form-control"
                      id="genName"
                      value={genName}
                      onChange={(e) => setGenName(e.target.value)}
                    >
                      <option value="">Select Generic</option>
                      {genericUsers.length > 0 ? (
                        genericUsers.map((user) => (
                          <option key={user.id} value={user.gen_name}>
                            {user.gen_name}
                          </option>
                        ))
                      ) : (
                        <option value="">No active users found</option>
                      )}
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <label style={{ color: "black" }} htmlFor="todoStatus">
                      Todo Status
                    </label>
                    <select
                      className="contactus form-control"
                      id="todoStatus"
                      value={todoStatus}
                      onChange={(e) => setTodoStatus(e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="complete">Complete</option>
                      <option value="notcompleted">Not Completed</option>
                    </select>
                  </div>
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary mt-3" style={{marginTop:"5%", marginBottom:"5%"}}>
                      {isEditing ? "Update Todo" : "Add Todo"}
                    </button>
                    <button
                      type="button" style={{marginTop:"5%", marginBottom:"5%", marginLeft:"5%"}}
                      className="btn btn-secondary mt-3 ms-2"
                      onClick={clearForm}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <ToastContainer />
      <div className="container mt-5 mb-5">
        <h2 className="text-center " style={{marginTop:"5%"}}>Todo List</h2>
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <select
              name="filtercom"
              className="form-control mb-5"
              onChange={handleFilterChange} // Attach the handler here
            >
              <option value="">Select to filter</option>
              <option value="complete">Completed</option>
              <option value="notcompleted">Not Completed</option>
            </select>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Todo Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Generic User</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.todo_name}</td>
                <td>{todo.todo_desc}</td>
                <td>{todo.todo_date}</td>
                <td>{todo.todo_gen}</td>
                <td>{todo.todo_status}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => openModal(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2" style={{marginLeft:"5%"}} 
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default CrudTodo;
