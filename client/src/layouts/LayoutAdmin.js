import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './LayoutAdmin.scss'
import { Layout } from 'antd';
import { MenuTop } from '../components/Admin/MenuTop'
import { MenuSider } from '../components/Admin/MenuSider'
import { SignIn } from '../pages/Admin'



const { Header, Footer, Content } = Layout;

export default function LayoutAdmin(props) {

    const { routes } = props

    const [menuCollapsed, setmenuCollapsed] = useState(false);

    let user = null
    if (!user)
        return (
            <>
                <Route path="/admin/login" component={SignIn} />
                <Redirect to="/admin/login" />
            </>
        )

    return (
        <>
            <Layout>
                {/*Componente Menu Sider*/}
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
                    <Header className="layout-admin__header">
                        {/*Componente Menu Top */}
                        <MenuTop
                            menuCollapsed={menuCollapsed}
                            setmenuCollapsed={setmenuCollapsed}
                        />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer className="layout-admin__footer">Footer555555</Footer>
                </Layout>
            </Layout>
        </>
    )
}


const LoadRoutes = ({ routes }) => {

    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))
            }
        </Switch>
    )
}