import Header from "./components/Header";

import initialEmails from "./data/emails";
import { useState } from "react";

import "./App.css";

function App() {
    // Use initialEmails for state
    const [emails, setEmails] = useState(initialEmails);
    const [hideRead, setHideRead] = useState(false);
    const [showStarred,setStarred] = useState(false)

    function toggleRead(email) {
        const newEmails = [...emails];

        newEmails[email.id - 1].read = !newEmails[email.id - 1].read;

        setEmails(newEmails);
    }
    function toggleStar(email) {
        const newEmails = [...emails];

        newEmails[email.id - 1].starred = !newEmails[email.id - 1].starred;

        setEmails(newEmails);
    }
    let emailsToDisplay = emails;
    function numberOfStarredEmails(){
    return  emails.reduce(
        function (values, item) {
          if (item.starred) {
            values++
          }
          return values
        },
        0
      );
    }
    function getStarredEmails(emailsToDisplay){
      return emailsToDisplay.filter(email=>email.starred)
    }
    if(showStarred){
      emailsToDisplay = getStarredEmails(emailsToDisplay);

    }
    if (hideRead) {
      emailsToDisplay = getReadEmails(emailsToDisplay);
    } 
    function toggleHideRead(){
      setHideRead(!hideRead);
    }
    function getReadEmails(emails) {
        return emailsToDisplay.filter((email) => !email.read);
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
                        onClick={() => {setStarred(!showStarred)}}
                    >
                        <span className="label">Starred</span>
                        <span className="count">?</span>
                    </li>

                    <li className="item toggle">
                        <label htmlFor="hide-read">Hide read</label>
                        <input
                            id="hide-read"
                            type="checkbox"
                            checked={hideRead}
                            onChange={() => toggleHideRead()}
                        />
                    </li>
                </ul>
            </nav>
            <main className="emails">
                {emailsToDisplay.map((email) => {
                    return (
                        <section key={email.id} className="single-email">
                            <input
                                type="checkbox"
                                onChange={() => toggleRead(email)}
                                checked={email.read}
                                name=""
                                id=""
                            />
                            <input
                                type="checkbox"
                                onChange={() => toggleStar(email)}
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
