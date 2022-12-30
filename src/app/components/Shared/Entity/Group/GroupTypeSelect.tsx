import React, { useCallback, useEffect, useMemo } from 'react';
import { Button, Grid } from '@mui/material';
import { useField } from 'formik';
import { ActivityTypeEnum } from '../../../../enums/Entity/ActivityType.enum';
import { getFormName } from '../../../../utils/FormUtils';

/**
 * GroupTypeSelect
 *   GroupTypeSelect component
 * @param {any}  props Properties
 * @return {React.Component} GroupTypeSelect Component
 */
export const GroupTypeSelect = (props: any) => {

  const fields = useMemo(() => {
    return {
      groupType: {
        name: getFormName(props),
        label: {
          [ActivityTypeEnum.collect]: 'Quero coletar',
          [ActivityTypeEnum.supply]: 'Quero vender'
        }
      },
    }
  }, [props])

  const updateCallback = useCallback((value) => {
    const update = props?.update;
    if (update) {
      update(value);
    }
  }, [props.update])

  //   groupType
  const [, groupTypeHelper, groupTypeMeta] = useField(fields.groupType.name)
  const groupType = useMemo(
    () => groupTypeHelper.value
    , [groupTypeHelper])
  const setGroupType = useCallback(
    (groupType) => {
      groupTypeMeta.setTouched(true)
      groupTypeMeta.setValue(groupType)
      updateCallback({ groupType })
    }, [groupTypeMeta, updateCallback])

  const isBoth = useMemo(() =>
    groupType === ActivityTypeEnum.both
    , [groupType])
  const isCollect = useMemo(() =>
    groupType === ActivityTypeEnum.collect ||
    isBoth
    , [groupType, isBoth])
  const isSupply = useMemo(() =>
    groupType === ActivityTypeEnum.supply ||
    isBoth
    , [groupType, isBoth])

  const collectVariant = useMemo(
    () => (isCollect ? 'contained' : undefined)
    , [isCollect])
  const supplyVariant = useMemo(
    () => (isSupply ? 'contained' : undefined)
    , [isSupply])


  const updateGroupType = useCallback(
    (groupType) => {
      let newGroupType: ActivityTypeEnum | null = null;
      switch (groupType) {
        case ActivityTypeEnum.collect:
          if (isBoth) {
            newGroupType = ActivityTypeEnum.supply;
          } else if (isCollect) {
            newGroupType = null;
          } else if (isSupply) {
            newGroupType = ActivityTypeEnum.both;
          } else {
            newGroupType = ActivityTypeEnum.collect;
          }
          break;
        case ActivityTypeEnum.supply:
          if (isBoth) {
            newGroupType = ActivityTypeEnum.collect;
          } else if (isSupply) {
            newGroupType = null;
          } else if (isCollect) {
            newGroupType = ActivityTypeEnum.both;
          } else {
            newGroupType = ActivityTypeEnum.supply;
          }
      }
      setGroupType(newGroupType);
    }
    , [setGroupType, isCollect, isSupply, isBoth])

  useEffect(() => {
    updateCallback({ groupType })
  }, [])

  return (<Grid container spacing={1}>

    <Grid item xs={12} lg={6}>
      <Button
        variant={collectVariant}
        onClick={() => updateGroupType(ActivityTypeEnum.collect)}>
        {fields.groupType.label[ActivityTypeEnum.collect]}
      </Button>
    </Grid>

    <Grid item xs={12} lg={6}>
      <Button
        variant={supplyVariant}
        onClick={() => updateGroupType(ActivityTypeEnum.supply)}>
        {fields.groupType.label[ActivityTypeEnum.supply]}
      </Button>
    </Grid>
  </Grid>)
}
export default GroupTypeSelect
