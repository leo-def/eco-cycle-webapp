import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../../utils/FormUtils';
import { EntityFieldset } from '../../Entity/EntityFieldset';
import { PhysicalQuantityAutocomplete } from '../PhysicalQuantity/PhysicalQuantityAutocomplete';

/**
 * MeasurementUnitFieldset
 *   MeasurementUnitFieldset component
 * @param {any}  props Properties
 * @return {React.Component} MeasurementUnitFieldset Component
 */
export const MeasurementUnitFieldset = (props: any) => {

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
      value: {
        name: getFieldName('value', props),
        id: 'ProductFieldset.' + getFieldName('value', props),
        label: 'Valor', // i18n
        type: 'number',
        disabled: isFieldDisabled('value', props),
        hidden: isFieldHidden('value', props)
      },
      physicalQuantity: {
        name: getFieldName('physicalQuantity', props),
        id: 'ProductFieldset.' + getFieldName('physicalQuantity', props),
        label: 'Grandeza de medida', // i18n
        type: 'text',
        disabled: isFieldDisabled('physicalQuantity', props),
        hidden: isFieldHidden('physicalQuantity', props)
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

  const physicalQuantitySymbolField = 'symbol';

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

      <Grid item xs={12} lg={6}>
        <PhysicalQuantityAutocomplete
          name={fields.physicalQuantity.name}
          disabled={fields.physicalQuantity.disabled}
          hidden={fields.physicalQuantity.hidden}
          id={fields.physicalQuantity.id}
          label={fields.physicalQuantity.label}
          idField={physicalQuantitySymbolField} />
      </Grid>

    </Grid>

  </div>)
}
export default MeasurementUnitFieldset;
