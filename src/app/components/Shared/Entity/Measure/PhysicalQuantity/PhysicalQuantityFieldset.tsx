import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../../utils/FormUtils';
import { EntityFieldset } from '../../Entity/EntityFieldset';

/**
 * PhysicalQuantityFieldset
 *   PhysicalQuantityFieldset component
 * @param {any}  props Properties
 * @return {React.Component} PhysicalQuantityFieldset Component
 */
export const PhysicalQuantityFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      title: {
        name: getFieldName('title', props),
        id: 'ProductFieldset.' + getFieldName('title', props),
        label: 'Titulo', // i18n
        type: 'text',
        disabled: isFieldDisabled('title', props),
        hidden: isFieldHidden('title', props)
      },
      symbol: {
        name: getFieldName('symbol', props),
        id: 'ProductFieldset.' + getFieldName('symbol', props),
        label: 'Simbolo', // i18n
        type: 'text',
        disabled: isFieldDisabled('symbol', props),
        hidden: isFieldHidden('symbol', props)
      }
    }
  }, [props])

  return (<div className="crud-form-fieldset">

    <Grid container spacing={1}>

      <Grid item xs={12}>
        <EntityFieldset />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Field
          className="crud-form-input"
          name={fields.title.name}
          disabled={fields.title.disabled}
          hidden={fields.title.hidden}
          id={fields.title.id}
          type={fields.title.type}
          label={fields.title.label}
          component={TextField}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Field
          className="crud-form-input"
          name={fields.symbol.name}
          disabled={fields.symbol.disabled}
          hidden={fields.symbol.hidden}
          id={fields.symbol.id}
          type={fields.symbol.type}
          label={fields.symbol.label}
          component={TextField}
        />
      </Grid>

    </Grid>

  </div>)
}
export default PhysicalQuantityFieldset;
