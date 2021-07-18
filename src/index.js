import router from './routes';

//escucha si la carga de la pag ha sucedido
window.addEventListener('load', router);
window.addEventListener('hashchange', router);