import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Field, useField } from 'formik';
import { TextField } from 'formik-mui';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';
import { AddressEnum } from '../../../../enums/Action/Address.enum';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { AddressUtils } from '../../../../utils/AddressUtils';
import { RootState } from '../../../../reducers';

/**
 * AddressFieldset
 *   AddressFieldset component
 * @param {any}  props Properties
 * @return {React.Component} AddressFieldset Component
 */
export const AddressFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      cep: {
        name: getFieldName('cep', props),
        id: 'AddressFieldset.' + getFieldName('cep', props),
        label: 'CEP',  // i18n
        type: 'text',
        disabled: isFieldDisabled('cep', props),
        hidden: isFieldHidden('cep', props)
      },
      street: {
        name: getFieldName('street', props),
        id: 'AddressFieldset.' + getFieldName('street', props),
        label: 'Rua',  // i18n
        type: 'text',
        disabled: isFieldDisabled('street', props),
        hidden: isFieldHidden('street', props)
      },
      number: {
        name: getFieldName('number', props),
        id: 'AddressFieldset.' + getFieldName('number', props),
        label: 'Numero',  // i18n
        type: 'text',
        disabled: isFieldDisabled('number', props),
        hidden: isFieldHidden('number', props)
      },
      city: {
        name: getFieldName('city', props),
        id: 'AddressFieldset.' + getFieldName('city', props),
        label: 'Cidade',  // i18n
        type: 'text',
        disabled: isFieldDisabled('city', props),
        hidden: isFieldHidden('city', props)
      },
      country: {
        name: getFieldName('country', props),
        id: 'AddressFieldset.' + getFieldName('country', props),
        label: 'Pais',  // i18n
        type: 'text',
        disabled: isFieldDisabled('country', props),
        hidden: isFieldHidden('country', props)
      },
      neighborhood: {
        name: getFieldName('neighborhood', props),
        id: 'AddressFieldset.' + getFieldName('neighborhood', props),
        label: 'Bairro',  // i18n
        type: 'text',
        disabled: isFieldDisabled('neighborhood', props),
        hidden: isFieldHidden('neighborhood', props)
      },
      complement: {
        name: getFieldName('complement', props),
        id: 'AddressFieldset.' + getFieldName('complement', props),
        label: 'Complemento',  // i18n
        type: 'text',
        disabled: isFieldDisabled('complement', props),
        hidden: isFieldHidden('complement', props)
      }
    }
  }, [props])

  const [, , cepMeta] = useField(fields.cep.name);
  const [, , streetMeta] = useField(fields.street.name);
  const [, , numberMeta] = useField(fields.number.name);
  const [, , cityMeta] = useField(fields.city.name);
  const [, , countryMeta] = useField(fields.country.name);
  const [, , neighborhoodMeta] = useField(fields.neighborhood.name);
  const [, , complementMeta] = useField(fields.complement.name);
  const [, cepFieldHelper,] = useField(fields.cep.name);

  const [addressCode, setAddressCode] = useState(null as any);
  const [formAddressCode, setFormAddressCode] = useState(null as any);

  // 1- get field value
  const cepFieldValue = useMemo(() => AddressUtils.clearZipCode(cepFieldHelper.value), [cepFieldHelper.value]);

  // 2 - on click dispach search and set load cep
  const dispatch = useDispatch();
  const searchAddress = useCallback((code) => {
    setAddressCode(code);
    dispatch({ type: AddressEnum.SEARCH_ADDRESS, payload: { code } });
  }, [dispatch, setAddressCode]);


  // 3 get address by load cep
  const addressResult = useSelector((state: RootState) => state.shared.address);
  const loadedAddress = useMemo(() => ((addressCode && addressResult && addressResult[addressCode]) ? ({ code: addressCode, address: addressResult[addressCode] }) : null), [addressResult, addressCode]);
  const isSearchDisabled = useMemo(() => !!loadedAddress?.address, [loadedAddress]);
  const isFieldDisabledByFetch = useCallback((key) => !!(loadedAddress?.address && loadedAddress?.address[key]), [loadedAddress]);


  const loadAddressForm = useCallback((value) => {
    if (!value) {
      return;
    }
    if (value.cep) {
      cepMeta.setTouched(true);
    }
    if (value.street) {
      streetMeta.setValue(value.street);
      streetMeta.setTouched(true);
    }
    if (value.number) {
      numberMeta.setValue(value.number);
      numberMeta.setTouched(true);
    }
    if (value.city) {
      cityMeta.setValue(value.city);
      cityMeta.setTouched(true);
    }
    if (value.country) {
      countryMeta.setValue(value.country);
      countryMeta.setTouched(true);
    }
    if (value.neighborhood) {
      neighborhoodMeta.setValue(value.neighborhood);
      neighborhoodMeta.setTouched(true);
    }
    if (value.complement) {
      complementMeta.setValue(value.complement);
      complementMeta.setTouched(true);
    }
  }, [])

  useEffect(() => {
    const { code, address } = (loadedAddress || {})
    if (code && formAddressCode !== code) {
      setFormAddressCode(code);
      loadAddressForm(address);
    }
  }, [loadedAddress, formAddressCode, loadAddressForm])


  // 4 clear loadCep
  const clearAddressSearch = useCallback(() => {
    setAddressCode(null);
    setFormAddressCode(null);
  }, [setAddressCode]);

  return (<div className="crud-form-fieldset">
    <Grid container spacing={1}>

      <Grid item xs={12}>
        <EntityFieldset />
      </Grid>

      <Grid item xs={12}>
        <Grid item xs={12} lg={6}>
          <Field
            className="crud-form-input"
            name={fields.cep.name}
            disabled={fields.cep.disabled}
            hidden={fields.cep.hidden}
            id={fields.cep.id}
            type={fields.cep.type}
            label={fields.cep.label}
            component={TextField}
            InputProps={{
              endAdornment: isSearchDisabled ?
                (<InputAdornment position="end">
                  <IconButton
                    color="primary"
                    component="label"
                    onClick={() => clearAddressSearch()}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>) :
                (<InputAdornment position="end">
                  <IconButton
                    color="primary"
                    component="label"
                    onClick={() => searchAddress(cepFieldValue)}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>)
            }}
          />
        </Grid>

      </Grid>

      <Grid item xs={12} >

        <fieldset>
          <Grid container spacing={1}>

            <Grid item xs={12} lg={6}>
              <Field
                className="crud-form-input"
                name={fields.street.name}
                disabled={fields.street.disabled || isFieldDisabledByFetch('street')}
                hidden={fields.street.hidden}
                id={fields.street.id}
                type={fields.street.type}
                label={fields.street.label}
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Field
                className="crud-form-input"
                name={fields.city.name}
                disabled={fields.city.disabled || isFieldDisabledByFetch('city')}
                hidden={fields.city.hidden}
                id={fields.city.id}
                type={fields.city.type}
                label={fields.city.label}
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Field
                className="crud-form-input"
                name={fields.neighborhood.name}
                disabled={fields.neighborhood.disabled || isFieldDisabledByFetch('neighborhood')}
                hidden={fields.neighborhood.hidden}
                id={fields.neighborhood.id}
                type={fields.neighborhood.type}
                label={fields.neighborhood.label}
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Field
                className="crud-form-input"
                name={fields.country.name}
                disabled={fields.country.disabled || isFieldDisabledByFetch('country')}
                hidden={fields.country.hidden}
                id={fields.country.id}
                type={fields.country.type}
                label={fields.country.label}
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Field
                className="crud-form-input"
                name={fields.number.name}
                disabled={fields.number.disabled}
                hidden={fields.number.hidden}
                id={fields.number.id}
                type={fields.number.type}
                label={fields.number.label}
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <Field
                className="crud-form-input"
                name={fields.complement.name}
                disabled={fields.complement.disabled}
                hidden={fields.complement.hidden}
                id={fields.complement.id}
                type={fields.complement.type}
                label={fields.complement.label}
                component={TextField}
              />
            </Grid>

          </Grid>

        </fieldset>

      </Grid>

    </Grid>
  </div>)
}
export default AddressFieldset;
