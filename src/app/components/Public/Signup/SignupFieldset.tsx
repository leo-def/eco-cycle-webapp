import React, { useCallback, useMemo, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import { getFieldName } from '../../../utils/FormUtils';
import { StepAction } from '../../Shared/Step/StepAction';
import OwnerFieldset from '../../Shared/Entity/Collaborator/OwnerFieldset';
import GroupTypeSelect from '../../Shared/Entity/Group/GroupTypeSelect';
import GroupProfileFieldset from '../../Shared/Entity/Group/GroupProfileFieldset';

/**
 * SignupFieldset
 *   SignupFieldset component
 * @param {any}  props Properties
 * @return {React.Component} SignupFieldset Component
 */
export const SignupFieldset = (props: any) => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = useCallback(() => setActiveStep((prevActiveStep) => prevActiveStep + 1), []);
  const handleBack = useCallback(() => setActiveStep((prevActiveStep) => prevActiveStep - 1), []);

  const fields = useMemo(() => {
    return {
      type: {
        name: getFieldName('type', props),
        label: 'Tipo de atividade', // i18n
      },
      collaborator: {
        name: getFieldName('collaborator', props),
        label: 'Dados do Usuário', // i18n
      },
      company: {
        name: getFieldName('company', props),
        label: 'Dados da Empresa', // i18n
      }
    }
  }, [props]);

  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {/* Step 1 - Tipo de atividade */}
      <Step key={"Step1"}>
        <StepLabel>{fields.type.label}</StepLabel>
        <StepContent>
          <GroupTypeSelect
            {...props}
            name={fields.type.name} />

          <StepAction
            handleNext={handleNext}
            handleBack={handleBack}
            backDisabled
            name={fields.type.name} />
        </StepContent>
      </Step>

      {/* Step 2 - Perfil principal para gerenciar a empresa */}
      <Step key={"Step2"}>
        <StepLabel>{fields.collaborator.label}</StepLabel>
        <StepContent>

          <OwnerFieldset
            {...props}
            name={fields.collaborator.name} />

          <StepAction
            handleNext={handleNext}
            handleBack={handleBack}
            name={fields.collaborator.name} />
        </StepContent>
      </Step>

      {/* Step 3- Informar se usar perfil empresa */}
      <Step key={"Step3"}>
        <StepLabel>{fields.company.label}</StepLabel>
        <StepContent>

          <GroupProfileFieldset
            {...props}
            name={fields.company.name} />

          <StepAction
            handleNext={handleNext}
            handleBack={handleBack}
            name={fields.company.name} />
        </StepContent>
      </Step>

    </Stepper>);
}


/*

   must create a diferent profile for the group,
   if the group is a company 
<CompanyGroupSelect />

        <FormControlLabel
          control={
            <Checkbox
              checked={createGroupProfile}
              onChange={handleCreateCompanyChange}
              defaultChecked />}
              label={fields.createGroupProfile.label} />
      
   group profile 
      <Grid item xs={12}>
        { createGroupProfile
          ? (<ProfileFieldset
              {...profileProfileFieldset}
              name={fields.profile.name} />)
          : null
        }
      </Grid>

     step 3 
        Email confirmation sent to  main colaborator
        On next back home
    
*/

export default SignupFieldset;
