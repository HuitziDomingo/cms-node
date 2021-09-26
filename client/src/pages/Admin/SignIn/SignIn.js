import { Layout, Tabs } from 'antd'
// import { Redirect } from 'react-router-dom'
import Logo from '../../../assets/img/png/huitziLogo.png'
import { RegisterForm } from '../../../components/Admin/RegisterForm'
import './SignIn.scss'

const { Content } = Layout
const { TabPane } = Tabs;

export default function SignIn() {


    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt="Huitzitzili" />
                </h1>
                <div className="sign-in__content-tabs">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab={<span>Entrar</span>} key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}
