import { TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
const StudentForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            secondName: ''
        }
    });
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller name="firstName" control={control} render={({ field }) => <TextField {...field} />} />
            <Controller name="secondName" control={control} render={({ field }) => <TextField {...field} />} />

            <input type="submit" />
        </form>
    );
};
export default StudentForm;
