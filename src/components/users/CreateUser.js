import React, { Component } from 'react'

import { Loader } from '../loader/Loader'

import { UserForm } from './UserForm'
import { BASE_URL } from '../../utils/const'

export class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    createUser = body => {
        this.setState(
            {
                isCreating: true
            },
            () => {
                const createUserUrl = `${BASE_URL}/users`

                return fetch(createUserUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                    .then(response => response.json())
                    .then(() => {
                        this.props.history.push('/')
                    })
            }
        )
    }

    render() {
        const { isCreating } = this.state

        if (isCreating) {
            return <Loader text={'Creating user...'} />
        }
        return (
            <>
                <div className="row">
                    <h4>Create user</h4>
                </div>
                <div className="card-panel">
                    <div className="row">
                        <h5>Enter user details</h5>
                    </div>
                    <div className="row">
                        <UserForm onUserCreate={this.createUser} />
                    </div>
                </div>
            </>
        )
    }
}

export default CreateUser
