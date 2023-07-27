import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import getSiderWidth from '../../helpers/getSiderWidth';
import { List, Steps, Result } from 'antd';
import './SidebarMenu.scss';
import Loading from '../Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWayPointsStart, setCurrentWayPoint } from '../../slices/waypoints';

export default function SidebarMenu() {
  const dispatch = useDispatch();
  const waypoints = useSelector((state) => state.wayPoints.points);
  const loading = useSelector((state) => state.wayPoints.loading);
  const error = useSelector((state) => state.wayPoints.error);
  const coords = useSelector((state) => state.wayPoints.coords);
  const currentWay = useSelector((state) => state.wayPoints.currentWayPoint);

  useEffect(() => {
    dispatch(fetchWayPointsStart(coords));
  }, [dispatch]);

  const width = getSiderWidth();
  return (
    <Layout.Sider
      theme='light'
      breakpoint={'lg'}
      width={width}
      collapsedWidth={0}
      trigger={<MenuOutlined />}
      zeroWidthTriggerStyle={{
        background: 'white',
        zIndex: 1000,
        transform: 'translate(20px, 0px)',
        width: '48px',
        height: '48px',
      }}
      className='sidebar'
    >
      <div
        className='sidebar-container'
        style={{
          width,
        }}
      >
        {loading && (
          <div className='sidebar-container-center'>
            <Loading />
          </div>
        )}
        {error && (
          <div className='sidebar-container-center'>
            <Result
              status='error'
              title='Произошла ошибка'
              subTitle={error}
            />
          </div>
        )}
        {!loading && !error && (
          <List
            itemLayout='horizontal'
            dataSource={waypoints}
            className='sidebar-container-waypoints'
            renderItem={(item) => (
              <List.Item
                className={
                  currentWay.id === item.id
                    ? 'sidebar-container-waypoints__item sidebar-container-waypoints__item--dark'
                    : 'sidebar-container-waypoints__item'
                }
                style={{
                  padding: '0 20px',
                  paddingTop: '5px',
                }}
                onClick={() => {
                  if (item.id !== currentWay.id) {
                    dispatch(setCurrentWayPoint(item));
                  }
                }}
              >
                <List.Item.Meta
                  title={item.title}
                  description={
                    <Steps
                      progressDot
                      direction='vertical'
                      items={item.points}
                    />
                  }
                  key={item.title}
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </Layout.Sider>
  );
}
