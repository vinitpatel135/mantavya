import React , {useState} from 'react';
import { Box, Container, Grid, TextField, Button, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // For responsiveness

export default function ResponsiveForm() {
  const [formData, setFormData] = useState({
    name: "",
    village:'',
    number: "",
    lend: "",
    vavetar : "",
    piyatkebinpiyat : "",
    puchparach : ""
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const phoneNumber = "+917698410448";

    const message = `New form submission:\nખેડૂત નું નામ: ${formData.name}\nગામ નું નામ: ${formData.village}\nખેડૂત નો મોબાઈલ નંબર: ${formData.number}\nખેડૂત પાસે કેટલી જમીન છે : ${formData.lend}\nખેડૂત ક્યુ ક્યુ વાવેતર કરે છે: ${formData.vavetar}\nખેડૂત ની જમીન પિયત છે કે બિનપિયત : ${formData.piyatkebinpiyat}\nબિયારણ ની પુછપરસ કરવા માટે અહીંયા વિગત ભરો : ${formData.puchparach}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
    console.log("paras");
  };
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 0' }}>
      <Container>
        {/* Title of the form */}
        <Typography
          variant="h5"
          align="center"
          className='typo mantvya-head1'
          sx={{ marginBottom: '20px', color: '#E31E24', fontWeight: 'bold',}}
        >
          🌿 કોઈ પણ જાણકારી મેળવવા માટે  અહીંયા વિગત ભરો 🌿
        </Typography>

        {/* Form starts here */}
        <Grid container spacing={2} justifyContent="center">
          {/* Farmer's Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ખેડૂત નું નામ*"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Village Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ગામ નું નામ*"
              value={formData.village}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Farmer's Contact Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ખેડૂત નો મોબાઈલ નંબર*"
              value={formData.number}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Area of Farming */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ખેડૂત પાસે કેટલી જમીન છે*"
              value={formData.lend}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Crop Grown */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ખેડૂત ક્યુ ક્યુ વાવેતર કરે છે*"
              value={formData.vavetar}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Type of Farming */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="ખેડૂત ની જમીન પિયત છે કે બિનપિયત*"
              value={formData.piyatkebinpiyat}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Additional Details TextArea */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="બિયારણ ની પુછપરસ કરવા માટે અહીંયા વિગત ભરો*"
              value={formData.puchparach}
              onChange={handleChange}
              variant="outlined"
              multiline

              rows={4}
              required
              sx={{
                backgroundColor: 'white',
                '& fieldset': {
                  borderColor: '#c62828',
                },
              }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: '#c62828',
                padding: '10px 20px',
                fontWeight: 'bold',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: '#b71c1c',
                },
              }}
            >
              જાણકારી ભર્યા પછી અહીંયા ક્લિક કરો
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
