//para devolver, no es necesario brackets
const getHast = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';    
    // ['', '1']

export default getHast;