const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPasswordLength = 7;
const maxTitleLength = 20;
const formatPhoneNumber = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const descriptionMaxLength=100;

export const validateInput = (name, value) => {
  let hasError = false;
  let error = '';

  switch (name) {

    case 'email':
      if (value.trim() === '') {
        hasError = true;
        error = 'Email es requerido';
      } else if (!formatEmail.test(value)) {
        hasError = true;
        error = 'Email es inválido';
      } else {
        hasError = false;
        error = '';
      }
      break;

    case 'password':
      if (value.trim() === '') {
        hasError = true;
        error = 'Contraseña es requerida';
      } else if (value.length < minPasswordLength) {
        hasError = true;
        error = `Contraseña debe tener al menos ${minPasswordLength} carácteres`;
      } else {
        hasError = false;
        error = '';
      }
      break;

    case 'name':
      if (value.trim() === '') {
        hasError = true;
        error = 'El título es requerido';
      } else if (value.length > maxTitleLength){
        hasError = true;
        error = `El título tiene un máximo de ${maxTitleLength} carácteres` 
      }
      break;

    case 'categoryId':
      if (value.trim() === '') {
        hasError = true;
        error = 'Debes seleccionar un tipo de animal.'
      }
      break;

    case 'breed':
      if (value.trim() === '') {
        hasError = true;
        error = 'Raza es requerida';
      }
      break;

    case'date':
      if (value.trim() === '') {
        hasError = true;
        error = 'Fecha es requerida';
      }
      break;

    case 'description':
      if (value.length > descriptionMaxLength){
        hasError = true;
        error = `La descripción no puede superar los ${descriptionMaxLength} carácteres`
      }
      break;

    case'contact':
      if (value.trim() === '') {
        hasError = true;
        error = 'Teléfono es requerido';
      } else if (!formatPhoneNumber.test(value)){
        hasError= true;
        error= "Télefono inválido"
      }
      break;

    default:
      break;
  }
  return { hasError, error };
};

export const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, error } = validateInput(name, value);
  let isFormValid = true;

  for (const key in formState) {
    const item = formState[key];
    if (key !== name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      isFormValid = false;
      break;
    }
  }

  dispatch({
    type: UPDATED_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  });
};

export const UPDATED_FORM = 'UPDATED_FORM';