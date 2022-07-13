import React from 'react'
import {Drawer,Button,Divider, Alert} from 'rsuite'
import { useProfile } from '../../context/profile.context'
import EditableInput from '../EditableInput'
import { database } from "../../misc/firebase";
import ProviderBlock from './ProviderBlock';
import AvatarUpload from './AvatarUpload';
import { getUserUpdates } from '../../misc/helpers';


const Dashboard = ({onSignOut}) => {

    const {profile}=useProfile()
    const onSave=async (newData)=>{

        // changing nickname in the database using reference
        // const userNicknameRef= database.ref(`profile/${profile.uid}`).child('name')

        try {
            // await userNicknameRef.set(newData)

            const updates=await getUserUpdates(profile.uid,'name',newData,database)
            await database.ref().update(updates)
            Alert.success('NIckname has been updated',4000)
        } catch (error) {
            Alert.error(error.message,4000)
        }
    }

    return (
    <>
    <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
    </Drawer.Header>

    <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock/>
        <Divider/>
        <EditableInput
        name="nickname"
        initialValue={profile.name}
        onSave={onSave}
        label={<h6 className='mb-2'>Nickname</h6>}
        />
    <AvatarUpload/>
    </Drawer.Body>

    <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>SignOut</Button>
    </Drawer.Footer>
    </>
  )
}
export default Dashboard