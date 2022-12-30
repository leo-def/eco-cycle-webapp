import React, { useMemo } from 'react';
import { Button } from '@mui/material';
import { useField } from 'formik';

export const StepAction = (props) => {
  const {
    handleNext,
    handleBack,
    disabled,
    nextDisabled,
    backDisabled,
    name
  } = props

  const [, helper,] = useField(name);

  const isComplete = useMemo(() => helper.touched && !helper.error, [helper.touched, helper.error])

  return (<div>
    {nextDisabled || disabled || !isComplete
      ? null
      : <Button
        color="secondary"
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 1, mr: 1 }}
      >Continuar</Button>
    }{/*i18n*/}
    {backDisabled || disabled
      ? null
      : <Button
        color="secondary"
        disabled={backDisabled || disabled}
        onClick={handleBack}
        sx={{ mt: 1, mr: 1 }}
      >Voltar</Button>
    }{/*i18n*/}
  </div>);
}