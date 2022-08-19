import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { makeStyles, Paper, TextField,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../componentStyles/Student.css';


export default function Student() {

  const paperStyle = {
    width:"55%",
    margin: "20px auto",
    height:  'auto'
  }

  const textStyle = {
    width:"80%",
    padding:"15px",
    margin:5
  }

  const buttonStyle={
    padding: "10px",
    margin:15,
    width: 100
    }

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [etudiants, setEtudiants] = useState([])

  const handleClick = (e)=>{
    e.preventDefault()
    const student= {nom,prenom}
    console.log(student)

    fetch('http://localhost:8080/etudiant/add',{
    method:"POST",
    headers:{"Content-Type":'application/json'},
    body:JSON.stringify(student)
    }).then(()=>{
      console.log("Nouvel etudiant ajouté")
    })

    setNom('');
    setPrenom('')
  }

  useEffect(() => {
    return () => {
      fetch('http://localhost:8080/etudiant/getAll').then((res)=>res.json())
      .then(response=>{
        setEtudiants(response)
      })
    };
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  


  return (
    
    <div className="Student">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 128,
              height: 240,
              margin: 25
            },
          }}

          style={{margin:50}}
        >
          <Paper elevation={2} style={paperStyle}>
            <TextField id="outlined-basic" label="Nom" variant="outlined" style={textStyle} 
            value={nom}
            onChange={(e)=>setNom(e.target.value)}
            />
            <TextField id="outlined-basic" label="Prenom" variant="outlined" style={textStyle}
            value={prenom}
            onChange={(e)=>setPrenom(e.target.value)}
            /> <br/>
            
            <Button variant="contained" onClick={handleClick} style={{margin:10,left:210}}>S'enregistrer</Button>
           
            </Paper>
          
        </Box>

    <h3 className='titre'>BASE DE DONNEE</h3>
    <Paper elevation={2}  className="tableStyle">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Nom</StyledTableCell>
              <StyledTableCell align="right">Prenom</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {etudiants.map((etudiant) => (
              <StyledTableRow key={etudiant.id}>
                <StyledTableCell component="th" scope="row">
                  {etudiant.id}
                </StyledTableCell>
                <StyledTableCell align="right">{etudiant.nom}</StyledTableCell>
                <StyledTableCell align="right">{etudiant.prenom}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

      
  
     </div>
  );
}
