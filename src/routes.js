import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "pages/Inicio";
import Cardapio from "pages/Cardapio";
import Menu from 'componentes/Menu';
import PaginaPadrao from "componentes/PaginaPadrao";
// import styles from './Routes.module.scss';

export default function AppRouter() {
	return (
		<main>
			<BrowserRouter>
					<Menu />
					<Routes>
						<Route path='/' element={<PaginaPadrao />}>
							<Route index element={<Inicio />} />
							<Route path='cardapio' element={<Cardapio />} />
						</Route>
					</Routes>
			</BrowserRouter>
		</main>
	);
}