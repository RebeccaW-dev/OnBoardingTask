import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Button, Modal, Form } from 'semantic-ui-react';


export class EditCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Success: { Data: '' },
            Customer: {
                CName: '',
                CAddress: '',
            },
        };
        this.handleEditCustomerClick = this.handleEditCustomerClick.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <Modal size={'small'} open={this.props.isEditCustomerModal}>
                    <Modal.Header> Edit Customer </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='CName' />
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input placeholder='CAddress' />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button secondary >Cancel</Button>

                        <Button className="ui green button">Edit<i className="check icon"></i></Button>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }
}