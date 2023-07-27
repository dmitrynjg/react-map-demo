import { Space, Spin } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

export default function Loading() {
  return (
      <Space
        direction='vertical'
        style={{ width: '100%' }}
      >
        <Spin
          tip='Загрузка...'
          size='large'
          indicator={
            <Loading3QuartersOutlined
              style={{ fontSize: 30, color: '#fe0006' }}
              spin
            />
          }
          style={{ color: '#fe0006' }}
        >
          <div className='content' />
        </Spin>
      </Space>
  );
}
