import React, { useEffect, useMemo } from 'react';
import { useField } from 'formik';
import { Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../reducers';
import { measurementUnitFetchState } from '../../../../../reducers/Module/Admin/MeasurementUnit/Fetch';
import { FetchParams } from '../../../../../types/Fetch/FetchParams';
import { FetchReducer } from '../../../../../reducers/Crud';
import { getTitle } from '../../../../../types/Entity/Measure/MeasurementUnit/MeasurementUnit';

export const MeasurementUnitAutocomplete = (props: any) => {
  const { name, label, physicalQuantitySymbol, ...others } = props;
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

  const fetchParams = useMemo(() => {
    if (!physicalQuantitySymbol) {
      return null;
    }
    const filter = { physicalQuantitySymbol };
    return ({ filter }) as FetchParams;
  }, [physicalQuantitySymbol])

  const fetchKey = useMemo(() => fetchParams && fetchParams.filter ? JSON.stringify(fetchParams.filter) : null, [fetchParams])
  const fetchState = useSelector((state: RootState) => state.module.admin.measurementUnit.fetch);
  const { items, fetched } = useMemo(() => FetchReducer.getFetchResponse(fetchState, fetchKey), [fetchState, fetchKey]);

  const [, formHelper, formMeta] = useField(name);
  const formValue = formHelper.value;
  const value = useMemo(() => (items || []).find((item) => isOptionEqualToValue(item, formValue)), [items, formValue]);
  const setFormValue = (value) => { formMeta.setValue(getValueId(value)); }

  const dispatch = useDispatch();

  const fetch = (fetchParams, fetchKey) => {
    dispatch({
      type: measurementUnitFetchState.FETCH,
      payload: {
        ...(fetchParams ? { fetchParams } : {}),
        ...(fetchKey ? { fetchKey } : {})
      }
    })
  }

  useEffect(() => {
    fetch(fetchParams, fetchKey)
  }, [fetchParams, fetchKey])

  return (<React.Fragment>
    <Autocomplete
      id="combo-box-demo"
      {...others}
      options={items || []}
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