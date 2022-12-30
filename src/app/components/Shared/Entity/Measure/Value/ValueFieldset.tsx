import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../../utils/FormUtils';
import { EntityFieldset } from '../../Entity/EntityFieldset';
import { MeasurementUnitAutocomplete } from '../MeasurementUnit/MeasurementUnitAutocomplete';

/**
 * ValueFieldset
 *   ValueFieldset component
 * @param {any}  props Properties
 * @return {React.Component} ValueFieldset Component
 */
export const ValueFieldset = (props: any) => {
  const { physicalQuantitySymbol } = props;
  const fields = useMemo(() => {
    return {
      value: {
        name: getFieldName('value', props),
        id: 'ProductFieldset.' + getFieldName('value', props),
        label: 'Valor', // i18n
        type: 'number',
        disabled: isFieldDisabled('value', props),
        hidden: isFieldHidden('value', props)
      },
      measurementUnitId: {
        name: getFieldName('measurementUnitId', props),
        id: 'ProductFieldset.' + getFieldName('measurementUnitId', props),
        label: 'Unidade de medida', // i18n
        type: 'text',
        disabled: isFieldDisabled('measurementUnitId', props),
        hidden: isFieldHidden('measurementUnitId', props)
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
          name={fields.value.name}
          disabled={fields.value.disabled}
          hidden={fields.value.hidden}
          id={fields.value.id}
          type={fields.value.type}
          label={fields.value.label}
          component={TextField}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <MeasurementUnitAutocomplete
          physicalQuantitySymbol={physicalQuantitySymbol}
          name={fields.measurementUnitId.name}
          disabled={fields.measurementUnitId.disabled}
          hidden={fields.measurementUnitId.hidden}
          id={fields.measurementUnitId.id}
          label={fields.measurementUnitId.label} />
      </Grid>

    </Grid>

  </div>)
}
export default ValueFieldset;
