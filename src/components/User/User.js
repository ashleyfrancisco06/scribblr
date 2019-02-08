import React, { Component } from "react"


class User extends Component {
    // constructor(props){
    //     super(props)

    //     this.state={

    //     }
    // }
    render() {
        return (
            <div className="user-profile">

                <h2>User Profile</h2>
                <form className="user-profile2">
                    <label>Username: </label>
                    <input placeholder="Buddy"></input>
                    <br />

                    <label>Email: </label>
                    <input placeholder="test@test.com"></input>
                    <br />
                    <label>Password: </label>
                    <input placeholder="test"></input>
                    <br />
                    <button>Update</button>
                    <button>Delete User</button>

                </form>
                {/* <h1>{props.user.user_name}</h1> */}
            </div >
        )
    }
}

export default User