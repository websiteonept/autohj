
import React, {useEffect, useState} from 'react';
 
import Head from 'next/head';

import { Document } from 'prismic-javascript/types/documents'

import { Form } from '@unform/web';

import {FiPhone} from 'react-icons/fi';
import {SiWhatsapp} from 'react-icons/si'
import PageHeader from '../components/PageHeader';

import Footer from '../components/Footer';

import Input from '../components/Form/input';
import { Container } from '../styles/pages/Home';
import { InnerContainer , Direita } from '../styles/pages/Contacto';
import SendMail from '../utils/sendMail';
import TextArea from '../components/Form/textarea';

import dynamic from 'next/dynamic' 

const MapComponentWithNoSSR = dynamic(
  () => import('../components/MapComponent'),
  { ssr: false }
) 

interface VeiculoProps {
    veiculo: Document
}
interface FormData {
    nome:string;
    email:string;
    mensagem:string;
    tel:string;
}

export function RenderCompleted() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)

        return () => {
            setMounted(false)
        }
    });

    return mounted;
} 


export default function Veiculo({ veiculo }: VeiculoProps) {
 
    const isMounted = RenderCompleted();

    function handleSubmit(data){

        if (!data.name || !data.tel || !data.message || !data.email){
            alert("Preencha todos os dados") 
        }
        else{
            SendMail(data.email,data.name ,data.tel,data.message)
        } 
    }  
    return ( 
        <Container>
            <Head>
                <title> {`Contacto - ${process.env.NEXT_PUBLIC_SITE_NAME}` }</title>
            </Head>
            <PageHeader />  

            <MapComponentWithNoSSR />
            <InnerContainer> 
              
            
            <h2>Entrar em contacto</h2> 
                <Direita> 

                <div className="twocolumns">    
                <div className="ContactButtons">
                    <span>963 828 722</span><a className="PhoneButton" href="tel:+351963828722"><FiPhone size={22} /></a><a className="WhatsappButton" target="_blank"  href="https://wa.me/351963828722"><SiWhatsapp size={22} /></a>
                </div> 
                <div className="ContactButtons">
                     <span>212 251 514</span><a className="PhoneButton" href="tel:+351212251514"><FiPhone size={22} /></a> 
                  </div> 
                    {process.env.NEXT_PUBLIC_SITE_NAME == "Cardip" ? <> <div className="ContactButtons"><span>926 846 453</span><a className="PhoneButton" href="tel:+351926846453"><FiPhone size={22} /></a><a className="WhatsappButton" target="_blank"  href="https://wa.me/351926846453"><SiWhatsapp size={22} /></a></div></> : ""} 
                    
                </div>


                            <Form onSubmit={handleSubmit}>
                            <div className="contact_form">

                                <Input name="name"  placeholder="Nome" />

                                <Input name="tel" placeholder="Telemóvel"  />

                                <Input name="email"  placeholder="E-mail"/>

                                <TextArea name="message"  placeholder="Mensagem"/>
                                <button type="submit">Enviar</button> 
                            </div>
                            </Form>

                  
                 
                </Direita> 
                 
                

                
            </InnerContainer>
            

           
               
            <Footer/>
        </Container>



    )
}
 