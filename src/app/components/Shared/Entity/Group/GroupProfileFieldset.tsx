import React, { useCallback, useEffect, useMemo } from 'react';
import { Field, useField } from 'formik';
import { Switch } from 'formik-mui';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { FormControlLabel, Grid } from '@mui/material';
import { ProfileFieldset } from '../Profile/ProfileFieldset';
import { profileFieldsetInitialValues } from '../../../../types/Form/Module/ProfileFieldset';

/**
 * GroupProfileFieldset
 *   GroupProfileFieldset component
 * @param {any}  props Properties
 * @return {React.Component} GroupProfileFieldset Component
 */
export const GroupProfileFieldset = (props: any) => {
  const fields = useMemo(() => {
    return {
      createGroupProfile: {
        name: getFieldName('createGroupProfile', props),
        id: 'GroupProfileFieldset.' + getFieldName('createGroupProfile', props),
        label: 'Criar Empresa ?', // i18n
        type: 'checkbox',
        disabled: isFieldDisabled('createGroupProfile', props),
        hidden: isFieldHidden('createGroupProfile', props)
      },
      profile: {
        name: getFieldName('profile', props),
        id: 'GroupProfileFieldset.' + getFieldName('profile', props),
        label: 'Perfil da Empresa', // i18n
        disabled: isFieldDisabled('profile', props),
        hidden: isFieldHidden('profile', props)
      }
    }
  }, [props])

  const [, , profileMeta] = useField(fields.profile.name)
  const resetProfileValue = useCallback(() => {
    profileMeta.setTouched(true)
    profileMeta.setValue(profileFieldsetInitialValues)
  }, [])
  const [, createGroupProfileHelper,] = useField(fields.createGroupProfile.name)
  const createGroupProfile = useMemo(() => createGroupProfileHelper.value, [createGroupProfileHelper.value])

  useEffect(() => {
    if (!createGroupProfile) {
      resetProfileValue()
    }
  }, [createGroupProfile])

  return (<div className="crud-form-fieldset">

    <Grid container spacing={1}>

      <Grid item xs={12} lg={6}>
        <FormControlLabel
          control={<Field
            className="crud-form-input"
            component={Switch}
            name={fields.createGroupProfile.name}
            disabled={fields.createGroupProfile.disabled}
            hidden={fields.createGroupProfile.hidden}
            id={fields.createGroupProfile.id}
            type={fields.createGroupProfile.type}
          />}
          label={fields.createGroupProfile.label} />


      </Grid>

      <Grid item xs={12}>
        {createGroupProfile ? (<ProfileFieldset
          {...props}
          name={fields.profile.name}
          disabled={fields.profile.disabled}
          hidden={fields.profile.hidden}
        />) : null}
      </Grid>

    </Grid>

  </div>)
}
export default GroupProfileFieldset;
