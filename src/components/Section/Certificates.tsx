import styled from '@emotion/styled';
import itq_logo from './../../assets/images/itq_logo.png';
import word_logo from './../../assets/images/word_logo.png';
import info_logo from './../../assets/images/info_logo.png';

const CertificatesWrapper = styled.div`
  background-color: #f9fafb;
  padding-top: 5vh;
  padding-bottom: 10vh;

  .title {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: 800;
  }
`;

const CertificatesContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  row-gap: 50px;
  margin: 0 auto;
  max-width: 1000px;
  justify-items: start;
  padding-top: 80px;
`;

const TypeContainer = styled.div`
  border-right: 2px solid #c9c9c9;
  padding-right: 80px;
`;

const TypeBox = styled.div<{ bg_logo: string }>`
  background-color: #fff;
  background-image: url(${(props) => props.bg_logo});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 1px solid #cfcfcf;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const DescribeContainer = styled.div`
  line-height: 1.7;
  .type {
    font-weight: bold;
    font-size: 30px;
  }

  .year {
    font-size: 20px;
  }

  .issuer {
    font-size: 20px;
  }

  .num {
    font-size: 20px;
  }
`;

const Certificates = () => {
  return (
    <CertificatesWrapper>
      <div className='title'>자격증</div>
      <CertificatesContainer>
        {/* 1 */}
        <TypeContainer>
          <TypeBox bg_logo={itq_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>ITQ 아래한글 A등급</div>
          <div className='year'>취득년도 : 2009</div>
          <div className='issuer'>발급기관 : 한국생산성본부</div>
          <div className='num'>자격증 번호 : A001-2009109-002936</div>
        </DescribeContainer>
        {/* 2 */}
        <TypeContainer>
          <TypeBox bg_logo={itq_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>ITQ 한글파워포인트 A등급</div>
          <div className='year'>취득년도 : 2010</div>
          <div className='issuer'>발급기관 : 한국생산성본부</div>
          <div className='num'>자격증 번호 : A001-2009109-002936</div>
        </DescribeContainer>
        {/* 3 */}
        <TypeContainer>
          <TypeBox bg_logo={itq_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>ITQ 한글엑셀 A등급</div>
          <div className='year'>취득년도 : 2011</div>
          <div className='issuer'>발급기관 : 한국생산성본부</div>
          <div className='num'>자격증 번호 : A001-2009109-002936</div>
        </DescribeContainer>
        {/* 4 */}
        <TypeContainer>
          <TypeBox bg_logo={word_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>워드프로세스 1급</div>
          <div className='year'>취득년도 : 2011</div>
          <div className='issuer'>발급기관 : 대한상공회의소</div>
          <div className='num'>자격증 번호 : 11-I9-639764-00</div>
        </DescribeContainer>
        {/* 5 */}
        <TypeContainer>
          <TypeBox bg_logo={info_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>정보처리기사</div>
          <div className='year'>취득년도 : 2024</div>
          <div className='issuer'>발급기관 : 한국산업인력공단</div>
          <div className='num'>자격증 번호 : 24203080322F</div>
        </DescribeContainer>
      </CertificatesContainer>
    </CertificatesWrapper>
  );
};
export default Certificates;
