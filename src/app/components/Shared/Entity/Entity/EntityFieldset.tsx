import React, { useMemo } from 'react';
import { Field } from 'formik';
import { getFieldName } from '../../../../utils/FormUtils';

/**
 * EntityFieldset
 *   EntityFieldset component
 * @param {any}  props Properties
 * @return {React.Component} EntityFieldset Component
 */
export const EntityFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      id: {
        name: getFieldName('id', props),
        id: 'EntityFieldset.' + getFieldName('id', props),
        label: 'Id.', // i18n
        type: 'text',
        disabled: true,
        hidden: true
      }
    }
  }, [props])

  return (<React.Fragment>
    <Field
      name={fields.id.name}
      disabled={fields.id.disabled}
      hidden={fields.id.hidden}
      id={fields.id.id}
      type={fields.id.type}
      label={fields.id.label}
    />
  </React.Fragment>)
}
export default EntityFieldset;
