# Getting Started with Create React App

## Tasks
	Enviar groupid nos formularios de sub itens de grupo
	Corrigir o metodo para carregar usuario atuenticado authService.load
	Implantar paginação; filtro; ordenação;
	Pesquisar endereço por CEP
	Componente listagem de midia
	Home page
	

## Pages

	Admin
		Group (Empresa aonde se trabalha)
		Measure/MeasureUnit ( KM / Km/H  / M²)
		Measure/PhysicalQuantity (Velocidade / Distancia / Volume)
		User
		Product

	Group
		Collaborator
		Place
		Vehicle
		
	
	Login
	Signup
	Home

Component
	Group
		GroupTypeSelect
		GroupFieldset

	User	
		UserFieldset
	
	Profile
		ProfileFieldset

		
		login
		
		cadastro-cliente
			1
				Coletor
				Fornecedor
			
			2
				dados basicos 
				[] criar empresa ?  Se sim
				
			
				1.1 - coletor
					carro
				
				1.2 - fornecedor
					dados recebimento
					
					
					locais
				
				
## Model

	User
		id: string
		username: string
		password: string
		role: 'admin' | 'client'
		profile: Profile

	Collaborator
		user: User
		role: CollaboratorRoleEnum

	Profile
		id: string
		name: string
	
	Group
		id: string
		profile: Profile
		type: 'supply' | 'collect' | 'both'
		collaborators: Array<Collaborator> 
		places: Array<Place>
		vehicles: Array<Vehicle>
	
	Place
		id: string
		address: Address
		media: Array<Media>
		type: 'supply' | 'collect' | 'both' // no futuro usar para locais de coletas e não de oferecimento 
	
	
	ItemOffer
		id: string
		item: ProductItem
		place: Place
		type: 'supply' | 'collect' // no futuro usar para locais de coletas e não de oferecimento 
		
	Product
		id: string
		title: string
		media: Array<Media>

	ProductItem
		id: string
		product :Product 
		media: Array<Media>
        value: Value
	
	Value
		id: string
		measurementUnits: MeasurementUnits
		value: number
	
	MeasurementUnit
		id: string
		title: string
		value: number
		physicalQuantity: PhysicalQuantity
		
		
	PhysicalQuantity
		id: string
		title: string
	
	Vehicle
		id: string
		plate: string
		media: Array<Media>
	
	Address
		id: string
		cep: string
		street: string
		number: string
		city: string
		country: string
		state: string
		neighborhood: string
		complement: string
	
	Media 
		id: string
		type: string
		mediaType: string
		src: string
	
	FinancialReceiptData
		id: string
		type: 'ted' | 'pix'
	
	TedFinancialReceiptData
		id: string
		financialReceiptData: FinancialReceiptData
		account: string
		agency: string
		agencyDigit: string
		bankCod: string
	
	PixFinancialReceiptData
		id: string
		financialReceiptData: FinancialReceiptData
		type: 'phone' | 'random' | 'email' | 'doc'
		value: string


## Fluxos
	Admin
		CRUD Produto
		
		CRUD Unidade Medida
		
		CRUD Grandeza
		
		CRUD Group
			** Employee
		
	
	Employee
		CRUD (createCompany ? 'Funcionários' : 'Ajudantes')
			
		CRUD locais
		
		CRUD veiculos 
		
		CRUD dados financeiros
	
		Oferecer Produto
			Confirmar coleta
		
		Listar Produtos Oferecidos
			Coletar produto
		
	Public
		Login
		
		Home
		
		Cadastro 
			1- Escolher tipo de atuação
				<Grid container >
					
					<Grid item container xs={12}>
						<Grid>Como deseja utilizar o app</Grid>
					</Grid>
					
					<GroupTypeSelect>
						<Grid container>
						
							<Grid item xs={12} lg={6}>
								<check label="Quero coletar" name="group.type" value="collector" />
							</Grid>
							
							<Grid item xs={12} lg={6}>
								<check label="Quero vender"  name="group.type" value="supplier" />
							</Grid>
							
						</Grid>
					</GroupTypeSelect>
					
				</Grid>
				/*
					{
						group: {
							type: ${group.type}
						},
					}
				*/

			2 - Dados basicos
				<GroupFieldset>
				<Grid container >
					<UserFieldset>
						<Grid container>
							
							<Grid item xs={12} lg={6}>
								<input name="user.username"/>
							</Grid>
							
							<Grid item xs={12} lg={6}>
								<input name="user.password"/>
							</Grid>
							
							<ProfileFieldset>
								<Grid container>
									<Grid item xs={12} lg={6}>
										<input name="profile.name"/>
									</Grid>
								</Grid>
							</ProfileFieldset>
							
						</Grid>
					</UserFieldset>
					
					<Grid item xs={12} lg={6}>
						<checkbox name="createCompany"/>
					</Grid>
					{ createCompany
						? (<Grid item container xs={12}>
							<Grid item xs={12} lg={6}>
							<input name="company.name"/>
							</Grid></Grid>)
						: null
					}
				
				</Grid>
				</GroupFieldset>
			
			
				/*
					{
						profile: {
							name: ${profile.name}
          disabled={fields.type.disabled}
          hidden={fields.type.hidden}
						}
						company: {
							name: ${company.name}
          disabled={fields.type.disabled}
          hidden={fields.type.hidden}
						}
						user: {
							username: ${user.username}
							password: ${user.password}
							profile: $profile
						},
						group: {
							type: ${}
							profile: ($company ? $company : $profile )
							employees: [ $profile ]
						}
					}
				*/
### Data Sample

#### Desc. dado de cadastro
  /* Step 1 - Tipo de atividade */
  type: ActivityTypeEnum
  /* Step 2 - Perfil principal para gerenciar a empresa */
  mainCollaborator: {
	  /* Usuário do colaborador */
	  user: {
		username: '',
		password: '',
		type: UserTypeEnum.client, /* Cliente - usuário da empresa cliente */
		profile: {
			name: ''
		}
	  },
	  role: CollaboratorRoleEnum.owner /* perfil principal - dono da empresa */
  },
  /* Step 3- Informar se usar perfil empresa */
  createCompany: boolean,
  /* Step 4- Criar perfil -
    usado caso seja utilizado o perfil da empresa,
    senão utiliza do usuário principal
  */
  profile: {
	name: ''
  },
	

	
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Navigation

Module
	index -> redirect to "dashboard"
	"not-found" -> NotFound
	"logout" -> Logout
	"admin" -> Admin
	* -> redirect to "not-found"

Public
	index -> redirect to "login"
	"not-found" -> NotFound
	"login" -> Login
	"logout" -> Login
	* -> redirect to "not-found"

## Create App

    1- https://create-react-app.dev/docs/adding-typescript/

    2- O framework de componentes React UI mais popular do mundo 
        https://mui.com/pt/getting-started/installation/

    3- Redux é uma biblioteca para armazenamento de estados de aplicações JavaScript
        https://redux.js.org/introduction/installation

    4- Redux é uma biblioteca feita para gerenciar estados em uma aplicação, ela tira a responsabilidade de um componente ter um estado que poderá ser usado por vários outros componentes dentro da sua aplicação e passa isso para um objeto global, que pode ser acessado por qualquer componente, a qualquer momento.
        https://redux-saga.js.org/docs/introduction/GettingStarted

    5- The react-router-dom package contains bindings for using React Router in web applications
        https://v5.reactrouter.com/web/guides/quick-start

    6- React cookie manage
        https://github.com/reactivestack/cookies/tree/master/packages/react-cookie/#readme

    7- A Redux binding for React Router v4 and v5
        https://github.com/supasate/connected-react-router

    8- otenv is a zero-dependency module that loads environment variables from a .env file into process.env.
        https://github.com/motdotla/dotenv#readme

    9 - react-i18next is a powerful internationalization framework for React / React Native which is based on i18next. 
        https://react.i18next.com/getting-started