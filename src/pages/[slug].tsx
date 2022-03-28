
import React, { useCallback, useRef, useState } from 'react';
 
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'; 

import SEO from '../components/SEO'

import { client } from '../lib/prismic'
import { Document } from 'prismic-javascript/types/documents'
import NumberFormat from 'react-number-format';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiMail, FiUser, FiPhone} from 'react-icons/fi';
import {SiWhatsapp} from 'react-icons/si'
import PageHeader from '../components/PageHeader';

import Footer from '../components/Footer';

import Input from '../components/Form/input';
import { InnerContainer, Container } from '../styles/pages/Home';
import { Miniaturas, Esquerda, Direita, Loader, Center } from '../styles/pages/SinglePageVeiculos';
import SendMail from '../utils/sendMail';
import TextArea from '../components/Form/textarea';
 
interface VeiculoProps {
    veiculo: Document
}
interface FormData {
    nome:string;
    email:string;
    mensagem:string;
    tel:string;
}

export default function Veiculo({ veiculo }: VeiculoProps) {

    function OriginalImage(image){
        return image.split("?")[0]
    }
    const router = useRouter()
     function handleChangeImage(img) {
        setImagemAtual(img)
    }
    function handleSubmit(data){

        if (!data.name || !data.tel || !data.message || !data.email){
            alert("Preencha todos os dados")
           
        }
        else{
            SendMail(data.email,data.name ,data.tel,data.message)
             
        } 
    }
  
    if (router.isFallback) {
        return <Center><Loader /></Center>
    }
 
    
     
    let [imagemAtual, setImagemAtual] = useState(veiculo.data.galeria[0].foto.url)

 
     

    return (
    <Container>
    <SEO
      title={`${veiculo.data.marca} ${veiculo.data.modelo} - ${veiculo.data.ano} `} 
      image={imagemAtual}
      description={`${veiculo.data.marca} ${veiculo.data.modelo}- ${veiculo.data.ano} , ${veiculo.data.combustivel} , ${veiculo.data.caixa} , ${veiculo.data.potencia}cv , ${veiculo.data.cilindrada}cc `}
     />
            <PageHeader />


            <InnerContainer>

                <div className="block_container">

                    <Esquerda>
                        <div className="containerImagemPrincipal">

                            <img className="imagemAtual" src={OriginalImage(imagemAtual)} />

                            <span className="ribbon">
                                {veiculo.data.etiqueta}
                            </span>
                        </div>
                        <Miniaturas>
                            {veiculo.data.galeria.map(i => (
                                <img key={i.foto.thumb.url} src={i.foto.thumb.url} onClick={() => (handleChangeImage(i.foto.url))} />

                            )
                            )}
                        </Miniaturas>

                    </Esquerda>

                    <Direita>
                        <div className="TabelaLateral">

                            <h2>{`${veiculo.data.marca} ${veiculo.data.modelo} - ${veiculo.data.ano}`}</h2>
                            <ul>
                                {veiculo.data.preco ? <li><strong>Preço</strong> <NumberFormat value={veiculo.data.preco} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'€'} renderText={value => <h3>{value}</h3>} /></li> : ""}
                                {veiculo.data.preco_iva ? <li><strong>Preço c/ IVA</strong> <NumberFormat value={veiculo.data.preco_iva} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'€'} renderText={value => <h3>{value}</h3>} /></li> : ""}
                                {veiculo.data.marca ? <li><strong>Marca</strong> {veiculo.data.marca}</li> : ""}
                                {veiculo.data.modelo ? <li><strong>Modelo</strong> {veiculo.data.modelo}</li> : ""}
                                {veiculo.data.ano ? <li><strong>Ano</strong> {veiculo.data.ano}</li> : ""}

                                {veiculo.data.cilindrada ? <li><strong>Cilindrada</strong> {veiculo.data.cilindrada} cc</li> : ""}
                                {veiculo.data.potencia ? <li><strong>Potência</strong> {veiculo.data.potencia} cv</li> : ""}

                                {veiculo.data.pneus ? <li><strong>Pneus</strong> {veiculo.data.pneus}%</li> : ""}

                                {veiculo.data.cor ? <li><strong>Cor</strong> {veiculo.data.cor}</li> : ""}
                                {veiculo.data.combustivel ? <li><strong>Combustivel</strong> {veiculo.data.combustivel}</li> : ""}
                                {veiculo.data.caixa ? <li><strong>Caixa</strong> {veiculo.data.caixa}</li> : ""}
                                {veiculo.data.quilometragem ? <li><strong>Quilometragem</strong>  <NumberFormat value={veiculo.data.quilometragem} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={''} renderText={value => <>{value} km</>} /> </li>: ""}
                            </ul>
                        </div>

                       
                        <div className="TabelaLateral">
                        <h2>Detalhes</h2>
                        <ul>

                        {veiculo.data.extras.map(i => (
                                <li key={i.extra_field[0].text} > <strong>{i.extra_field[0].text}</strong></li>

                            )
                            )}
                             </ul>

                        </div>

                        <div className="ContactButtons">
                    <span>963 828 722</span><a className="PhoneButton" href="tel:+351963828722"><FiPhone size={22} /></a><a className="WhatsappButton" target="_blank"  href="https://wa.me/351963828722"><SiWhatsapp size={22} /></a>
                    </div>

                    {process.env.NEXT_PUBLIC_SITE_NAME == "Cardip" ?
                    <div className="ContactButtons">
                     <span>926 846 453</span><a className="PhoneButton" href="tel:+351926846453"><FiPhone size={22} /></a><a className="WhatsappButton" target="_blank"  href="https://wa.me/351926846453"><SiWhatsapp size={22} /></a> 
                    </div>
                    : ""} 
             
                       



                        <div className="TabelaLateral">

                            <h2>Entrar em contacto</h2>

                
                    
                            <Form onSubmit={handleSubmit}>
                            <div className="contact_form">

                                <Input name="name"  placeholder="Nome" />

                                <Input name="tel" placeholder="Telemóvel"  />

                                <Input name="email"  placeholder="E-mail"/>

                                <TextArea name="message"  placeholder="Mensagem"/>
                                <button type="submit">Enviar</button> 
                            </div>
                            </Form>

                        </div>
                    </Direita>
                </div>

            </InnerContainer>
            <Footer/>
        </Container>



    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
};

export const getStaticProps: GetStaticProps<VeiculoProps> = async (context) => {
    const { slug } = context.params; 
    const veiculo = await client().getByUID('veiculos', String(slug), {})  

   
    
  

    return {
        props: {
            veiculo
        },
        revalidate: 60
    }
}



