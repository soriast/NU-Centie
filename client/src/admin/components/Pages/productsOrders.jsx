import React, { useEffect, useState  } from 'react'
import { Col, Row, Modal, Form, Button } from "react-bootstrap";
import SideNavBar from './SideNavBar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialTable from 'material-table';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import TextField from "@material-ui/core/TextField";
import Axios from 'axios';
// import  '../../css/SystemAdmin.css';



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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function ProductsOrders() {
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

  const [modalShow, setModalShow] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [valueSecond, setValueSecond] = React.useState(0);
  const handleChangeSecond = (event, newValue) => {
    setValueSecond(newValue);
  };

  const [valueThird, setValueThird] = React.useState(0);
  const handleChangeThird = (event, newValue) => {
    setValueThird(newValue);
  };

  //Variable for innovation List
  const [innovationList, setInnovationList] = React.useState([]);

  //function for getting Innovations
  function getInnovationList() {
    Axios.get('http://localhost:3003/api/innovations').then((response) => {
      setInnovationList(response.data);
    },[]);
}

   //Variable for investment List
  const [investmentList, setInvestmentList] = useState([]);

    //function for getting investment
    function getInvestmentList() {
      Axios.get('http://localhost:3003/api/investment').then((response) => {
      setInvestmentList(response.data);
      },[]);
  }

  
  // Products
  const [productlist, setproductlist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/getProducts")
      .then((res) => {
        console.log(res);
        setproductlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


   
  // Orders
  const [orderlist, setorderlist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/getOrders")
      .then((res) => {
        console.log(res);
        setorderlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



    
  // Souvenirs
  const [souvenirslist, setsouvenirslist] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3003/api/getSouvenirs")
      .then((res) => {
        console.log(res);
        setsouvenirslist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


   // Book
   const [booklist, setbooklist] = useState([]);
   useEffect(() => {
     Axios.get("http://localhost:3003/api/getBook")
       .then((res) => {
         console.log(res);
         setbooklist(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);


   // Innovation
   const [innovationlist, setinnovationlist] = useState([]);
   useEffect(() => {
     Axios.get("http://localhost:3003/api/getInnovations")
       .then((res) => {
         console.log(res);
         setinnovationlist(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);


   
// Payment
const [paymentlist, setpaymentlist] = useState([]);
useEffect(() => {
  Axios.get("http://localhost:3003/api/getPayments")
    .then((res) => {
      console.log(res);
      setpaymentlist(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);



   // Investment
   const [investmentlist, setinvestmentlist] = useState([]);
   useEffect(() => {
     Axios.get("http://localhost:3003/api/getInvestment")
       .then((res) => {
         console.log(res);
         setinvestmentlist(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);



   


  return (
    useEffect(() => {
      getInnovationList();
      getInvestmentList();
    }, []),
    
    
    <div style={{ marginTop: 100 }}>

      <Row>

        <Col sm={2}>
          <SideNavBar active={'productsOrders'} />
        </Col>

        <Col sm={10}>
          <Row>
            <div style={{ padding: 10, color: '#30408D' }}>
              <h1>Product & Orders</h1>
            </div>
          </Row>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Products" {...a11yProps(0)} />
                <Tab label="Orders" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <MaterialTable
                title=""
                columns={[
                  { title: 'Product ID', field: 'product_id' },
                  { title: 'Price', field: 'product_price' },
                  { title: 'Category', field: 'product_category' },
                  {
                    title: '',
                    render: rowData => <div style={{ cursor: 'pointer' }}>

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
                          <FileCopyIcon style={{ color: 'red' }} />
                          <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
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
                data={productlist}
                options={{
                  sorting: true
                }}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MaterialTable
                title=""
                columns={[
                  { title: 'Order ID', field: 'order_id' },
                  { title: 'Order Date', field: 'order_date' },
                  { title: 'Product ID', field: 'product_id' },
                  // { title: 'Payment Proof', render:(row) => {
                  //   return <p>{row.payment_proof}</p>
                  // } },
                  { title: 'Payment Type', field: 'payment_total' },
                  { title: 'Order Total', field: 'order_total' },

                  {
                    title: '',
                    render: rowData => <div style={{ cursor: 'pointer' }}>

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
                          <FileCopyIcon style={{ color: 'red' }} />
                          <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
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
                data={orderlist}
                options={{
                  sorting: true
                }}
              />
            </TabPanel>

          </Box>


          <Row>
            <div style={{ padding: 10, color: '#30408D' }}>
              <h1>Product Categories</h1>
            </div>
          </Row>

          <Row>
            <div style={{ padding: 20 }}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={valueSecond} onChange={handleChangeSecond} aria-label="basic tabs example">
                    <Tab label="Souvenir" {...a11yProps(0)} />
                    <Tab label="Book" {...a11yProps(1)} />
                    <Tab label="Innovation" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={valueSecond} index={0}>
                  {/* //Souvenir */}

                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        { title: 'Souvenir ID', field: 'souvenir_id' },
                        { title: 'Souvenir Name', field: 'souvenir_name' },
                        { title: 'Souvenir Description', field: 'souvenir_description' },
                        { title: 'Seller ID', field: 'user_id' },
                        { title: 'Product ID', field: 'product_id' },
                        {
                          title: '',
                          render: rowData => <div style={{ cursor: 'pointer' }}>

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
                                <FileCopyIcon style={{ color: 'red' }} />
                                <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
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
                      data={souvenirslist}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={valueSecond} index={1}>
                  {/* Book */}
                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        { title: 'Book ID', field: 'book_id' },
                        { title: 'Book Name', field: 'book_name' },
                        { title: 'Book Author', field: 'book_author' },
                        { title: 'Book Description', field: 'book_description' },
                        { title: 'Product ID', field: 'product_id' },
                        {
                          title: '',
                          render: rowData => <div style={{ cursor: 'pointer' }}>

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
                                <FileCopyIcon style={{ color: 'red' }} />
                                <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
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
                      data={booklist}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={valueSecond} index={2}>
                  {/* Innovation */}
                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        //this column was edited by innovation group
                        { title: 'Innovation ID', field: 'innovation_id' },
                        { title: 'Innovation Name', field: 'innovation_title' },
                        { title: 'Innovation Description', field: 'innovation_description' },
                        { title: 'Innovation Story', field: 'innovation_story' },
                        { title: 'Innovation Status', field: 'innovation_status' },
                        { title: 'Product ID', field: 'product_id' },
                        { title: 'Innovator ID', field: 'innovator_id' },
                        { title: 'Price', field: 'innovation_price' },
                        {
                          title: '',
                          render: rowData => <div style={{ cursor: 'pointer' }}>

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
                                <FileCopyIcon style={{ color: 'red' }} />
                                <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
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
                      //Displaying list of Innovations
                      data={innovationList}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
              </Box>
            </div>
          </Row>
          <Row>
            <div style={{ padding: 10, color: '#30408D' }}>
              <h1>Payment</h1>
            </div>
          </Row>

          <Row>
            <div style={{ padding: 20 }}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={valueThird} onChange={handleChangeThird} aria-label="basic tabs example">
                    <Tab label="Payment" {...a11yProps(1)} />
                    <Tab label="Invesment" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={valueThird} index={0}>
                  {/* Payment */}

                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        { title: 'Payment ID', field: 'payment_id' },
                        { title: 'Payment Type', field: 'payment_type' },
                        // { title: 'Payment Proof', field: 'payment_proof' },
                        { title: 'Order ID', field: 'order_id' },
                        { title: 'User ID', field: 'user_id' },
                        {
                          title: '',
                          render: rowData => <div style={{ cursor: 'pointer' }}>

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
                                <FileCopyIcon style={{ color: 'red' }} />
                                <strong style={{ color: 'red', marginTop: 5 }}>Archive</strong>
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
                      data={paymentlist}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
                <TabPanel value={valueThird} index={1}>
                  {/* Investment */}
                  <div style={{ padding: 20 }}>
                    <MaterialTable
                      title=""
                      columns={[
                        //This column was edited by the innovation group
                        { title: 'Invest ID', field: 'invest_id' },
                        { title: 'Date', field: 'invest_date' },
                        { title: 'Amount', field: 'invest_amount' },
                        { title: 'Innovation ID', field: 'innovation_id' },
                        { title: 'Investor ID', field: 'investor_id' },
                        { title: 'Reference Number', field: 'invest_refNumber' },
                        { title: 'Payment Method', field: 'invest_pMethod' },
                        // { title: 'Payment Proof', field: 'invest_proofPayment' },
                        {
                          title: '',
                          render: rowData => <div style={{ cursor: 'pointer' }}>

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

                              <Modal.Dialog>
                                <Modal.Header closeButton>
                                  <Modal.Title>Invest Payment Confirmation</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                  <p>Invest Payment Proof</p>
                                  <form>
                                    <label>
                                      Invest Id:
                <br />  <input type="text" name="name" />
                                    </label>
                                    <br />
                                    <label>
                                      Amount:
                <br />  <input type="text" name="name" />
                                    </label>
                                    <br />
                                    <label>
                                      Reference:
                <br />  <input type="text" name="name" />
                                    </label>
                                    <br />
                                    <label>
                                      Date:
                <br />  <input type="text" name="name" />
                                    </label>
                                  </form>
                                </Modal.Body>

                                <Modal.Footer>
                                  <Button variant="secondary">Cancel</Button>
                                  <Button variant="primary">Verify Payment</Button>
                                </Modal.Footer>
                              </Modal.Dialog>
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
                      //Displaying list of investments
                      data={investmentList}
                      options={{
                        sorting: true
                      }}
                    />
                  </div>
                </TabPanel>
              </Box>
            </div>
          </Row>
        </Col>


      </Row>

    </div>
  )
}

export default ProductsOrders