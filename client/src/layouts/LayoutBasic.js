import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import './LayoutAdmin.scss'


//Componentes de AntDesign
const { Content,Footer } = Layout;

export default function LayoutBasic(props) {
    const { routes } = props

    return (
        <>
            <h2>Menu</h2>
            <Layout>
                <Content>
                    <LoadRouters routes={routes}/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
}

const LoadRouters = ({routes}) => {
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