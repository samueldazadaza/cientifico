import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    <div class="m-6 Characters-inner bg-gray-100 rounded-2xl p-3 shadow-2xl flex flex-col md:flex md:flex-row">
        <article class="Characters-card rounded-2xl p-3 shadow-2xl">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>

        <article class="Characters-card shadow-2xl">
            <h3 class="pl-4 rounded-lg border border-gray-400">Episodes: <span>${character.episode.lenght}</span> </h3>
            <h3 class="pl-4 rounded-lg border border-gray-400">Status: <span>${character.status}</span></h3>
            <h3 class="pl-4 rounded-lg border border-gray-400">Species: <span>${character.species}</span></h3>
            <h3 class="pl-4 rounded-lg border border-gray-400">Gender: <span>${character.gender}</span></h3>
            <h3 class="pl-4 rounded-lg border border-gray-400">Origin: <span>${character.origin.name}</span></h3>
            <h3 class="pl-4 rounded-lg border border-gray-400">Last Location: <span>${character.location.name}</span></h3>
        </article>
    </div>
    `;
    return view;
}

export default Character;