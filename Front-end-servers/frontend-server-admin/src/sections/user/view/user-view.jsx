import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import SimpleRegistrationForm from '../add-teacher';
import { toast } from "react-toastify";
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showForm, setShowForm] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTests, setTotalTests] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:7000/api/admin/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Cache-Control': 'no-cache, no-store, must-revalidate', 
                   'Pragma': 'no-cache',
                   'Expires': '0'
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          
          // alert(response.json());
          data=data.data;
          // console.log(data);
          // Transform data to the required format
          const transformedData = data.map(teacher => ({
            id:teacher._id,
            name: teacher.name,
            email: teacher.email,
            students: 2,
            tests: 3,
          }));
          console.log(transformedData);
          setTeachers(transformedData);

          // Calculate totals
          const totalTeachers = data.length;
          // const totalStudents = data.reduce((acc, teacher) => acc + teacher.students.length?teacher.students.length:0, 0);
          // const totalTests = data.reduce((acc, teacher) => acc + teacher.test.length?teacher.test.length:0, 0);

          setTotalTeachers(totalTeachers);
          setTotalStudents(2);
          setTotalTests(3);

          toast.success("Data fetched successfully..", {
            // position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          const errorData = await response.json();
          toast.error("Error Fetching Data", {
            // position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Error", {
          // position: toast.POSITION.TOP_RIGHT,
        });
      }
    };

    fetchData();
  }, []);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = teachers.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleAddTeacherClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const dataFiltered = applyFilter({
    inputData: teachers,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Teachers</Typography>
        {!showForm ? (
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleAddTeacherClick}
          >
            Add Teacher
          </Button>
        ) : (
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva" />}
            onClick={handleAddTeacherClick}
          >
            Back
          </Button>
        )}
      </Stack>

      {showForm ? (
        <SimpleRegistrationForm />
      ) : (
        <>
          <Card>
            <UserTableToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ overflow: 'unset' }}>
                <Table sx={{ minWidth: 800 }}>
                  <UserTableHead
                    order={order}
                    orderBy={orderBy}
                    rowCount={teachers.length}
                    numSelected={selected.length}
                    onRequestSort={handleSort}
                    onSelectAllClick={handleSelectAllClick}
                    headLabel={[
                      { id: 'Name', label: 'Name' },
                      { id: 'Email', label: 'Email' },
                      { id: 'Students', label: 'Students' },
                      { id: 'Tests', label: 'Tests' },
                      { id: '' },
                    ]}
                  />
                  <TableBody>
                    {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                        <UserTableRow
                          key={row.id} // Assuming name is unique, otherwise use a unique ID
                          name={row.name}
                          email={row.email}
                          students={row.students}
                          tests={row.tests}
                          selected={selected.indexOf(row.name) !== -1}
                          handleClick={(event) => handleClick(event, row.name)}
                        />
                      ))}

                    <TableEmptyRows
                      height={77}
                      emptyRows={emptyRows(page, rowsPerPage, teachers.length)}
                    />

                    {notFound && <TableNoData query={filterName} />}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              page={page}
              component="div"
              count={teachers.length}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </>
      )}
    </Container>
  );
}
