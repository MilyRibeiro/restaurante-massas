import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'componentes/Menu';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Rodape from 'componentes/Rodape';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
	return (
		<main className='container'>
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
						<Route path='prato/:id' element={<Prato />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Rodape />
			</BrowserRouter>
		</main>
	);
}