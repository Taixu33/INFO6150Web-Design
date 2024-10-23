import './GlobalNav.css';

const menu = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about.html",
    },
    {
        name: "Cats",
        path: "/cats.html",
    },
];

function GlobalNav({className, setPage}){
    const listHtml = menu.map(item => {
        return ( 
            <li key={item.name} className='global-nav__item'>
                <a
                    className='global-nav__link'
                    href={item.path}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }}
                >
                    {item.name}
                </a>
            </li>
        );
    });
    
    return (
        <nav className={`global-nav ${className}`}>
            <ul className="global-nav__list">
                {listHtml}
            </ul>
        </nav>
    );
}


export default GlobalNav;