import React from 'react'
import {Redirect, Route} from 'react-router';
import { useProfile } from '../context/profile.context';
import {Container,Loader} from 'rsuite';



const PublicRoute = ({children,...privateProps}) => {

  const {isLoading,profile}=useProfile();

  if(isLoading && !profile){
    return <Container>
      <Loader center vertical size="md" content="Loading" speed="slow"/>  
    </Container>
  }
    if(profile && !isLoading){
        return <Redirect to="/"/>
    }
  return (
    <Route {...privateProps}>
        {children}
    </Route>        
  )
}

export default PublicRoute