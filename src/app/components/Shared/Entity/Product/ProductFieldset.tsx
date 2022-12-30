import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { MediaListFieldset } from '../Media/MediaListFieldset';
import { EntityFieldset } from '../Entity/EntityFieldset';

/**
 * ProductFieldset
 *   ProductFieldset component
 * @param {any}  props Properties
 * @return {React.Component} ProductFieldset Component
 */
export const ProductFieldset = (props: any) => {

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
      media: {
        name: getFieldName('media', props),
        id: 'PlaceFieldset.' + getFieldName('media', props),
        label: 'Midia', // i18n
        type: 'text',
        disabled: isFieldDisabled('media', props),
        hidden: isFieldHidden('media', props)
      },
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
        <MediaListFieldset
          name={fields.media.name}
          disabled={fields.media.disabled}
          hidden={fields.media.hidden}
          id={fields.media.id}
          label={fields.media.label}
          component={TextField}
        />
      </Grid>

    </Grid>
  </div>)
}
export default ProductFieldset;
