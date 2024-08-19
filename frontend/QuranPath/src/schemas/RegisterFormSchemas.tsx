import * as yup from 'yup';

export const RegisterFormSchema = yup.object().shape({
    name: yup
        .string()
        .required("Öğrenci ismi zorunludur")
        .min(2, "İsim en az 2 karakter olmalıdır")
        .max(50, "İsim en fazla 50 karakter olabilir"),

    surname: yup
        .string()
        .required("Öğrenci soyismi zorunludur")
        .min(2, "Soyisim en az 2 karakter olmalıdır")
        .max(50, "Soyisim en fazla 50 karakter olabilir"),

    parentName: yup
        .string()
        .required("Veli ismi zorunludur")
        .min(2, "Veli ismi en az 2 karakter olmalıdır")
        .max(50, "Veli ismi en fazla 50 karakter olabilir"),

    parentPhone: yup
        .string()
        .required("Veli telefon numarası zorunludur")
        .matches(/^[0-9]+$/, "Telefon numarası yalnızca rakamlardan oluşmalıdır")
        .min(10, "Telefon numarası en az 10 rakam olmalıdır")
        .max(15, "Telefon numarası en fazla 15 rakam olabilir"),

    dateOfBirth: yup
        .date()
        .required("Doğum tarihi zorunludur")
        .nullable()
        .max(new Date(), "Doğum tarihi bugünden daha ileri bir tarih olamaz"),

    email: yup
        .string()
        .email("Geçerli bir email adresi girin")
        .required("Email zorunludur"),

    password: yup
        .string()
        .required("Şifre zorunludur")
        .min(8, "Şifre en az 8 karakter olmalıdır")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, "Şifre en az bir harf ve bir sayı içermelidir"),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')

});
