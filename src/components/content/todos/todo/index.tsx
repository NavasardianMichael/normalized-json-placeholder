import { FC, MouseEventHandler } from 'react'
import { Card, Skeleton } from 'antd'
import Meta from 'antd/es/card/Meta'
import { Todo as TodoType } from 'store/todos/types'
import { Description } from './description'

type Props = {
  data: TodoType
  onClick: MouseEventHandler<HTMLDivElement>
  isPending: boolean
}

export const Todo: FC<Props> = ({ data, onClick, isPending }) => {
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

  return (
    <>
      <Card hoverable onClick={onClick} data-todo-id={data.id}>
        <Meta title={data.title} description={<Description data={data} />} />
      </Card>
    </>
  )
}
