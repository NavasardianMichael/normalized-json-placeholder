import { FC } from 'react'
import { Divider, Flex } from 'antd'
import { Todo } from 'store/todos/types'
import { selectUsers } from 'store/users/selectors'
import { useAppSelector } from 'hooks/useAppSelector'
import { DescriptionDetail } from './Detail'

type Props = {
  data: Todo
}

const todoDetails: (keyof Todo)[] = ['title']

export const Description: FC<Props> = ({ data }) => {
  const users = useAppSelector(selectUsers)

  return (
    <Flex gap="small" style={{ marginTop: 12, whiteSpace: 'nowrap', flexDirection: 'column' }}>
      <div>
        {todoDetails.map((detailKey) => {
          return <DescriptionDetail key={detailKey} name={detailKey} value={data[detailKey]} />
        })}
      </div>
      <Divider>Related Entities</Divider>
      <DescriptionDetail name="User" value={users.byId[data.userId].name} />
    </Flex>
  )
}
