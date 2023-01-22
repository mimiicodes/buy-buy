import './App.scss';
import Home from "./Pages/Home/Home"
import Shop from './Pages/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"


function App() {
  return (
		<div className="App">
			<BrowserRouter>
			<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
