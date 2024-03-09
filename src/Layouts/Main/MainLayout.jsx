import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  newNoteModalStateUpdate,
  newNoteModalButtonStateUpdate,
} from "../../services/store/reducers/newnoteModal/newnoteModalSlice";
import {
  HomeOutlined,
  InboxOutlined,
  WechatWorkOutlined,
  NotificationOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import {
  Layout,
  Menu,
  theme,
  Typography,
  Input,
  Button,
  Dropdown,
  Flex,
  Modal,
  Divider,
} from "antd";

import "./MainLayout.less";
import { Link } from "react-router-dom";

function MainLayout({ children }) {
  const { defaultSelectedKey } = children.props;
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const { TextArea, Search } = Input;
  const inputRef = useRef(null);
  const [current, setCurrent] = useState(defaultSelectedKey);
  const dispatch = useDispatch();
  const newNoteModalState = useSelector((state) => state.newNoteModalState);
  const newNoteModalButtonState = useSelector(
    (state) => state.newNoteModalButtonState
  );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // const [modal2Open, setModal2Open] = useState(newNoteModalState);
  // useEffect(() => {
  //   setModal2Open(newNoteModalState);
  // }, [newNoteModalState]);

  // working in initial render after that not working thats why commenting for now
  // useLayoutEffect(() => {
  //   if (newNoteModalState == true) {
  //       inputRef.current.focus({
  //         cursor: 'start',
  //       });
  //   }
  // }, [newNoteModalState]);

  // doing same which failed to achive through useLayoutEffect hook
  useEffect(() => {
    if (newNoteModalState == true) {
      setTimeout(() => {
        inputRef.current.focus();
        // inputRef.current.focus({
        //   cursor: "start",
        // });
      }, 500);
    }
  }, [newNoteModalState]);

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (e) => {
    // debugger;
    if (e.target.value) {
      // debugger;
      dispatch(newNoteModalButtonStateUpdate(false));
    } else {
      dispatch(newNoteModalButtonStateUpdate(true));
    }
    console.log("Change:", e.target.value);
  };
  const onSelectedItemUpdate = (e) => {
    if (e.key == "6") {
      dispatch(newNoteModalStateUpdate(true));
      return;
    }
    setCurrent(e.key);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Dave williams
          <br />
          Dave@example.com
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          <HomeOutlined
            style={{
              marginRight: "8px",
            }}
          />
          Home
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <InboxOutlined
            style={{
              marginRight: "8px",
            }}
          />
          Inbox
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <WechatWorkOutlined
            style={{
              marginRight: "8px",
            }}
          />
          Chat
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <NotificationOutlined
            style={{
              marginRight: "8px",
            }}
          />
          Notifications
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          <SearchOutlined
            style={{
              marginRight: "8px",
            }}
          />
          Browse
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "7",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Settings
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Support
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Sign out
        </a>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Layout>
        <Sider
          trigger={null}
          theme="light"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
            background: colorBgContainer,
            borderRightWidth: "1px",
            borderRightStyle: "solid",
            borderRightColor: "#00000021",
          }}
          className="hide-side-menu-for-sm-md"
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            selectedKeys={[current]}
            onClick={onSelectedItemUpdate}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: (
                  <Link to="/inbox">
                    <InboxOutlined />
                  </Link>
                ),
                label: "Inbox",
              },
              {
                key: "3",
                icon: <WechatWorkOutlined />,
                label: "Chat",
              },
              {
                key: "4",
                icon: <NotificationOutlined />,
                label: "Notifications",
              },
              {
                key: "5",
                icon: <SearchOutlined />,
                label: "Browse",
              },
              {
                key: "6",
                icon: <PlusCircleOutlined />,
                label: "New note",
              },
            ]}
            style={{
              borderRight: "0px",
              marginTop: "80px",
            }}
          />
        </Sider>

        <Layout
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: colorBgContainer,
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "#00000021",
              // border: "2px solid black",
            }}
          >
            <Flex justify="center" align="center">
              <Title level={3}>Home</Title>
            </Flex>

            <Flex className="header-features" wrap justify="space-between" align="center">
              <Search
                placeholder="Search..."
                onSearch={onSearch}
                style={{
                  width: 200,
                  marginRight: "8px",
                }}
                className="hide-search-dashboard-btns-from-hdr-for-md"
              />
              <Button
                style={{
                  marginRight: "8px",
                }}
                className="hide-search-dashboard-btns-from-hdr-for-md"
              >
                Dashboard
              </Button>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                placement="bottomLeft"
                overlayStyle={{
                  position: "fixed",
                  width: "250px",
                }}
                // style={{
                //   border:"2px solid black"
                // }}
              >
                <Button
                  style={{
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuOutlined />
                </Button>
              </Dropdown>
            </Flex>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
          <Flex
          justify="space-around"
          align="center"
          style={{
            // border:"2px solid black",
            backgroundColor:colorBgContainer,
            overflow: "hidden",
            position: "fixed",
            bottom:"0",
            width: "100%",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "#00000021",
          }}
          className="bottm-nvbr-mobile"
          >
            <Flex 
            justify="center"
            align="center"
            >
            <Button type="text"  icon={<HomeOutlined  style={{ fontSize: '27px' }} />} size="large" />
            </Flex>
            <Flex
            justify="center"
            align="center"
            >
            <Button type="text"  icon={<InboxOutlined style={{ fontSize: '27px' }} />} size="large" />
            </Flex>
            <Flex
            justify="center"
            align="center"
            >
            <Button type="text"  icon={<WechatWorkOutlined style={{ fontSize: '27px' }} />} size="large" />
            </Flex>
          </Flex>
          {/* <Flex>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vel? Nemo quasi non provident error cupiditate perferendis ipsam quis iste quia sequi. Repudiandae voluptas beatae quia sunt assumenda illo expedita impedit distinctio, praesentium obcaecati qui, maxime facere adipisci temporibus magnam ullam reiciendis quisquam. Illo rerum minima labore ipsam adipisci placeat.
          </Flex> */}
        </Layout>
      </Layout>
      <Modal
        title="New note"
        centered
        width="450px"
        open={newNoteModalState}
        okText="Post"
        // onOk={() => setModal2Open(false)}
        onOk={() => dispatch(newNoteModalStateUpdate(false))}
        // okButtonProps={{ type: "default", style: { color: "black" }, disabled: {newNoteModalButtonState} }}
        okButtonProps={{
          type: "default",
          style: { color: "black" },
          disabled: newNoteModalButtonState,
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        // onCancel={() => setModal2Open(false)}
        onCancel={() => dispatch(newNoteModalStateUpdate(false))}
      >
        <Divider />
        <TextArea
          maxLength={255}
          ref={inputRef}
          onChange={onChange}
          placeholder="What's on your mind?"
          variant="borderless"
          autoSize
        />
      </Modal>
    </React.Fragment>
  );
}

export default MainLayout;
