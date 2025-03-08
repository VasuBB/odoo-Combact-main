import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

export default function UserTableRow({
  selected,
  id,
  topic,
  teacherName,
  attended,
  marks,
  quiz,
  handleClick,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar>{id}</Avatar>
            <Typography variant="subtitle2" noWrap>
              <Link to="/">{topic}</Link>
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{teacherName}</TableCell>

        {/* Render 'Yes' or 'No' based on quiz */}
        <TableCell align="center">
          <Button
            variant="contained"
            disabled={!quiz}
            onClick={() => {
              // Handle quiz button click action
              console.log(`Quiz button clicked for topic: ${topic}`);
            }}
          >
            <Link to="/quiz">
            Quiz
            </Link>
          </Button>
        </TableCell>
        {/* Render 'Yes' or 'No' based on attended */}
        <TableCell align="center">{attended ? 'Yes' : 'No'}</TableCell>

        <TableCell align="center">{marks}</TableCell>

        

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

UserTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  teacherName: PropTypes.string.isRequired,
  attended: PropTypes.bool.isRequired,
  marks: PropTypes.number.isRequired,
  quiz: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
