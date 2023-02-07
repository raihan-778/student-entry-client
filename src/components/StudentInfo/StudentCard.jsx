import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "@tanstack/react-query";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const students = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function StudentCard() {
  const [stdInfo, setStdInfo] = useState("");
  const url = "http://localhost:5000/student-info";
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
                <TableCell align="right">{student.lastName}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
