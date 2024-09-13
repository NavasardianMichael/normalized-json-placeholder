import { FC } from 'react'
import { Flex } from 'antd'
import { Todo } from 'store/todos/types'
import { DescriptionDetail } from './Detail'

type Props = {
  data: Todo
}

const todoDetails: (keyof Todo)[] = ['title']

export const Description: FC<Props> = ({ data }) => {
  return (
    <Flex gap="small" style={{ marginTop: 12, whiteSpace: 'nowrap' }}>
      <div>
        {todoDetails.map((detailKey) => {
          return <DescriptionDetail name={detailKey} value={data[detailKey]} />
        })}
      </div>
    </Flex>
  )
}
