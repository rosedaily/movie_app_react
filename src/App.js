/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropsTypes from 'prop-types'

function Cat({ typeName, image, desc, rating }){
  return (
    <div>
      <img src={image} alt={typeName} />
      <h2> {typeName} </h2>
      <h4> 선호도 : {rating} / 5.0</h4>
      <p> {desc}</p>
    </div>
    );
}

const catBreeds = [
  {
    id : 1,
    typeName : '아메리카쇼트헤어',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTRfNTUg%2FMDAxNjQyMTU0NDMyNzc4.oxjOIiLLMIArS8806_sCRSnC6_o7jjXwwuafZCf4XHMg._lgJqN-O8Bc0W6QP3DYEqCuXvIxcWfMs92l2oF19dHMg.JPEG.fnfnfjfj%2FIMG_8442.jpg&type=a340',
    desc : '미국과 일본에서 수요가 많은 활동적이고 쾌활한 고양이.',
    rating : 4.2
  },{
    id : 2,
    typeName : '페르시안',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTlfMzcg%2FMDAxNjQ3Njg4NDI0MDU0.RdVvR7dEgO59sUyKKcoue4N-ltTW5mKH7sNZtDcaYtUg.W1Pvip9aNZH8S5B-kk0dD2unREQN8aXxeN7p2i-zkxcg.JPEG.meow_seol%2F8FF49DBE-A380-43F4-993A-E5CC011889A3.jpg&type=a340',
    desc : '부드러운 털과 조용하고 온순한 성격으로 대단히 높게 평가되는 고양이. 털과 눈의 색에 따라 구별되며 다양한 품종이 있다.',
    rating : 4.8
  },{
    id : 3,
    typeName : '메인쿤',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjNfMTc2%2FMDAxNjAwODU5OTQyMjk4.N_RNDDjIpC0Nk3Rt3B2VJmzFmsxyg9bpaZZhtlh73QUg.m-npeGUir4iBh0lqdPACYMHOiYtKQd_Md1CHlFolX9wg.JPEG.tippycoon%2F1600859946513.jpg&type=a340',
    desc : '튼튼하고 조용하며 상냥한 고양이. 듣기 좋은 울음소리를 내며, 미국에서는 매우 인기있지만, 유럽에서는 별로 흔하지 않다.',
    rating : 4.4
  },{
    id : 4,
    typeName : '샴',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMThfMTA1%2FMDAxNjM3MjE3NzM4MzI5.hPE8aUzasLRe6F4_hedNYKnfVQGl_1mhk2wCq0fXHD8g.4I1woGzJDLB3gHra6gGBZDjTw96YFQQ5mEIZ4fJDrtog.JPEG.kj2k2%2FResized%25A3%25DFResized%25A3%25DF20200819%25A3%25DF134956%25A3%25A81%25A3%25A9.jpeg&type=a340',
    desc : '호리호리한 몸매의 태국산 고양이. 놀기를 좋아하며 온순하다. 요란하고 거친 울음소리를 낸다.',
    rating : 4.6
  },{
    id : 5,
    typeName : '아비시니아',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMjJfMTkx%2FMDAxNjQ3OTI1ODE1MjUw.L1-PoXXeWLq0CJY-DXTJwe9LxR3GYbkY-7ICArbaFcsg.5hhMSugMuwtUEgfI9FaUjQflmvc_9kKyOs8nH-ubBusg.JPEG.lalapet%2Fa159be849f317860e8d1bf9dab58a1d7.jpg&type=a340',
    desc : '이집트나 에티오피아산 품종의 날씬한 고양이. 온순하고 활동적이며, 듣기 좋은 울음소리를 낸다.',
    rating : 4.9
  },{
    id : 6,
    typeName : '맹크스',
    image : 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MTdfMjg2%2FMDAxNTk3NjU2MzU0NjA2.dKdZMXTf3V6Z8GP_8xUpf3tMlqQVsUnKawbQnWIVKVgg.vbQBTbVUYxfFJv2u34g933FyX5VSm9qic5WDke3pWoQg.PNG.ttolttol2224%2F20200817_180833_2.png&type=a340',
    desc : '뒷다리가 앞다리보다 긴 꼬리 없는 고양이.',
    rating : 3.7
  },

];

Cat.prototype = {
  typeName: PropsTypes.string.isRequired,
  image: PropsTypes.string.isRequired,
  desc: PropsTypes.string.isRequired,
  rating: PropsTypes.number.isRequired,
}

function renderCat(cat){
  return <Cat key={cat.id} typeName={cat.typeName} image={cat.image} desc={cat.desc}/>
}

function App() {
  return (
    <div>
      <h1>고양이 종류를 소개해볼게 😊 </h1>
      {/* map 안에서 렌더링 하는 방식 */}
      {catBreeds.map(cat => (
        <Cat key={cat.id} typeName={cat.typeName} image={cat.image} desc={cat.desc} rating={cat.rating}/>
      ))}
      {/* 함수를 호출해서 함수에서 렌더링 하는 방식 */}
      {/* {catBreeds.map(renderCat)} */}
    </div>
  );
}

export default App;
