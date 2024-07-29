import * as Yup from 'yup';


export let pacienteSchema = Yup.object().shape({
    nome: Yup.string().required(),
    email: Yup.string().email().required('O email é obrigatório').matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Insira um email válido!')
})