import { Box, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addCourse } from '../../Services/course.service';

const AddCourse = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      duration: '',
      price: '',
      startDate: '',
      url: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      duration: Yup.string().required('Required'),
      price: Yup.number().required('Required').positive('Must be positive'),
      startDate: Yup.date().required('Required'),
      url: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      addCourse(values);
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        width="500px"
        sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <TextField
          label="Course Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Duration"
          name="duration"
          value={formik.values.duration}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.duration && Boolean(formik.errors.duration)}
          helperText={formik.touched.duration && formik.errors.duration}
        />
        <TextField
          label="Price"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          type="date"
          name="startDate"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.startDate && Boolean(formik.errors.startDate)}
          helperText={formik.touched.startDate && formik.errors.startDate}
        />
        <TextField
          label="Course URL"
          name="url"
          value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.url && Boolean(formik.errors.url)}
          helperText={formik.touched.url && formik.errors.url}
        />
        <Button type="submit" variant="contained" sx={{backgroundColor:" #00246B"}}>
          Add Course
        </Button>
      </Box>
    </Box>
  );
};

export default AddCourse;
