import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

//trabajando con async (para esperar que algo este sucediendo para continuar con nuestro bloque)
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header .innerHTML = await Header();
};

export default router;