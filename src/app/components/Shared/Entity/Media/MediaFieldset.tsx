import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { EntityFieldset } from '../Entity/EntityFieldset';

/**
 * MediaFieldset
 *   MediaFieldset component
 * @param {any}  props Properties
 * @return {React.Component} MediaFieldset Component
 */
export const MediaFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      type: {
        name: getFieldName('type', props),
        id: 'MediaFieldset.' + getFieldName('type', props),
        label: 'Tipo', // i18n
        type: 'text',
        disabled: isFieldDisabled('type', props),
        hidden: isFieldHidden('type', props)
      },
      mediaType: {
        name: getFieldName('mediaType', props),
        id: 'MediaFieldset.' + getFieldName('mediaType', props),
        label: 'Tipo de mídia', // i18n
        type: 'text',
        disabled: isFieldDisabled('mediaType', props),
        hidden: isFieldHidden('mediaType', props)
      },
      src: {
        name: getFieldName('src', props),
        id: 'MediaFieldset.' + getFieldName('src', props),
        label: 'src', // i18n
        type: 'text',
        disabled: isFieldDisabled('src', props),
        hidden: isFieldHidden('src', props)
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
          name={fields.type.name}
          disabled={fields.type.disabled}
          hidden={fields.type.hidden}
          id={fields.type.id}
          type={fields.type.type}
          label={fields.type.label}
          component={TextField}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Field
          className="crud-form-input"
          name={fields.mediaType.name}
          disabled={fields.mediaType.disabled}
          hidden={fields.mediaType.hidden}
          id={fields.mediaType.id}
          type={fields.mediaType.type}
          label={fields.mediaType.label}
          component={TextField}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Field
          className="crud-form-input"
          name={fields.src.name}
          disabled={fields.src.disabled}
          hidden={fields.src.hidden}
          id={fields.src.id}
          type={fields.src.type}
          label={fields.src.label}
          component={TextField}
        />
      </Grid>

    </Grid>
  </div>)
}
export default MediaFieldset;
