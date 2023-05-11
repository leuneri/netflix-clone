import React from 'react'
import "./Banner.css"

function Banner() {

    // Add .. when description is too long
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + "..." : string;
    }

  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://wholistickids.com/wp-content/uploads/2019/01/plain-black-background.jpg')`,
        backgroundPosition: "center center"
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                Movie Name
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {truncate(`This is a test description`, 150)}
            </h1>
        </div>

        <div class_name="banner_fadeBottom" />
    </header>
  )
}

export default Banner