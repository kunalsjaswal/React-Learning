import React, { useCallback, useRef, useState } from 'react'
import {Icon,Button,Modal,Form,FormGroup,ControlLabel,FormControl,Schema,Alert} from 'rsuite'
import { useModalState } from '../misc/customHooks'
import firebase from 'firebase/app'
import { auth, database } from '../misc/firebase'

const {StringType}=Schema.Types
const model=Schema.Model({
    name:StringType().isRequired('Chat name is required'),
    description:StringType().isRequired('description is required')
})

const INITIAL_FORM={
    name:'',
    description:''
}
const CreateRoombtnModal = () => {

    const {isOpen,open,close}=useModalState()
    const [formValue, setFromValue] = useState(INITIAL_FORM)
    const [isLoading, setIsLoading] = useState(false)
    const formRef=useRef()

    const onformChange=useCallback((value)=>{
        setFromValue(value);

    },[])

    const onSubmit=async()=>{
        if(!formRef.current.check()){
            return;
        }

        setIsLoading(true);

        const newRoomData={
            ...formValue,
            createdAt:firebase.database.ServerValue.TIMESTAMP,
            admins:{
                [auth.currentUser.uid]: true,                
            }
        }
        try {
            await database.ref('rooms').push(newRoomData)
            Alert.info(`${formValue.name} has been created`,4000)
            setIsLoading(false);
            setFromValue(INITIAL_FORM);
            close()
        } catch (error) {
            setIsLoading(false)
            Alert.error(error.message,4000)
        }
    }


    // ALL JSX  ##########################################
  return (
    <div className='mt-2'>
        <Button block color='green' onClick={open}>
            <Icon icon="creative"/> Create new chat room
        </Button>

        <Modal show={isOpen} onHide={close}> 
            <Modal.Header>
                <Modal.Title>New chat room</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form fluid onChange={onformChange} formValue={formValue} model={model} ref={formRef}>

                    {/* room name  */}
                    <FormGroup>
                        <ControlLabel>Room name</ControlLabel>
                        <FormControl name="name" placeholder="Enter chat room name.."></FormControl>
                    </FormGroup>

                    {/* description */}
                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea" rows={5} name="description" placeholder="Enter room description.."></FormControl>
                    </FormGroup>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button block appearance='primary' onClick={onSubmit} disabled={isLoading}>
                    Create new chat room
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default CreateRoombtnModal