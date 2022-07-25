import React from 'react'
import { Route,Routes} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Category from './Category'
import Electronics from './category/Electronics'
import FemaleProducts from './category/FemaleProducts'
import Jewelry from './category/Jewelry'
import MensProducts from './category/MensProducts'
import StartingMessage from './category/StartingMessage'
import Checkout from './Checkout'
import Home from './Home'
import PageNotFound from './PageNotFound'
import PublicRoutes from './PublicRoutes'

const Navbar = () => {

 
  return (
    <BrowserRouter>
     <PublicRoutes/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='category' element={<Category/>}>
              <Route index element={<StartingMessage/>}/>
              <Route path='menproducts' element={<MensProducts/>}/>
              <Route path='womenproducts' element={<FemaleProducts/>}/>
              <Route path='electronics' element={<Electronics/>}/>
              <Route path='jewelery' element={<Jewelry/>}/>
            </Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navbar