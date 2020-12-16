import React from 'react'
import { useHistory } from 'react-router';
import { Button } from 'rsuite'

const Main: React.FC = () => {
  const history = useHistory();

  const to_hello = () => {
    history.push("/main/hello")
  }
  return (
    <Button onClick={to_hello}>查看欢迎页</Button>
  )
}

export default Main
