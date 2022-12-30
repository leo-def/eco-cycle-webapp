import React, { useCallback, useEffect, useMemo } from 'react';
import { MenuItem } from '@mui/material';
import { Field, useField } from 'formik';
import { Select } from 'formik-mui';
import { getItemOfferType } from '../../../../hooks/Module/ItemOffer/ItemOfferType';

/**
 * ItemOfferTypeSelect
 *   ItemOfferTypeSelect component
 * @param {any}  props Properties
 * @return {React.Component} ItemOfferTypeSelect Component
 */
export const ItemOfferTypeSelect = (props: any) => {
  const { itemOfferType, hidden, name } = props;
  const [, formHelper, formMeta] = useField(name);

  const formValue = useMemo(() => formHelper.value, [formHelper.value]);
  const setFormValue = useCallback((value) => formMeta.setValue(value), [formMeta.setValue]);

  useEffect(() => {
    if (itemOfferType && itemOfferType !== formValue) {
      setFormValue(itemOfferType);
    }
  }, [itemOfferType, formValue])

  return (hidden ? (<Field
    name={props.name}
    disabled={props.disabled}
    hidden={props.hidden}
    id={props.id}
    type={props.type}
    label={props.label}
  />) :
    (<Field
      className="crud-form-input"
      component={Select}
      name={props.name}
      disabled={props.disabled}
      id={props.id}
      label={props.label}
      labelId={props.labelId}>{
        props.options.map((item, index) => (<MenuItem key={index} value={item.value}>{item.label}</MenuItem>))
      }</Field>));
}
export default ItemOfferTypeSelect;


