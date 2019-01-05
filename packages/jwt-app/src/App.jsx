import React from "react";

import "./App.css";

const SidePanel = props => (
    <section>
        <header>
            <h3>Testing JWT</h3>
        </header>

        <div>
            <nav>
                <Link to="/">/</Link>
                <Link to="/sign-in">/sign-in</Link>
                <Link to="/sign-out">/sign-out</Link>
                <Link to="/home">/home</Link>
            </nav>
        </div>
    </section>
);

export default class App extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <SidePanel />
                </div>
                <div />
            </main>
        );
    }
}
