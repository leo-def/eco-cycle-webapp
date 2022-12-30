import React, { useCallback, useEffect, useMemo } from 'react';
import { Field, useField } from 'formik';
import { getSetGroup } from '../../../../hooks/Module/Group/Set';
import { getFieldName } from '../../../../utils/FormUtils';

/**
 * GroupSetFieldset
 *   GroupSetFieldset component
 * @param {any}  props Properties
 * @return {React.Component} GroupSetFieldset Component
 */
export const GroupSetFieldset = (props: any) => {
  const localSetGroup = getSetGroup();

  const idField = props.idField || 'id';

  const getValueId = (value) => {
    if(!value) {
      return value;
    }
    return idField ? value[idField] : value;
  }
  const value = useMemo(() => getValueId(localSetGroup), [localSetGroup]);

  const [, , groupMeta] = useField(props.name)
  const setGroup = useCallback(
    (group) => {
      groupMeta.setTouched(true)
      groupMeta.setValue(group)
    }, [groupMeta]);

  useEffect(() => {
    if (value) {
      setGroup(value);
    }
  }, [value]);

  return (<React.Fragment></React.Fragment>);
}
export default GroupSetFieldset;
