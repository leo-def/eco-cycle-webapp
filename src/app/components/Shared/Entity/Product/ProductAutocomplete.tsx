import React, { useEffect, useMemo } from 'react';
import { useField } from 'formik';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../reducers';
import { productFetchState } from '../../../../reducers/Module/Admin/Product/Fetch';
import { getTitle } from '../../../../types/Entity/Product/Product';

export const ProductAutocomplete = (props: any) => {
  const { name, label, fetchParams, ...others } = props;
  const idField = props.idField || 'id';

  const getValueId = (value) => {
    if (!value) {
      return value;
    }
    return idField ? value[idField] : value;
  }

  const getOptionLabel = (option: any) => {
    if (props.getOptionLabel) {
      return props.getOptionLabel(option);
    }
    return getTitle(option) || ''
  }

  const isOptionEqualToValue = (option: any, value: any) => {
    if (props.isOptionEqualToValue) {
      return props.isOptionEqualToValue(option, value);
    }
    const optionId = getValueId(option);
    const valueId = getValueId(value);
    return optionId === valueId;
  }

  const { fetchResponse } = useSelector((state: RootState) => state.module.admin.product.fetch);
  const { items, fetched } = fetchResponse;

  const [, formHelper, formMeta] = useField(name);
  const formValue = formHelper.value;
  const value = useMemo(() => (items || []).find((item) => isOptionEqualToValue(item, formValue)), [items, formValue]);
  const setFormValue = (value) => { formMeta.setValue(getValueId(value)); }
  const dispatch = useDispatch();

  const fetch = (fetchParams) => {
    dispatch({
      type: productFetchState.FETCH,
      payload: { fetchParams }
    })
  }

  useEffect(() => {
    fetch(fetchParams)
  }, [fetchParams])

  return (<React.Fragment>
    <Autocomplete
      id="combo-box-demo"
      {...others}
      options={items}
      value={value}
      disabled={!fetched}
      onChange={(event, newValue) => {
        setFormValue(newValue);
      }}
      getOptionLabel={(option) => getOptionLabel(option)}
      isOptionEqualToValue={(option, value) => isOptionEqualToValue(option, value)}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params}
        label={label}
        variant="outlined" />}
    />
  </React.Fragment>)
}