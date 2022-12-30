


# Tasks

Frontend - Auth
Frontend - Send Token Auth on requests
Frontend - GroupSelect for Admin only
Frontend - Show Group Screen only if screen selected 
Frontend - Set group id as url path param on request








1- Refinamento
	AddressFieldset CEP Autocomplete
	
2- Telas Pricipais 
	Cadastro inicial (com ativação de conta)
	Fornecedor
		Listar produtos próprios oferecidos para coleta
			Oferecer um produto para coleta
		
	Coletor
		Listar produtos de todos oferecidos para coleta
			Iniciar coleta de produto
3- Backend
4- Integrações
	Maps

			

	
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>



<Field
as="select"
name="color" 
component={Select}>
             <option value="red">Red</option>
			 <MenuItem value={10} component="option">Ten</MenuItem>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
 
-------------------------------------------------------------

app/components/Shared/Select/ActivityTypeSelect.tsx
app/enums/Entity/ActivityTypeEnum
	'supply', 'collect', 'both'
app/enums/Entity/Label/ActivityTypeLabel.enum.ts
	export enum ActivityTypeLabelEnum {
		  supply = "Fornecedor",
		  collect = "Coletor",
		  both = "Fornecedor e Coletor"
		}


app/components/Shared/Select/CollaboratorRoleSelect.tsx
app/enums/Entity/CollaboratorRoleEnum
    'owner', 'manager', 'employee'
app/enums/Entity/Label/CollaboratorRoleLabel.enum.ts
	export enum CollaboratorRoleLabelEnum {
		  owner = "Dono",
		  manager = "Gerente",
		  employee = "Funcionário"
		}


app/components/Shared/Select/FinancialReceiptDataTypeSelect.tsx
app/enums/Entity/FinancialReceiptDataTypeEnum
  'ted', 'pix'
app/enums/Entity/Label/FinancialReceiptDataTypeLabel.enum.ts
  	export enum FinancialReceiptDataTypeLabelEnum {
		  ted = "TED",
		  pix = "PIX"
		}


 
app/components/Shared/Select/ItemOfferTypeSelect.tsx
app/enums/Entity/ItemOfferTypeEnum 
  'supply', 'collect'
app/enums/Entity/Label/ItemOfferTypeLabel.enum.ts
    	export enum ItemOfferTypeLabelEnum {
		  supply = "Fornecedor",
		  collect = "Coletor"
		}

  
app/components/Shared/Select/PixFinancialReceiptDataKeyTypeSelect.tsx
app/enums/Entity/PixFinancialReceiptDataKeyTypeEnum 
  'phone', 'random', 'email', 'doc'
app/enums/Entity/Label/PixFinancialReceiptDataKeyTypeLabel.enum.ts
      	export enum PixFinancialReceiptDataKeyTypeLabelEnum {
  phone = "Telefone",
  random = "Aleatório",
  email = "E-mail",
  doc = "Documento"
		}
  
app/components/Shared/Select/UserTypeSelect.tsx
app/enums/Entity/UserTypeEnum
  'admin', 'client'
app/enums/Entity/Label/UserTypeLabel.enum.ts
        	export enum UserTypeLabelEnum {
		  admin = "Administrador",
		  client = "Cliente"
		}
  
app/components/Shared/Select/VehicleTypeSelect.tsx
app/enums/Entity/VehicleTypeEnum
  'car', 'pickup', 'truck'
app/enums/Entity/Label/VehicleTypeLabel.enum.ts
        	enum VehicleTypeLabelEnum {
		  car = "Carro",
		  pickup = "Pickup",
		  truck = "Caminhão"
		}
		
		
		
		
-----------------------------------------



I have almost 10 years of experience in the field of information technology, despite having great experience with old technologies, which offer good job possibilities, my enthusiastic spirit makes me run after new technologies that make my work more performative, because I like the feeling of seeing my work paying off. I really like an environment where I can have contact with other cultures and where I can use English professionally, I've had this experience before, it brought me a lot of knowledge and opened my mind, I miss it.