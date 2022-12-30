import React, { useMemo } from 'react';
import { Grid, MenuItem } from '@mui/material';
import { Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import { CollaboratorRoleEnum } from '../../../../enums/Entity/CollaboratorRole.enum';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { CollaboratorUserFieldset } from '../User/CollaboratorUserFieldset';

/**
 * CollaboratorFieldset
 *   CollaboratorFieldset component
 * @param {any}  props Properties
 * @return {React.Component} CollaboratorFieldset Component
 */
export const CollaboratorFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      user: {
        name: getFieldName('user', props),
        disabled: isFieldDisabled('user', props),
        hidden: isFieldHidden('user', props)
      },
      role: {
        name: getFieldName('role', props),
        id: 'CollaboratorFieldset.' + getFieldName('role', props),
        labelId: 'Label-CollaboratorFieldset.' + getFieldName('role', props),
        label: 'Cargo', // i18n
        type: 'text',
        helperText: 'Selecione o cargo', // i18n
        disabled: isFieldDisabled('role', props),
        hidden: isFieldHidden('role', props),
        options: [
          {
            value: CollaboratorRoleEnum.owner,
            label: 'Dono' // i18n
          },
          {
            value: CollaboratorRoleEnum.manager,
            label: 'Gerente' // i18n
          },
          {
            value: CollaboratorRoleEnum.employee,
            label: 'Funcionário' // i18n
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

      <Grid item xs={12}>
        <CollaboratorUserFieldset
          name={fields.user.name}
          disabled={fields.user.disabled}
          hidden={fields.user.hidden}
          component={TextField}
        />
      </Grid>


      <Grid item xs={12} lg={6}>
        {fields.role.hidden ?
          <Field
            name={fields.role.name}
            disabled={fields.role.disabled}
            hidden={fields.role.hidden}
            id={fields.role.id}
            type={fields.role.type}
            label={fields.role.label}
          />
          :
          (<Field
            className="crud-form-input"
            component={Select}
            formHelperText={{ children: fields.role.helperText }}
            name={fields.role.name}
            disabled={fields.role.disabled}
            hidden={fields.role.hidden}
            id={fields.role.id}
            type={fields.role.type}
            label={fields.role.label}
            labelId={fields.role.labelId}
          >
            {fields.role.options.map((option, index) => (<MenuItem key={index} value={option.value}>{option.label}</MenuItem>))}
          </Field>)}

      </Grid>

    </Grid>
  </div>)
}
export default CollaboratorFieldset;
