import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroupEnum } from '../../../../enums/Action/Module/Group.enum';
import { RootState } from '../../../../reducers';
import { getTitle } from '../../../../types/Entity/Group/Group';

export const GroupSetSelect = (props) => {
  const { label } = props;
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

  const dispatch = useDispatch();

  const { item, fix, options, loading, error } = useSelector((state: RootState) => state.module.group.set);
  const disabled = useMemo(() => !!(fix || error || loading), [fix || error, loading]);

  // actions
  const fetch = () => {
    dispatch({
      type: GroupEnum.FETCH
    })
  }

  const setItem = (item) => {
    dispatch({
      type: GroupEnum.SET,
      payload: item
    })
  }

  const updateValue = (newValue: any) => {
    setItem(newValue);
  }

  // effect
  useEffect(() => {
    fetch()
  }, [])

  if (fix) {
    return null;
  }

  return (<React.Fragment>
    <Autocomplete
      disablePortal
      id="group-set-select"
      options={options}
      disabled={disabled}
      sx={{ width: 300 }}
      getOptionLabel={(option) => getOptionLabel(option)}
      isOptionEqualToValue={(option, value) => isOptionEqualToValue(option, value)}
      renderInput={(params) => <TextField {...params}
        label={label || "Selecione um grupo"} /> /*i18n*/}
      value={item}
      onChange={(event: any, newValue: any) => {
        updateValue(newValue);
      }}
    />
  </React.Fragment>)
}