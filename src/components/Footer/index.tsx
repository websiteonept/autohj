import { FooterDiv,TopBarFooter, TopBar } from './styles'
import { FiMenu, FiUser, FiChevronLeft, FiFacebook, FiInstagram, FiX, FiPhone } from 'react-icons/fi'
import WebsiteoneLogo from '../../assets/150w.png'


import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Categories {
  id: number;
  name: string;
  slug: string;
}


function PageHeader() {
  const [urlSlug, setUrlSlug] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const anoCopy = new Date().getFullYear()

  useEffect(() => {
    const { slug } = router.query
    setUrlSlug(slug)
    menuOpen? (document.body.style.overflow = 'hidden'):(document.body.style.overflow = 'unset')
    })

  function handleMenuOpen() {
    setMenuOpen(!menuOpen)
    }
  return (
    <>

<TopBarFooter >
        <div className="block_container">
        <FooterDiv>
               <div className="centro">
                <h2>Tens alguma dúvida?</h2>
                <h3><FiPhone size={22} />963 828 722</h3>
                <h3><FiPhone size={22} />212 251 514</h3>
                
                {process.env.NEXT_PUBLIC_SITE_NAME == "Cardip" ? <h3><FiPhone size={22} />926 846 453</h3>: ""}  

            </div> 
          </FooterDiv>

        </div>
      </TopBarFooter >


      
      <TopBar >
        <div className="block_container">
        <FooterDiv>
               <div className="centro">
                <p style={{textAlign:'center'}}>&copy; {anoCopy} Copyright - {process.env.NEXT_PUBLIC_SITE_NAME} <br/> VOLANTE REFRESCANTE UNIPESSOAL LDA  Rua 25 de Abril, 42B - 2620-041 Odivelas</p>
                
                <a href="https://www.websiteone.pt" target="_blank"><img width="100px" src={WebsiteoneLogo}/></a>
            </div> 
          </FooterDiv>

        </div>
      </TopBar >
    </>
  );
}


export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  return {
    props: {
      slug
    },
    revalidate: 60
  }
}




export default PageHeader

