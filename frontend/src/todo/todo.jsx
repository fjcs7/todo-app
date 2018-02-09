import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import Form from './todoForms'
import List from './todoList'

export default class Todo extends Component {
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <Form />
                <List />
            </div>
        )
    }
}