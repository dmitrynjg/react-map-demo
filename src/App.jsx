import { Layout } from 'antd';
import Map from './components/Map/Map';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

function App() {
  return (
    <Layout>
      <SidebarMenu />
      <Layout.Content style={{ height: '100vh' }}>
        <Map />
      </Layout.Content>
    </Layout>
  );
}

export default App;
