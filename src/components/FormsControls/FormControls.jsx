// import { Field } from 'redux-form'
// import s from './FormsControls.module.css'

// export const FormControl = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error

//     return <div className={hasError && s.formControl + ' ' + s.error} >
//         {props.children}
//         <div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     </div>
// }

// // export const Textarea = (props) => {
// //     const { input, meta, ...restProps } = props;
// //     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// // }

// export const Input = (props) => {
//     const { input, meta, ...restProps } = props;
//     return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }

// export const createField = (component, validators, name, type, value) => {
//     return <>
//         <Field component={component} validate={validators}
//             name={name} type={type} value={value}
//         />
//     </>
// }