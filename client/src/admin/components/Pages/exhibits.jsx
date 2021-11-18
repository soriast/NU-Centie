import React , {useState, useEffect}from 'react'
import { Col, Form, Row ,Tab, Container, Image, Overlay, OverlayTrigger, Button, Modal} from "react-bootstrap";
import SideNavBar from './SideNavBar';
import MaterialTable from 'material-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import  '../../css/SystemAdmin.css';
import Axios from 'axios';


function MyVerticallyCenteredModal(props) {

    
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
     
        
         
      <Button type="submit">Submit form</Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Exhibits() {

    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          {...props}
        />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
          color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
        },
      }));

      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   
   
      const [modalShow, setModalShow] = React.useState(false);


      // Exhibit
   const [exhibitlist, setexhibitlist] = useState([]);
   useEffect(() => {
     Axios.get("http://localhost:3003/api/getExhibit")
       .then((res) => {
         console.log(res);
         setexhibitlist(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);

   
    return (
        <div style={{marginTop:100}}>
            <Row>
    <Col sm={2}>
        <SideNavBar active={'exhibits'} />
    </Col>

    <Col sm={10}>
    <Row>
            <div style={{padding: 10 , color:'#30408D'}}>
                <h1>Exhibits</h1>
            </div>
        </Row>

        <Row>
            <div style={{padding:20}}>
            <MaterialTable
      title=""
      columns={[
        { title: 'Exhibit ID', field: 'exhibit_id' },
        { title: 'Exhibit Namex', field: 'exhibit_name' },
        { title: 'Year', field: 'exhibit_year' },
        { title: 'Term', field: 'exhibit_term'},
        { title: 'Date', field: 'exhibit_date'},
        {
            title: '',
            render: rowData => <div style={{cursor:'pointer'}}> 
               
                <MoreHorizIcon onClick={handleClick} />
                <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
         <strong> Edit </strong>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon style={{color:'red'}}/>
         <strong style={{color:'red', marginTop:5}}>Archive</strong> 
        </MenuItem>
      </StyledMenu>

                 </div>
          }
        
      ]}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add Subscriber',
          isFreeAction: true,
          onClick: (event, rowData) => {
            setModalShow(true);
          }
        },
        {
            icon: ArchiveIcon,
            tooltip: 'View Archive',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          }
      ]}
      data={exhibitlist}        
      options={{
        sorting: true
      }}
    />
            </div>
        </Row>
    </Col>
    </Row>
        </div>
    )
}

export default Exhibits