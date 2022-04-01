/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types'

function Food({ name, image, rating }) {
 return (
   <div>
     <h2>{name}</h2>
     <h4>{rating}/5.0</h4>
     <img src={image} alt={name}/>
   </div>
 );
}

const foodLike = [
  {
    id : 1 ,
    name : 'Kimchi',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTJfNjMg%2FMDAxNjQ3MDU3MTQwMjYz.E3YRt0K2NwSYk660rrw4XHYRTm8YtR2HOayez029_BIg.51pSeDjXsokpfXN3xI1T6dKNSDbgf1FgXwyUMnt7nqAg.PNG.diamond3802%2Fimage.png&type=a340',
    rating : 5,
  },
  {
    id : 2,
    name : 'Ramen',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDZfMjMx%2FMDAxNjQ2NTA0MTkyMjQ2.5GSupvLTHcL78rVrtVPApGZ2jnZ3zjKljWec6LPtSiog.5JSp2vUNr3rSEaUK9o6m3OMLZ2ZVvaNX5QLzj4w3Zbkg.JPEG.lemon_tree05%2F2019-09-08-15-34-21.jpg&type=a340',
    rating : 4,
  },
  {
    id : 3,
    name : 'Samgiopsal',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjNfMjQ1%2FMDAxNjQ4MDI1NjU1MDE2.YjcJmvfYwalNhSrwvJyycsHwW-wHuHoj9reqT7KSYMEg.s1DkpVbv0nyDxfuB31WxofFUuQwxDZHXuJJKvXe_2E4g.JPEG.purnsongei%2F20220323%25A3%25DF155135.jpg&type=a340',
    rating : 2,
  },
  {
    id : 4,
    name : 'Coffee',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTlfMTU2%2FMDAxNjQ3NjcwOTg0NjE3.g3OUUc4QmNrOCB7-bZ3ecPYSfi9r5CZp3H8hgbpjZu8g.J2lMWd0xJtaon2A-r9uKGZ925_SXzqduDtuY5Qwaw7Ug.JPEG.helpcm%2FIMG_0372.JPG&type=a340',
    rating : 3,
  },
  {
    id : 5,
    name : 'Chukumi',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTJfMTQ1%2FMDAxNjQ3MDYxODMxNjEy.NmAZkhGvgEsZNGCy27stIHOMIHyHz15K3coV2ASN3Ocg.3DxZpjz4X1pzuKjQsuPqoESNy8YdZglOzR_8YAqrzXEg.JPEG.heeya80977%2FIMG_6358.jpg&type=a340',
    rating : 4.5,
  },
  {
    id : 6,
    name : 'Kimbap',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMThfMjcy%2FMDAxNjQ3NTg1MDQ4MDUz.kDm6wz1WmuViPVWiO13wKPpgkOlyeavP5eb9ZwFGmvIg.U_nMNJF8kKLESQbuLgBFm6XFTPFMXHWZZCv_ZKn4dqYg.JPEG.gumdang1234%2FKakaoTalk_20220317_173122173_04.jpg&type=a340',
    rating : 5,
  },
  {
    id : 7,
    name : 'Doncasu',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMTRfMjQw%2FMDAxNjQ0ODQ4NTQzNzQ4.o6UjIe7oY4wcryVB3sHhUAlWxPT-1ga034Jlm-CxWIMg.GA6LmZ_pNEAifOPF5YaLZQN8S_tlvKfjDKC30hFI5b4g.JPEG.sophie223%2F20220205_135712.jpg&type=a340',
    rating : 3.5,
  }

];

function App() {
  return (
    <div>
      {foodLike.map(food =>(
        <Food key={food.id} name={food.name} image={food.image} rating={food.rating}/>
      ))}
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number
};

export default App;
