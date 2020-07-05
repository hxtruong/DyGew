import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './HeaderTop.scss';

class HeaderTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLogin: true,
        };
    }

    render() {
        return (
            <div className="header-top">
                <div>
                    <img
                        src="https://media1.giphy.com/media/5R0AxvUNpJeHmBa5pB/source.gif"
                        height={64}
                        alt="Logo branch"
                    />
                </div>
                <div className="header-top__user user">
                    <Button className="user__register" color="primary">
                        Register
                    </Button>
                    <Button className="user__signIn" color="primary">
                        Sign in
                    </Button>
                </div>
            </div>
        );
    }
}

export default HeaderTop;
