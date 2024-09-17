import { FC, MouseEventHandler } from 'react'
import { Card, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { User as UserType } from 'store/users/types'
import { Description } from './description'

type Props = {
  data: UserType
  onClick: MouseEventHandler<HTMLDivElement>
  isPending: boolean
}

export const User: FC<Props> = ({ data, onClick, isPending }) => {
  if (isPending)
    return (
      <Skeleton
        title
        active
        avatar={{ size: 'large', shape: 'square' }}
        paragraph={{ rows: 5 }}
        style={{ padding: 8, border: '1px solid #f0f0f0', borderRadius: 8 }}
      />
    )
  console.log({ data })

  return (
    <>
      <Card hoverable onClick={onClick} data-user-id={data.id}>
        <Meta title={data.name} description={<Description data={data} />} />
      </Card>
    </>
  )
}
