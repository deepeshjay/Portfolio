import { Cancel, Delete, Edit, Save } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [userName, setUserName] = useState("");
  console.log("userName :::", userName);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  
  const fetchUsers = async () => {
    await axios.get(`${BASE_URL}/user`).then((response) => {
      console.log(response.data);
      if (response.data.data.length > 0) {
        setUserList(response.data.data);
      }
    }) 
  }

  const handleUserName = (event) => {
    setUserName(event?.target?.value);
  }

  const handleEdit = (id) => {
    setEditIndex(id);
    setUserName(userList.find((ele) => ele?._id == id)?.username);
    setIsEdit(true);
  }
  const cancelEdit = () => {
    setIsEdit(false);
    setUserName("");
  }
  const handleSave = async () => {
    await axios
      .put(`${BASE_URL}/user/update/${editIndex}`, { 
        username: userName 
      })
      .then((response) => {
        console.log(response.data);
        if (response?.data) {
          alert(response?.data?.message);
          fetchUsers();
          cancelEdit();
        }
      })
  };
  const handleDelete = async (id) => {
    await axios
      .delete(`${BASE_URL}/user/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        if (response?.data) {
          alert(response?.data?.message);
          fetchUsers();
        }
      })
  };
  useEffect(() => {
    fetchUsers();
  }, [])
  return (
    <>
      <Box>
        {userList.map((user, index) => (
          <Box key={user._id} sx={{ p: 2 }}>
            <Box 
              key={user._id} 
              sx={{
                mb: 2, 
                p: 2, 
                border: "1px solid #ccc", 
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center" 
              }}
            >
              {isEdit && editIndex == user._id ? (
                <>
                  <TextField value={userName} onChange={handleUserName} />
                </>
              ) : (
                <h3>{user.username}</h3>
              )}
              <p>{user.email}</p>
              <Box>
                {isEdit && editIndex == user._id ? (
                  <>
                    <Save 
                      color="primary" 
                      sx={{ mr: 2, cursor: "pointer" }} 
                      onClick={handleSave}
                    />
                    <Cancel
                      color="error" 
                      sx={{ cursor: "pointer" }} 
                      onClick={cancelEdit}
                    />  
                  </> 
                ) : (
                  <>
                    <Edit
                      color="primary" 
                      sx={{ mr: 2, cursor: "pointer" }} 
                      onClick={() => handleEdit(user._id)}
                    />
                    <Delete
                      color="error" 
                      sx={{ cursor: "pointer" }} 
                      onClick={() => handleDelete(user._id)} 
                    />
                  </>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}
export default Users;
