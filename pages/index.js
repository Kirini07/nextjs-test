import Head from 'next/head'
import {MainLayout} from "../layouts/MainLayout";

 const Index = () => {
  return (
     <>
         <MainLayout>
            <h1>Hello Next Js</h1>
             <p className='greetings'>Hey React developer i think you got wrong the door...</p>
         </MainLayout>
     </>
  )
}
export default Index