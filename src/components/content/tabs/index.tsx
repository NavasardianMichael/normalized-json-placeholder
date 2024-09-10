import { Tabs as MUITabs, TabsProps } from 'antd'
import { Conferences } from 'components/conferences'
import { Speakers } from 'components/speakers'
import { Speeches } from 'components/speeches'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Conferences',
    children: <Conferences />,
  },
  {
    key: '2',
    label: 'Speeches',
    children: <Speeches />,
  },
  {
    key: '3',
    label: 'Speakers',
    children: <Speakers />,
  },
]

export const Tabs: React.FC = () => {
  return <MUITabs defaultActiveKey="1" items={items} />
}
