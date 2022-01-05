import Header from "./components/Header";

import initialEmails from "./data/emails";
import { useState } from "react";

import "./App.css";

function App() {
    // Use initialEmails for state
    const [emails, setEmails] = useState(initialEmails);
    
    
    function toggleRead(email) {
        const newEmails = [...emails];

        newEmails[email.id-1].read=!newEmails[email.id-1].read
        
        // newEmails[email.id-1].read=false

        // let finalEmails = newEmails.filter((mail) => {
        //     return mail.id !== email.id;
        // });
        // console.log(finalEmails);

        // finalEmails.push(email);
        setEmails(newEmails);
    }
    return (
        <div className="app">
            <Header />
            <nav className="left-menu">
                <ul className="inbox-list">
                    <li
                        className="item active"
                        // onClick={() => {}}
                    >
                        <span className="label">Inbox</span>
                        <span className="count">?</span>
                    </li>
                    <li
                        className="item"
                        // onClick={() => {}}
                    >
                        <span className="label">Starred</span>
                        <span className="count">?</span>
                    </li>

                    <li className="item toggle">
                        <label for="hide-read">Hide read</label>
                        <input
                            id="hide-read"
                            type="checkbox"
                            checked={false}
                            // onChange={() => {}}
                        />
                    </li>
                </ul>
            </nav>
            <main className="emails">
                {emails.map((email) => {
                    return (
                        <section className="single-email">
                            <input
                                key={email.id}
                                type="checkbox"
                                onChange={()=>toggleRead(email)}
                                checked={email.read}
                                name=""
                                id=""
                            />
                            <input
                                type="checkbox"
                                checked={email.starred}
                                name=""
                                className="star"
                            />
                            <span className="sender">{email.sender}</span>
                            <span className="title">{email.title}</span>
                        </section>
                    );
                })}
            </main>
        </div>
    );
}

export default App;
