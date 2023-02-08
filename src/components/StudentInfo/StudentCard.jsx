import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import StudentEdtiModal from "./StudentEdtiModal";

export default function StudentCard() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const [deleteStudent, setDeleteStudent] = useState("");
  const [stdInfo, setStdInfo] = useState("");
  const url = "https://student-entry-server.vercel.app/student-info";
  // const {
  //   data: studentDetails,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["studentDetails"],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // if (isLoading) {
  //   return <h2>Loading....</h2>;
  // }
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStdInfo(data);
      });
  }, []);

  const handleDeleteStudent = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure you want delete this Student Info?"
    );
    if (proceed) {
      fetch(`https://student-entry-server.vercel.app/student-info/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.warning(" Student deleted successfully");
          }
        });
    }
  };
  // if (isLoading) {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Roll No</TableCell>
            <TableCell align="right">View/Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stdInfo &&
            stdInfo.map((student) => (
              <TableRow
                key={student._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="student">
                  ` {student.firstName} +{student.middleName}+{" "}
                  {student.lastName}`
                </TableCell>
                <TableCell align="right">{student.firstName}</TableCell>
                <TableCell align="right">{student.middleName}</TableCell>
                <TableCell align="right">
                  <div>
                    <Link to="#">
                      <VisibilityIcon />
                    </Link>
                    <Button onClick={() => handleDeleteStudent(student._id)}>
                      <DeleteIcon />
                    </Button>
                    <Button>
                      <EditIcon />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
