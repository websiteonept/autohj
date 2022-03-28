import React, { useState } from 'react';
import { PostItemDiv, Imagem, TwoCollumns } from './styles'
import Link from 'next/link';
import NumberFormat from 'react-number-format';
interface Props {
  title: string;
  price: string;
  img: string;
  img_alt: string;
  url: string;
  etiqueta?: string;
}

const PostItem: React.FC<Props> = ({ title, price, img, img_alt, url, etiqueta, children }) => {

  const [backgroundImage, setBackgroundImage] = useState(img)

  function handleChangeBackground(v){
    setBackgroundImage(v)
  }
 

  return (
    <PostItemDiv >
      <Link href={url} >
        <a>
          <Imagem onMouseEnter={() => handleChangeBackground(img_alt)} onMouseLeave={() => handleChangeBackground(img)}  style={{ backgroundImage: `url(${backgroundImage})` }}>
            <span className="ribbon">
              {etiqueta}
            </span>
          </Imagem>
          <TwoCollumns>
            <span className="title">
              {title}
            </span>
            <span className="price">
              <NumberFormat value={price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}  prefix={'€'} renderText={value => <strong>{value}</strong>} />
            </span>
          </TwoCollumns>
        </a>
      </Link>
    </PostItemDiv>

  );
}

export default PostItem