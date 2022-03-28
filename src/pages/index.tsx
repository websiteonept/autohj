import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { GetServerSideProps } from "next";
import { client } from "../lib/prismic";
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import Prismic from "prismic-javascript"

import PrismicDom from "prismic-dom"
import { Document } from "prismic-javascript/types/documents"

import { Container , InnerContainer, TreeColumns } from '../styles/pages/Home'
import { useRouter } from 'next/dist/client/router';
import PostItem from '../components/PostItem';
import SEO from '../components/SEO';

interface HomeProps {
  veiculos: Document[]
}

export default function Home({ veiculos }: HomeProps) {


  return (
    <Container>
      <SEO
      title={process.env.NEXT_PUBLIC_SITE_NAME}
      description="Carrinhas e viaturas comerciais em Lisboa, Odivelas, Amadora, Margem Sul"
      shoudExcludeTitleSuffix
      />
        
      <PageHeader />
      <InnerContainer>

      <TreeColumns>
      {veiculos.map(veiculo => {
        return (  
        
                    <PostItem 
                    key={veiculo.id} 
                    img={veiculo.data.galeria[0].foto.thumb.url}
                    img_alt={veiculo.data.galeria[1].foto.thumb.url}
                    title={`${veiculo.data.marca} ${veiculo.data.modelo} - ${veiculo.data.ano}`}
                    etiqueta={veiculo.data.etiqueta}
                    price={veiculo.data.preco}
                    url={`/${veiculo.uid}`}/> 
                    
  
        )
      })}

      </TreeColumns>
     </InnerContainer>
     <Footer />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const veiculos = await client().query([
    Prismic.Predicates.at('document.type', 'veiculos')
  ]);

  return {
    props: {
      veiculos: veiculos.results
    }
  }
}; 