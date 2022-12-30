import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { ValueFieldset } from '../Measure/Value/ValueFieldset';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { ProductAutocomplete } from '../Product/ProductAutocomplete';
import { PhysicalQuantitySymbolEnum } from '../../../../enums/Entity/PhysicalQuantitySymbol.enum';

/**
 * ProductItemFieldset
 *   ProductItemFieldset component
 * @param {any}  props Properties
 * @return {React.Component} ProductItemFieldset Component
 */
export const ProductItemFieldset = (props: any) => {

    const fields = useMemo(() => {
      return {
        productId: {
          name: getFieldName('productId', props),
          id: 'ProductItemFieldset.' + getFieldName('productId', props),
          label: 'Produto', // i18n
          disabled: isFieldDisabled('productId', props),
          hidden: isFieldHidden('productId', props)
        },
        media: {
          name: getFieldName('media', props),
          id: 'ProductItemFieldset.' + getFieldName('media', props),
          label: 'Media', // i18n
          disabled: isFieldDisabled('media', props),
          hidden: isFieldHidden('media', props)
        },
        value: {
          name: getFieldName('value', props),
          id: 'ProductItemFieldset.' + getFieldName('value', props),
          label: 'Valor', // i18n
          disabled: isFieldDisabled('value', props),
          hidden: isFieldHidden('value', props)
        },
        financialValue: {
          name: getFieldName('financialValue', props),
          id: 'ProductItemFieldset.' + getFieldName('financialValue', props),
          label: 'Valor financeiro', // i18n
          disabled: isFieldDisabled('financialValue', props),
          hidden: isFieldHidden('financialValue', props)
        },
      }
    }, [props])

    return (<div className="crud-form-fieldset">

      <Grid container spacing={1}>

        <Grid item xs={12}>
          <EntityFieldset />
        </Grid>

        <Grid item xs={12} lg={6}>
          <ProductAutocomplete
            {...props}
            name={fields.productId.name}
            disabled={fields.productId.disabled}
            hidden={fields.productId.hidden}
            id={fields.productId.id}
            label={fields.productId.label} />
        </Grid>

        {/*<Grid item xs={12} lg={6}>
        <MediaListFieldset
          name={fields.media.name}
          disabled={fields.media.disabled}
          hidden={fields.media.hidden}
          id={fields.media.id}
          label={fields.media.label}
          component={TextField}
        />
      </Grid>*/}

        <Grid item xs={12}>

          <fieldset>
            <ValueFieldset
              name={fields.value.name}
              disabled={fields.value.disabled}
              hidden={fields.value.hidden}
              id={fields.value.id}
              label={fields.value.label} />
          </fieldset>
        </Grid>

        <Grid item xs={12}>
          <fieldset>
            <ValueFieldset
              name={fields.financialValue.name}
              disabled={fields.financialValue.disabled}
              hidden={fields.financialValue.hidden}
              id={fields.financialValue.id}
              label={fields.financialValue.label}
              physicalQuantitySymbol={PhysicalQuantitySymbolEnum.Monetary} />
          </fieldset>
        </Grid>

      </Grid>
    </div>)
  }
export default ProductItemFieldset;
