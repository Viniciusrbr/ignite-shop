import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green500',
})

function Home() {
  return (
    <Button>clique aqui</Button>
  )
}

export default Home