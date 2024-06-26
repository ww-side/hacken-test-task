import { type ReactNode } from 'react';
import {
  Button,
  Dropdown as AntDropdown,
  MenuProps,
  Space,
  Typography,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import st from './dropdown.module.scss';

export default function Dropdown({
  items,
  placeholder,
  initialValue,
  onClick,
}: {
  items: MenuProps['items'];
  placeholder: ReactNode;
  initialValue?: ReactNode;
  onClick?: MenuProps['onClick'];
}) {
  return (
    <AntDropdown menu={{ items, onClick }} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>
        <Button>
          <Space className={st.dropdown}>
            <Typography.Text>
              {initialValue ? initialValue : placeholder}
            </Typography.Text>
            <DownOutlined />
          </Space>
        </Button>
      </a>
    </AntDropdown>
  );
}
