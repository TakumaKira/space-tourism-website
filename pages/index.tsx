import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const pre = 'SO, YOU WANT TO TRAVEL TO'
const title = 'SPACE'
const description = 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'

const TextBox = styled.div`
  width: 450px;
  position: absolute;
  left: 165px;
  bottom: 113px;
`
const H2 = styled.h2`
  font-size: 28px;
  font-weight: normal;
  letter-spacing: 4.725px;
  color: #D0D6F9;
`
const H1 = styled.h1`
  font-size: 150px;
  font-weight: normal;
  margin-block-end: 24px;
  margin-block-start: 24px;
`
const P = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #D0D6F9;
`

const Circle = styled.div`
  height: 274px;
  width: 274px;
  position: absolute;
  right: 165px;
  bottom: 131px;
  background-color: #FFFFFF;
  border-radius: 50%;
`

const CircleTransparent = styled.div`
  height: 274px;
  width: 274px;
  position: absolute;
  right: 165px;
  bottom: 131px;
  background-color: #FFFFFF;
  opacity: 0.1;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s;
  &:hover {
    transform: scale(calc(450 / 274));
  }
`

const LabelBox = styled.div`
  height: 274px;
  width: 274px;
  position: absolute;
  right: 165px;
  bottom: 131px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

const CircleLabel = styled.span`
  font-size: 32px;
  letter-spacing: 2px;
  color: #0B0D17;
`;

const Home: NextPage = () => {
  return (
    <>
      <TextBox>
        <H2 className="font-secondary">{pre}</H2>
        <H1>{title}</H1>
        <P className="font-body">{description}</P>
      </TextBox>
      <Circle />
      <Link href="/destination">
        <CircleTransparent />
      </Link>
      <LabelBox>
        <CircleLabel>
          EXPLORE
        </CircleLabel>
      </LabelBox>
    </>
  )
}

export default Home
