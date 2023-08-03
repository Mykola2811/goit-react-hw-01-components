import styled from 'styled-components';
import Image1 from '../../img/Image1.png';
import Image2 from '../../img/image2.png';
import Image3 from '../../img/image3.png';
import Image4 from '../../img/image4.png';
import Image5 from '../../img/image5.png';
import Image6 from '../../img/image6.png';
import Image7 from '../../img/image7.png';
import Image8 from '../../img/image8.png';
import Image9 from '../../img/Frame9.png';
import Image10 from '../../img/Frame6.png';
import Image11 from '../../img/Group.png';
import Image12 from '../../img/Frame1.png';
export const Header = () => {
  return <Wrapper >
      <Ul >
          <Heder>
              <img src={Image10} alt="rewards" width={174} />
          </Heder>
          <img src={Image9} alt="rewards" width={78} height={50} style={{marginBottom: 22}} />
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: 10}}>
            <img src={Image1} alt="rewards" width={331} style={{marginBottom: 16, marginRight: 0, display: 'block'}}/>
            <img src={Image2} alt="rewards" width={331} style={{marginBottom: 40, marginRight: 0, display: 'block'}}/>
            <img src={Image3} alt="rewards" width={331} style={{marginBottom: 40, marginRight: 0, display: 'block'}}/>
            <img src={Image4} alt="rewards" width={331} style={{marginBottom: 40, marginRight: 0, display: 'block'}}/>
            <img src={Image5} alt="rewards" width={331} style={{ marginBottom: 70, marginRight: 0, display: 'block' }} />
          </div>
          <img src={Image12} alt="rewards" width={87} height={50} style={{marginBottom: 43}}/>
          <img src={Image6} alt="rewards" style={{marginBottom: 40}}/>
          <img src={Image7} alt="rewards" style={{marginBottom: 55}}/>
          <img src={Image8} alt="rewards" width={266} style={{marginBottom: 51}}/>
      </Ul>
</Wrapper>;
}

const Wrapper = styled.div`
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    max-width: 500px;
`;
const Heder = styled.div`
    margin-left: 0;
    margin-right: 0;
`;
const Ul = styled.ul`
    text-align: center;
    display: inline-flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
`;
