import React, { useMemo } from 'react';
import { Grid } from '@mui/material';
import { getFieldName, isFieldDisabled, isFieldHidden } from '../../../../utils/FormUtils';
import { EntityFieldset } from '../Entity/EntityFieldset';
import { ItemOfferTypeEnum } from '../../../../enums/Entity/ItemOfferType.enum';
import { GroupSetFieldset } from '../../../Module/Group/GroupSet/GroupSetFieldset';
import { GroupPlaceAutocomplete } from '../Place/GroupPlaceAutocomplete';
import { ProductItemFieldset } from '../ProductItem/ProductItemFieldset';
import { ItemOfferTypeSelect } from './ItemOfferTypeSelect';
import { getItemOfferType } from '../../../../hooks/Module/ItemOffer/ItemOfferType';

/**
 * ItemOfferFieldset
 *   ItemOfferFieldset component
 * @param {any}  props Properties
 * @return {React.Component} ItemOfferFieldset Component
 */
export const ItemOfferFieldset = (props: any) => {

  const fields = useMemo(() => {
    return {
      item: {
        name: getFieldName('item', props),
        id: 'ItemOfferFieldset.' + getFieldName('item', props),
        label: 'Item', // i18n
        type: 'text',
        disabled: isFieldDisabled('item', props),
        hidden: isFieldHidden('item', props)
      },
      placeId: {
        name: getFieldName('placeId', props),
        id: 'ItemOfferFieldset.' + getFieldName('placeId', props),
        label: 'Local', // i18n
        type: 'text',
        disabled: isFieldDisabled('placeId', props),
        hidden: isFieldHidden('placeId', props)
      },
      groupId: {
        name: getFieldName('groupId', props),
        id: 'ItemOfferFieldset.' + getFieldName('groupId', props),
        label: 'Grupo', // i18n
        type: 'text',
        disabled: isFieldDisabled('groupId', props),
        hidden: isFieldHidden('groupId', props)
      },
      type: {
        name: getFieldName('type', props),
        id: 'ItemOfferFieldset.' + getFieldName('type', props),
        labelId: 'Label-ItemOfferFieldset.' + getFieldName('type', props),
        label: 'Tipo', // i18n
        type: 'text',
        helperText: 'Selecione o tipo do local', // i18n
        disabled: isFieldDisabled('type', props),
        hidden: isFieldHidden('type', props),
        options: [
          {
            value: ItemOfferTypeEnum.supply,
            label: 'Fornecedor' // i18n
          },
          {
            value: ItemOfferTypeEnum.collect,
            label: 'Coletor' // i18n
          }
        ]
      }
    }
  }, [props])


  const itemOfferType = getItemOfferType();
  const typeHidden = useMemo(() => !!(fields.type.hidden || itemOfferType), [fields.type.hidden, itemOfferType]);

  return (<div className="crud-form-fieldset">

    <Grid container spacing={1}>

      <Grid item xs={12}>
        <EntityFieldset />
        <GroupSetFieldset
          name={fields.groupId.name}
          id={fields.groupId.id} />
      </Grid>

      <Grid  {...(typeHidden ? { xs: 12, item: true } : { xs: 12, lg: 6, item: true })} >
        <ItemOfferTypeSelect
          name={fields.type.name}
          disabled={fields.type.disabled}
          hidden={typeHidden}
          id={fields.type.id}
          type={fields.type.type}
          label={fields.type.label}
          labelId={fields.type.labelId}
          options={fields.type.options}
          itemOfferType={itemOfferType}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <GroupPlaceAutocomplete
          name={fields.placeId.name}
          disabled={fields.placeId.disabled}
          hidden={fields.placeId.hidden}
          id={fields.placeId.id}
          label={fields.placeId.label} />
      </Grid>

      <Grid item xs={12}>
        <ProductItemFieldset
          name={fields.item.name}
          disabled={fields.item.disabled}
          hidden={fields.item.hidden}
          id={fields.item.id}
          label={fields.item.label} />
      </Grid>

    </Grid>
  </div>)
}
export default ItemOfferFieldset;


