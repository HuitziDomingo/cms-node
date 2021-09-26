import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from '@ant-design/icons'
import './MenuTop.scss'
import HuitziLogo from '../../../assets/img/png/huitziLogo.png'

export default function MenuTop({ menuCollapsed, setmenuCollapsed }) {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/admin"}>
                    <img
                        src={HuitziLogo}
                        className="menu-top__left-logo"
                        alt="Huitzitzili"
                    />
                </Link>
                <Button type="link" onClick={() => setmenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}
