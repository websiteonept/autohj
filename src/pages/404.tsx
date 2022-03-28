import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

 
import PageHeader from "../components/PageHeader"
 


import { Container , InnerContainer,  } from '../styles/pages/Home'


import { NotFound404 } from '../styles/pages/NotFound404'

 
import SEO from '../components/SEO';

 

export default function Home( ) {


  return (
    <Container>
      <SEO
      title="Página Não Encontrada" 
      description=""
      notIndexPage
      
      />
      <PageHeader />
      <InnerContainer>

      <NotFound404>
      <img src="https://images.prismic.io/cardip/ea3007ed-09cd-4a53-b30f-855364d1de31_undraw_access_denied_6w73.png?auto=compress,format"/>

      <Link href="/">
      <a>
        Voltar para pagina inicial. 
      </a>
     </Link>
      </NotFound404>
     </InnerContainer>
    </Container>
  )
}

 