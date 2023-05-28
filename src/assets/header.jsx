import React from "react";

class Header extends React.Component {
    render() {
        return (
            <>
                <header id="header">
                    <div className="container">
                        <img src="./img/knowledge.png" style={{height:70,width:75}} className="logo" />
                        <div className="flex items-center">
                            <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                            <button className="log-btn btn">Login</button>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
export default Header;