import React, { useMemo } from 'react';
import { Grid, MenuItem } from '@mui/material';
import { Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import { VehicleTypeEnum } from '../../../../enums/Entity/VehicleType.enum';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { MediaListFieldset } from '../Media/MediaListFieldset';
import { EntityFieldset } from '../Entity/EntityFieldset';

/**
 * VehicleFieldset
 *   VehicleFieldset component
 * @param {any}  props Properties
 * @return {React.Component} VehicleFieldset Component
 */
export const VehicleFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      title: {
        name: getFieldName('title', props),
        id: 'VehicleFieldset.' + getFieldName('title', props),
        label: 'Titulo', // i18n
        type: 'text',
        disabled: isFieldDisabled('title', props),
        hidden: isFieldHidden('title', props)
      },
      plate: {
        name: getFieldName('plate', props),
        id: 'VehicleFieldset.' + getFieldName('plate', props),
        label: 'Placa', // i18n
        type: 'text',
        disabled: isFieldDisabled('plate', props),
        hidden: isFieldHidden('plate', props)
      },
      media: {
        name: getFieldName('media', props),
        id: 'VehicleFieldset.' + getFieldName('media', props),
        label: 'Midia', // i18n
        type: 'text',
        disabled: isFieldDisabled('media', props),
        hidden: isFieldHidden('media', props)
      },
      type: {
        name: getFieldName('type', props),
        id: 'VehicleFieldset.' + getFieldName('type', props),
        labelId: 'Label-VehicleFieldset.' + getFieldName('type', props),
        label: 'Tipo', // i18n
        type: 'text',
        helperText: 'Selecione o tipo de veiculo', // i18n
        disabled: isFieldDisabled('type', props),
        hidden: isFieldHidden('type', props),
        options: [
          {
            value: VehicleTypeEnum.car,
            label: 'Car' // i18n
          },
          {
            value: VehicleTypeEnum.pickup,
            label: 'Pickup' // i18n
          },
          {
            value: VehicleTypeEnum.truck,
            label: 'Caminhão' // i18n
          }
        ]
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
        <Field
          className="crud-form-input"
          name={fields.plate.name}
          disabled={fields.plate.disabled}
          hidden={fields.plate.hidden}
          id={fields.plate.id}
          type={fields.plate.type}
          label={fields.plate.label}
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

      <Grid item xs={12} lg={6}>
        {fields.type.hidden ?
          <Field
            name={fields.type.name}
            disabled={fields.type.disabled}
            hidden={fields.type.hidden}
            id={fields.type.id}
            type={fields.type.type}
            label={fields.type.label}
          />
          :
          (<Field
            className="crud-form-input"
            component={Select}
            formHelperText={{ children: fields.type.helperText }}
            name={fields.type.name}
            disabled={fields.type.disabled}
            hidden={fields.type.hidden}
            id={fields.type.id}
            type={fields.type.type}
            label={fields.type.label}
            labelId={fields.type.labelId}
          >
            {fields.type.options.map((option, index) => (<MenuItem key={index} value={option.value}>{option.label}</MenuItem>))}
          </Field>)}

      </Grid>

    </Grid>
  </div>)
}
export default VehicleFieldset;
