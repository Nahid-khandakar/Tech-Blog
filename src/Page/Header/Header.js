import React from 'react';

const Header = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 d-flex justify-content-between">

            <div>
                <a class="navbar-brand" href="/" >Navbar</a>
            </div>

            <div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>


            <div>
                <button>Create account. <span>It's free</span></button>
            </div>


        </nav>

    );
};

export default Header;