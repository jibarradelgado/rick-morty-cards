import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import './CharacterList.css'
import { StarOutlined } from "@ant-design/icons"

const CharacterCard = ({character}) => {
  return (
    <Card title={character.name} cover={<img src="" alt="Rick" />} extra={<StarOutlined />}>
      <Meta description="burrrrp" />
      <Meta description="ble" />
    </Card>
  )
  
}

export default CharacterCard