
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
 
            <InnerContainer> 
               
                <Direita>  
<h2>Financiamento</h2> <br/>
               <div>
    - Preços competitivos;<br/>

    Rapidez na decisão do seu financiamento; Simplicidade em todo o processo, equipa com mais de 8 anos de experiência<br/>
    - Soluções à sua medida:<br/>
    - Com ou sem entrada inicial até 120 meses<br/>
    - Prestações mensais debitadas no seu banco sem necessidade de abrir conta em outro banco.<br/><br/>

Documentos necessários para cliente particular (cópias):<br/><br/>

<b>Particular:</b><br/><br/>

C.C/ B.I do proponente (e cônjuge, caso seja casado) <br/>
Cartão de Contribuinte do proponente (e cônjuge caso seja casado)<br/>
3 ultimos recibos de vencimento do proponente (e cônjuge, caso seja casado)<br/>
Ultima declaração do IRS (c/ codigo de Validacao)<br/>
Comprovativo de IBAN / NIB c/ nome<br/>
Comprovativo de morada (Água, Luz ou Telefone)<br/>
Contactos telefónicos ( pessoais e emprego)<br/>
<br/>

<b>Empresas:</b><br/><br/>
Cartão de Contribuinte da Empresa<br/>
Certidão Comercial actualizada<br/>
Ultima declaração IRC<br/>
Demonstração de Resultados (I.E.S)<br/>
Balancete Actualizado<br/>
Comprovativo de IBAN / NIB c/ nome<br/>
Comprovativo de morada (Água, Luz ou Telefone)<br/>
C.C/B.I. de todos os sócios<br/>
Cartões de contribuinte de todos os sócios<br/>
Contactos telefónicos ( empresa e sócios)<br/><br/>

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
 