import React, { Component } from 'react';

export class Customer extends Component {
    displayName = Customer.name

    constructor(props) {
        super(props);
        this.state = { customers: [], loading: true };

        fetch('api/Customer/customers')
            .then(response => response.json())
            .then(data => {
                this.setState({ customers: data, loading: false });

            });
    }
    static renderCustomerTable(customers) {
    render() 
        return (
            <div>
                <button className="ui blue button">New Customer</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>

                        </tr>
                    </thead>
                    <tbody>

                            <tr key={Customer.Id}>
                                <td>{Customer.Name}</td>
                                <td>{Customer.Address}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Customer.renderCustomerTable(this.state.customers);

        return (
            <div>
                
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }


}




