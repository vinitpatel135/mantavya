import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css'
import { Box } from '@mui/material';

export default function AccordionList() {
    return (
        <div className="container-custom accordion-main mt-5">
            <Box display="flex" justifyContent="center" alignItems="center" className="mb-5 pb-4 wow animate__animated animate__fadeIn">
                <img
                    src="/Images/Group.png"
                    alt="leaf icon"
                    className='leaf-image'
                    style={{ marginRight: '10px', width: '50px', height: '50px', transform:'rotateY(180deg)' }}
                />
                <Typography
                    variant="h5"
                    component="h1"
                    textAlign="center"
                    className="fw-bold mantvya-head1"
                    color="textPrimary"
                    //   style={{ color: '#b91c1c' }}
                    sx={{
                        color: '#E31E24',
                        // fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.8rem', lg: '2.2rem' }, // Responsive font size
                    }}
                >
                    મંતવ્ય સીડ્સ નું બિયારણ ખરીદવાથી શું શું ફાયદા થાય છે.
                </Typography>
                <img
                    src="/Images/Group.png"
                    alt="leaf icon"
                    className='leaf-image'
                    style={{ marginLeft: '10px', width: '50px', height: '50px' }}
                />
            </Box>

            <div className="accordions-list">
                <Accordion className="mt-1 accrodion-dropdown">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' color='error' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className="accrodion-heading" variant='h5' fontWeight={"800"}>1. ઊચ્ચ ગુણવત્તાવાળું બિયારણ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus libero ex, sit dolorem eos distinctio sunt architecto nisi aliquid tenetur officiis ea porro. Quasi laboriosam facilis veniam corporis modi sapiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="mt-3 accrodion-dropdown">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' color='error' />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className="accrodion-heading" variant='h5' fontWeight={"bold"}>2. નવી ટેક્નોલોજી અને રિસર્ચ આધારિત ઉત્પાદન</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus libero ex, sit dolorem eos distinctio sunt architecto nisi aliquid tenetur officiis ea porro. Quasi laboriosam facilis veniam corporis modi sapiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="mt-3 accrodion-dropdown">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' color='error' />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className="accrodion-heading" variant='h5' fontWeight={"bold"}>3. ઊચ્ચ અંકુરણ ક્ષમતા</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus libero ex, sit dolorem eos distinctio sunt architecto nisi aliquid tenetur officiis ea porro. Quasi laboriosam facilis veniam corporis modi sapiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="mt-3 accrodion-dropdown">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' color='error' />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography className="accrodion-heading" variant='h5' fontWeight={"bold"}>4. ખેડુતો માટે ફાયદાકારક ભાવ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus libero ex, sit dolorem eos distinctio sunt architecto nisi aliquid tenetur officiis ea porro. Quasi laboriosam facilis veniam corporis modi sapiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className="mt-3 mb-5 accrodion-dropdown">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon fontSize='large' color='error' />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography className="accrodion-heading" variant='h5' fontWeight={"bold"}>5. વિશ્વસનીયતા અને વિશ્વાસ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus libero ex, sit dolorem eos distinctio sunt architecto nisi aliquid tenetur officiis ea porro. Quasi laboriosam facilis veniam corporis modi sapiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    )
}
