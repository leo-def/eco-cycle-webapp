import React, { useMemo } from 'react';
import { Grid, MenuItem } from '@mui/material';
import { Field } from 'formik';
import { TextField, Select } from 'formik-mui';
import { AddressFieldset } from '../Address/AddressFieldset';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { ActivityTypeEnum } from '../../../../enums/Entity/ActivityType.enum';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { MediaListFieldset } from '../Media/MediaListFieldset';

/**
 * PlaceFieldset
 *   PlaceFieldset component
 * @param {any}  props Properties
 * @return {React.Component} PlaceFieldset Component
 */
export const PlaceFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      title: {
        name: getFieldName('title', props),
        id: 'PlaceFieldset.' + getFieldName('title', props),
        label: 'Titulo', // i18n
        type: 'text',
        disabled: isFieldDisabled('title', props),
        hidden: isFieldHidden('title', props)
      },
      address: {
        name: getFieldName('address', props),
        id: 'PlaceFieldset.' + getFieldName('address', props),
        label: 'Endereço', // i18n
        type: 'text',
        disabled: isFieldDisabled('address', props),
        hidden: isFieldHidden('address', props)
      },
      media: {
        name: getFieldName('media', props),
        id: 'PlaceFieldset.' + getFieldName('media', props),
        label: 'Midia', // i18n
        type: 'text',
        disabled: isFieldDisabled('media', props),
        hidden: isFieldHidden('media', props)
      },
      type: {
        name: getFieldName('type', props),
        id: 'PlaceFieldset.' + getFieldName('type', props),
        labelId: 'Label-PlaceFieldset.' + getFieldName('type', props),
        label: 'Tipo', // i18n
        type: 'text',
        helperText: 'Selecione o tipo do local', // i18n
        disabled: isFieldDisabled('type', props),
        hidden: isFieldHidden('type', props),
        options: [
          {
            value: ActivityTypeEnum.supply,
            label: 'Fornecedor' // i18n
          },
          {
            value: ActivityTypeEnum.collect,
            label: 'Coletor' // i18n
          },
          {
            value: ActivityTypeEnum.both,
            label: 'Fornecedor / Coletor' // i18n
          }
        ]
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
            name={fields.type.name}
            disabled={fields.type.disabled}
            hidden={fields.type.hidden}
            id={fields.type.id}
            label={fields.type.label}
            formHelperText={{ children: fields.type.label }}
            labelId={fields.type.labelId}>{
              fields.type.options.map((item, index) => (<MenuItem key={index} value={item.value}>{item.label}</MenuItem>))
            }</Field>)}
      </Grid>

      <Grid item xs={12}>
        <fieldset>
          <AddressFieldset
            name={fields.address.name}
            disabled={fields.address.disabled}
            hidden={fields.address.hidden}
            id={fields.address.id}
            label={fields.address.label} />
        </fieldset>
      </Grid>

      <Grid item xs={12}>
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
export default PlaceFieldset;
