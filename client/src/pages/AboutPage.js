import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='hakkımızda' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice-desk' />
        <article>
          <div className='title'>
            <h2>hikayemiz</h2>
            <div className='underline'></div>
          </div>
          <p>
            Merhaba ve hoş geldiniz! Biz, BabaMerdan ailesi olarak, sizlere en
            iyi deneyimi sunmak amacıyla kurulmuş bir ekibiz. Babamerdan ailesi
            olarak, ev - ofis duvarlarını, göz önünde olupta farke edilmeyen
            bölümlerini, dikkat çekecek ve göze hoş gelecek şekilde dekore etmek
            konusunda uzmanlıkla donanmış bir ekip olarak, müşterilerimize
            benzersiz ve kaliteli çözümler sunmak için buradayız. Vizyonumuz,
            müşteri memnuniyetini her şeyin üzerinde tutmak ve yenilikçi
            çözümlerle sektörümüzde öncü bir konumda olmaktır.
            Amacımız,alanımızda en iyi hizmeti sunmak ve müşterilerimizin
            ihtiyaçlarını anlamak ve onlara en iyi çözümleri sunarak hayatlarını
            daha iyi hale getirmektir. Müşterilerimizin beklentilerini aşmak
            için, BabaMerdan ekibi olarak sürekli gelişmeyi ve öğrenmeyi
            hedefliyoruz. İnovasyon ve teknolojiyi yakından takip ederek,
            sektördeki en son gelişmeleri müşterilerimize yansıtıyor ve hizmet
            kalitemizi sürekli iyileştiriyoruz. Ekibimizde, kendi uzmanlık
            alanlarında deneyimli ve tutkulu kişiler bulunmaktadır. Her birimiz,
            müşterilerimize değer verir ve onların başarılarına katkıda bulunmak
            için elinden gelenin en iyisini yapar. BabaMerdan ailesi olarak,
            sizleri ailemize katılmaya davet ediyoruz! Saygılarımızla...
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
