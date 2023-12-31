import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloWorld from "./components/01-hello-world/HelloWorld";
import Jsx1 from "./components/03-jsx/Jsx1";
import Jsx2 from "./components/03-jsx/Jsx2";
import Jsx3 from "./components/03-jsx/Jsx3";
import Jsx4 from "./components/03-jsx/Jsx4";
import Jsx5 from "./components/03-jsx/Jsx5";
import Jsx6 from "./components/03-jsx/Jsx6";
import Style1 from "./components/04-styles/Style1";
import Style2 from "./components/04-styles/Style2";
import Style3 from "./components/04-styles/Style3";
import Style4 from "./components/04-styles/Style4";
import Clock1 from "./components/05-clock1/Clock1";
import Greetings from "./components/06-props/Greetings";
import Products from "./components/06-props/Products";
import Clock2 from "./components/07-clock2/Clock2";
import Gallery from "./components/08-image/Gallery";
import Image from "./components/08-image/Image";
import ProfileCard from "./components/09-profile-card/ProfileCard";
import BootstrapClassic from "./components/10-bootstrap/BootstrapClassic";
import BootstrapDynamic from "./components/10-bootstrap/BootstrapDynamic";
import Icons from "./components/11-icons/Icons";
import Events from "./components/12-events/Events";
import Shop from "./components/13-products/Shop";
import State from "./components/14-state/State";
import Stateless from "./components/14-state/Stateless";
import Counter from "./components/15-counter/Counter";
import Birthday from "./components/16-birthday/Birthday";
import UseEffect from "./components/17-useeffect/UseEffect";
import UseEffect2 from "./components/17-useeffect/UseEffect2";
import Clock3 from "./components/18-clock3/Clock3";
import CountryFilter from "./components/19-country-filter/CountryFilter";
import Scroll from "./components/20-useref/Scroll";
import UseRef from "./components/20-useref/UseRef";
import ClassComp from "./components/21-class-type-component/ClassComp";
import UserCards from "./components/22-fetch-users/UserCards";
import Countries from "./components/23-axios-country/Countries";
import ParentComp from "./components/24-child-to-parent/ParentComp";
import Form1 from "./components/25-forms/Form1";
import Form2 from "./components/25-forms/Form2";
import Form3 from "./components/25-forms/Form3";
import Form4 from "./components/25-forms/Form4";
import Form5 from "./components/25-forms/Form5";
import Form6 from "./components/25-forms/Form6";
import ToDoApp from "./components/odev-todolist/todo-app";
import Header from "./components/00-home/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Menu1 from "./components/00-home/menu/Menu1";
import Menu from "./components/00-home/menu/menu";
import { useEffect, useState } from "react";
import axios from "axios";
import StoreContext from "./store";
import Exchange from "./components/26-context-api/Exchange";

function App() {
	const [counter, setcounter] = useState(10);
	const [currencies, setCurrencies] = useState({});

	const loadData = async () => {
		try {
			const resp = await axios.get(
				"https://api.frankfurter.app/latest?from=TRY"
			);
			setCurrencies(resp.data.rates);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<StoreContext.Provider value={{ counter, currencies }}>
			<BrowserRouter>
				<Header />
				<Container>
					<Row>
						<Col sm={2}>
							<Menu />
						</Col>
						<Col sm={10}>
							<Routes>
								{/* <Route path='/' element={Home}/>  anasayfa tanımlaması */}
								<Route path="/helloworld" element={<HelloWorld />} />
 								<Route path="/hello-world" element={<HelloWorld/>}/>
 								<Route path="/image" element={<Image/>}/>
 								<Route path="/useEffect" element={UseEffect2}/>
								<Route >
									<Route path="/bootstrapstatic" element={<BootstrapClassic />} />
									<Route path="/bootstrapdynamic" element={<BootstrapDynamic />} />
								</Route>
								<Route path="/bootstrap" element={<BootstrapClassic/>}/>
								<Route >
									<Route index element={<Jsx1 />} />
									<Route path="/jsx1" element={<Jsx1 />} />
									<Route path="/jsx2" element={<Jsx2 />} />
									<Route path="/jsx3" element={<Jsx3 />} />
									<Route path="/jsx4" element={<Jsx4 />} />
									<Route path="/jsx5" element={<Jsx5 />} />
									<Route path="/jsx6" element={<Jsx6 />} />
								</Route>
								<Route path="/exchange" element={<Exchange />} />
								<Route path="/form6" element={<Form6 />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		</StoreContext.Provider>
	);
}

// function App() {
// 	return (
// 		<>
// 		<BrowserRouter>
// 				<Header/>
// 				<Container fluid>
// 					<Row>
// 						<Col sm={2}>
// 							<Menu1/>
// 						</Col>
// 						<Col sm={10}>
// 							<Routes>
// 								<Route path="/hello-world" element={<HelloWorld/>}/>
// 								<Route path="/image" element={<Image/>}/>
// 								<Route path="/useEffect" element={UseEffect2}/>
// 								<Route path="/bootstrap" element={<BootstrapClassic/>}/>
// 							</Routes>
// 						</Col>
// 					</Row>
// 				</Container>
// 		</BrowserRouter>
// 			{/* <HelloWorld/> */}
// 			{/* <Jsx1/> */}
// 			{/* <Jsx2/> */}
// 			{/* <Jsx3/> */}
// 			{/* <Jsx4/> */}
// 			{/* <Jsx5/> */}
// 			{/* <Jsx6/> */}
// 			{/* <Style1/>*/}
// 			{/* <Style2/> */}
// 			{/* <Style3/> */}
// 			{/* <Style4/> */}
// 			{/* <Clock1/> */}
// 			{/* <Greetings/> */}
// 			{/* <Products/> */}
// 			{/* <Clock2 textColor ="red" bgColor="yellow"/> */}
// 			{/* <Image/> */}
// 			{/* <Gallery/> */}
// 			{/* <ProfileCard name="Recep Yigiter" location="Istanbul, Turkiye" shot="51" followers="1002" following="100" avatar="resim1.png"/> */}
// 			{/* <BootstrapClassic/> */}
// 			{/* <BootstrapDynamic/> */}
// 			{/* <Icons/> */}
// 			{/* <Events/> */}
// 			{/* <Shop/> */}
// 			{/* <Stateless /> */}
// 			{/* <State/> */}
// 			{/* <Counter/> */}
// 			{/* <Birthday/> */}
// 			{/* <UseEffect /> */}
// 			{/* {false && <UseEffect />} */}
// 			{/* <Clock3/> */}
// 			{/* <UseEffect2/> */}
// 			{/* <CountryFilter/> */}
// 			{/* <UseRef/> */}
// 			{/* <Scroll/> */}
// 			{/* <ClassComp/> */}
// 			{/* <UserCards/> */}
// 			{/* <Countries />   */}
// 			{/* <ParentComp/> */}
// 			{/* <ToDoApp/> */}
// 			{/* <Form1/>
// 			<Form2/>
// 			<Form3/> */}
// 			{/* <Form4 /> */}
// 			{/* <Form5 /> */}
// 			{/* <Form6 /> */}

// 			{/*
//       <RandomImages/>
//       <AxiosCrud/>
//       */}
// 		</>
// 	);
// }

export default App;
