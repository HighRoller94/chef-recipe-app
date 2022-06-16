import React, { useState } from 'react'

function Newsletter() {
    const [email, setEmail] = useState(false)

    const submitEmailForNewsletter = () => {
        setEmail(true)
    }

    return (
        <div className="newsletter__container">
            <div className="container">
                <div className="newsletter__header">
                    <h1>Sign up to our newsletter</h1>
                    <h2>to receive weekly updated and recipes!</h2>
                </div>
                <form className="newsletter__input">
                    <input type="text" placeholder="Enter email address"/>
                    <button type="submit" onClick={submitEmailForNewsletter}disabled={!email}></button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter