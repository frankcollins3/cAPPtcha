import React from 'react';
import Container from 'react-bootstrap/Container';
import { useGoldMineImage } from './ImgContext/minegold';
import {useState} from "react"

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type CapptchaProps = {
  size: string;
  type: string;
};


const GoldMineCapptcha: React.FC<CapptchaProps> = ({ size, type }) => {
  
  return (
    <Container className="container">      
        <Box/>        
    </Container>
  );
};

type GridProps = {
  images: string[];
};

const Box: React.FC = () => {
  const { signupsigns, dynamite, helmet, barrier,         trophy, gold, cart,     luckypull  } = useGoldMineImage();
  
  const imagebucket:string[] = [signupsigns, dynamite, helmet, barrier, trophy, gold, cart]


  const [goldFound, setGoldFound] = useState(false)
  const [img, setImg] = useState(signupsigns)

    const hoverShuffle = () => {
      let randomImage:any = imagebucket[Math.floor(Math.random() * imagebucket.length)]
        setImg(randomImage)
      }          

    const capptchaEval = (event:any) => {
        console.log(event)
        let src:string = event.target.src
        console.log('src', src)

        if (src.includes(trophy) || src.includes(gold) || src.includes(cart)) {
          setGoldFound(true)
        } 


    }

    return (
        <Container onMouseEnter={hoverShuffle} id="imgBox">
        {/* <Container style={{ height: '200px', width: '200px', border: '5px solid hotpink'}} id="imgBox"> */}
        <pre className="ghost"> nice </pre>
        <img onClick={capptchaEval} className="img" src={img}/>
        {
          goldFound
          ? <Mine/>
          : <Slots/>
        }
        
        <pre className="text"> {goldFound ? "Find the Mines" : "Find the Gold"} </pre>
        {/* <pre className="text"> Find the Gold. Find the Mine. </pre> */}
        </Container>
    )
}

const Slots: React.FC = () => {
    const { luckypull } = useGoldMineImage()
    return <img className="slots" src={luckypull}/> 
}

const Mine: React.FC = () => {
  const { mine } = useGoldMineImage()
    return <img className="slots" src={mine}/>
}

export default GoldMineCapptcha;
