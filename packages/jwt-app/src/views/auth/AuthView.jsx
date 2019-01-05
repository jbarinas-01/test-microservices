import React from "react";

export default class AuthView extends React.Component {
    render() {
        return (
            <section>
                <header>
                    <h3>sign-in</h3>
                </header>
                <div>
                    <form>
                        <div>
                            <input type="text" placeholder="username // email address" />
                        </div>
                        <div>
                            <input type="text" placeholder="password" />
                        </div>
                        <footer>
                            <button type="submit">sign-in</button>
                        </footer>
                    </form>
                </div>
            </section>
        );
    }
}
