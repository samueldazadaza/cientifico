import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item bg-gray-100 rounded-2xl p-3 shadow-xl">
                    <a href="#/${character.id}">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `
    return view;
}

export default Home;