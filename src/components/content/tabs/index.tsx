import { Tabs as MUITabs, TabsProps } from 'antd'
import { Todos } from '../todos'
import { Users } from '../users'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Users',
    children: <Users />,
  },
  {
    key: '2',
    label: 'Todos',
    children: <Todos />,
  },
]

export const Tabs: React.FC = () => {
  return <MUITabs defaultActiveKey="1" items={items} />
}
