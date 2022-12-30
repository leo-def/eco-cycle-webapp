import React, { useMemo } from 'react';
import { Grid, MenuItem } from '@mui/material';
import { Field } from 'formik';
import { Select } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { ProfileFieldset } from '../Profile/ProfileFieldset';
import { ActivityTypeEnum } from '../../../../enums/Entity/ActivityType.enum';

/**
 * GroupFieldset
 *   GroupFieldset component
 * @param {any}  props Properties
 * @return {React.Component} GroupFieldset Component
 */
export const GroupFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      profile: {
        name: getFieldName('profile', props),
        disabled: isFieldDisabled('profile', props),
        hidden: isFieldHidden('profile', props)
      },
      type: {
        name: getFieldName('type', props),
        id: 'GroupFieldset.' + getFieldName('type', props),
        labelId: 'Label-GroupFieldset.' + getFieldName('type', props),
        label: 'Tipo', // i18n
        type: 'text',
        helperText: 'Selecione o tipo do grupo', // i18n
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
      },
    }
  }, [props])

  return (<div className="crud-form-fieldset">
    <Grid container spacing={1}>

      <Grid item xs={12}>
        <EntityFieldset />
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
        <ProfileFieldset
          {...props}
          name={fields.profile.name}
          disabled={fields.profile.disabled}
          hidden={fields.profile.hidden} />
      </Grid>

    </Grid>
  </div>)
}
export default GroupFieldset;
