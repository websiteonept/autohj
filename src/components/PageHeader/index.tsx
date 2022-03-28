import { PageHeaderDiv, TopBar, MenuHeader } from './styles'
import { FiMenu, FiUser, FiChevronLeft, FiFacebook, FiInstagram, FiX } from 'react-icons/fi'
import CardipLogo from '../../assets/cardip.png'
import AutohjLogo from '../../assets/autohj.png'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Categories {
  id: number;
  name: string;
  slug: string;
}

function PageHeader() {
  const [urlSlug, setUrlSlug] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

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
      {menuOpen ? (
        <MenuHeader>
          <div className="direita"  >
            <button onClick={handleMenuOpen}><FiX size={30} /></button>
          </div>
          <ul>
            <li><Link href="/">
              <a><h3  onClick={handleMenuOpen} >Home</h3></a>
            </Link></li>

            <li><Link  href="/financiamento">
              <a><h3  onClick={handleMenuOpen}>Financiamento</h3></a>
            </Link></li>

            <li><Link  href="/contacto">
              <a><h3  onClick={handleMenuOpen}>Contacto</h3></a>
            </Link></li>

            
 
          </ul>
        </MenuHeader>
      )
        : null
      }
      <TopBar >
        <div className="block_container">
          <PageHeaderDiv>
            <div id="esquerda">
              <Link href="/">
                <a>
                  {urlSlug ? <button className="backButton"><FiChevronLeft size={30} /></button> : <></>}
                </a>
              </Link>
            </div>

            <div id="centro">
              <Link href="/">
                <a>
                  <img height="70px" src={process.env.NEXT_PUBLIC_SITE_NAME == "Cardip" ? CardipLogo : AutohjLogo } /> 
                
                </a>
              </Link>
            </div>
  
            <div id="direita" >
              <button onClick={handleMenuOpen}><FiMenu size={30} /></button>
            </div>
 
          </PageHeaderDiv>

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
    revalidate: 10
  }
}




export default PageHeader

