import React, { useState } from 'react';
import { Card, Stack, Table, Button, Container, TableBody, Typography, TableContainer, TablePagination } from '@mui/material';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

// Sample hardcoded user data
const initialUsers = [
  { id: 1, topic: 'Mathematics', teacherName: 'Mr. Smith', attended: true, marks: 85, quiz: true },
  { id: 2, topic: 'Science', teacherName: 'Ms. Johnson', attended: false, marks: 70, quiz: false },
  { id: 3, topic: 'History', teacherName: 'Mr. Brown', attended: true, marks: 90, quiz: true },
  { id: 4, topic: 'Literature', teacherName: 'Ms. White', attended: true, marks: 88, quiz: true },
  { id: 5, topic: 'Geography', teacherName: 'Mr. Davis', attended: false, marks: 60, quiz: false },
];


const UserPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('topic');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.topic);
      setSelected(newSelecteds);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, topic) => {
    const selectedIndex = selected.indexOf(topic);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, topic];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
    setPage(0);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Students</Typography>
      </Stack>

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
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: '1' },
                  { id: 'topic', label: "Topic's Lecture Link",align:'center' },
                  { id: 'teacherName', label: 'Teacher Name' },
                  { id: 'quiz', label: 'Quiz', align: 'center' },
                  { id: 'attended', label: 'Attended', align: 'center' },
                  { id: 'marks', label: 'Marks', align: 'center' },
                  { id: '' },
                ]}
              />
              <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <UserTableRow
                        key={row.id} // Ensure 'key' is unique, typically 'id' or another unique identifier
                        id={row.id}
                        topic={row.topic}
                        teacherName={row.teacherName}
                        attended={row.attended}
                        marks={row.marks}
                        quiz={row.quiz}
                        selected={selected.indexOf(row.topic) !== -1}
                        handleClick={(event) => handleClick(event, row.topic)}
                      />
                    ))}
  

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </Container>
  );
};

export default UserPage;
