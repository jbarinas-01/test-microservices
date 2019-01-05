import React from "react";

export default class IndexView extends React.Component {
    render() {
        return (
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
    }
}
