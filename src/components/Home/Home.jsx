import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newNoteModalStateUpdate } from "../../services/store/reducers/newnoteModal/newnoteModalSlice";
import {
  Button,
  // Modal,
  // Divider,
  Card,
  Avatar,
  List,
  Space,
  Skeleton,
  // Input,
  Flex,
  Dropdown,
  Menu,
  Typography,
  Col,
  Row,
  Image,
  FloatButton,
} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  AlignCenterOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  HomeOutlined,
  CheckOutlined,
  DashOutlined,
  CheckCircleFilled,
  HeartOutlined,
  CommentOutlined,
  SyncOutlined,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";


import "./Home.less";
import FeedCard from "../FeedCard";

function Home() {
  const { Text, Link } = Typography;
  const { Meta } = Card;
  const [isMobile, setIsMobile] = useState(false);
  const [isExploreSelected, setIsExploreSelected] = useState(true);
  const [isFollowingSelected, setIsFollowingSelected] = useState(false);

  let isTrue = true;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dispatch = useDispatch();

  const items = [
    {
      key: "1",
      label: "Explore",
      icon: isExploreSelected ? <CheckOutlined /> : "",
    },
    {
      key: "2",
      label: "Following",
      icon: isFollowingSelected ? <CheckOutlined /> : "",
    },
  ];

  const data = Array.from({
    length: 2,
  }).map((_, i) => ({
    href: "https://ant.design",
    title: `antd${i}`,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description: "Ant Design",
    content: "We supply a series of design principles.",
  }));

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const onNotesSectionDropdItemClick = ({ key }) => {
    if (key == 1) {
      setIsFollowingSelected(false);
      setIsExploreSelected(true);
    }
    if (key == 2) {
      setIsExploreSelected(false);
      setIsFollowingSelected(true);
    }
    console.log(`Click on item ${key}`);
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        border: "2px solid black",
      }}
    >
      <Flex
        vertical
        wrap
        justify="flex-start"
        style={{
          border: "2px solid green",
          width: "500px",
        }}
      >
        <Flex
          justify="space-around"
          align="center"
          style={{
            border: "2px solid red",
            height: "80px",
          }}
          className="hide-start-post"
        >
          <Button
            // onClick={() => setModal2Open(true)}
            onClick={() => {
              dispatch(newNoteModalStateUpdate(true));
            }}
            style={{
              border: "2px solid black",
              width: "400px",
            }}
          >
            <Flex justify="flex-start" align="center">
              What's on your mind?
            </Flex>
          </Button>
          <Button
            style={{
              border: "2px solid black",
              borderRadius: "20px",
            }}
            disabled={true}
          >
            <Flex justify="center" align="center">
              Post
            </Flex>
          </Button>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          style={{
            border: "2px solid gray",
            height: "70px",
          }}
        >
          <Flex
            justify="center"
            align="center"
            style={{
              border: "2px solid black",
              marginLeft: "20px",
            }}
          >
            Notes
          </Flex>

          <Dropdown
            menu={{
              items,
              onClick: onNotesSectionDropdItemClick,
            }}
            trigger={["click"]}
            placement={isMobile ? "bottomLeft" : "bottom"}
            overlayStyle={{
              position: "fixed",
              width: "200px",
            }}
          >
            <Button
              style={{
                border: "2px solid black",
                borderRadius: "8px",
                marginRight: "10px",
              }}
            >
              <Flex justify="center" align="center">
                <AlignCenterOutlined />
              </Flex>
            </Button>
          </Dropdown>
        </Flex>

        <Flex
          justify="flex-start"
          align="center"
          // gap="small"
          style={{
            border: "2px solid black",
            width: "100%",
          }}
        >
          <Flex
            justify="center"
            align="center"
            style={{
              border: "2px solid black",
            }}
          >
            RESTACKED
          </Flex>
        </Flex>

        <Flex
          justify="flex-start"
          align="flex-start"
          gap="small"
          style={{
            border: "2px solid orange",
            overflow: "auto",
            width: "100%",
            height: "auto",
          }}
        >
          <FeedCard />
          <FloatButton
          type="primary"
          icon={<PlusOutlined  />}
            style={{
              bottom: 70,
            }}
            className="addPostFloatbtn"
            onClick={() => console.log("onClick")}
          />
          {/* <Flex
            style={{
              marginTop: "4px",
              border: "2px solid blue",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
            }}
          >
            <Image
              height="40px"
              width="40px"
              preview={false}
              style={{
                borderRadius: "50%",
                // maxWidth: "100%",
                // maxHeight: "100%",
                // borderRadius:"16px"
              }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Flex>

          <Flex
            vertical
            justify="space-evenly"
            align="flex-start"
            gap="small"
            style={{
              border: "2px solid yellow",
              height: "auto",
              width: "100%",
            }}
          >
            <Flex
              justify="space-between"
              align="center"
              style={{
                border: "2px solid black",
                width: "100%",
              }}
            >
              <Flex
                gap="small"
                style={{
                  border: "2px solid black",
                }}
              >
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    border: "2px solid black",
                  }}
                >
                  <Text strong>Bill Bishop</Text>
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    border: "2px solid black",
                  }}
                >
                  <CheckCircleFilled />
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  style={{
                    border: "2px solid black",
                  }}
                >
                  8h
                </Flex>
              </Flex>
              <Flex
                justify="center"
                align="center"
                style={{
                  border: "2px solid black",
                }}
              >
                <Button type="text" shape="circle" icon={<DashOutlined />} />
              </Flex>
            </Flex>
            <Flex
              justify="flex-start"
              align="center"
              gap="small"
              style={{
                border: "2px solid black",
                width: "100%",
              }}
            >
              <Flex
                justify="center"
                align="center"
                style={{
                  border: "2px solid black",
                }}
              >
                Sinocism
              </Flex>
              <Flex
                justify="center"
                align="center"
                style={{
                  border: "2px solid black",
                }}
              >
                Subscribe
              </Flex>
            </Flex>
            <Flex
              style={{
                border: "2px solid black",
                width: "100%",
              }}
            >
              In just a week, more than 100,000 of you from around the world, in
              every time zone, signed up to subscribe to Zeteo. In just a week!
            </Flex>

            <Flex
              style={{
                border: "2px solid black",
                width: "100%",
              }}
            >
              Image/video
            </Flex>

            <Flex
              style={{
                border: "2px solid black",
                width: "100%",
              }}
            >
              {isTrue && (
                <Card
                  style={{
                    width: "100%",
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  // actions={[
                  //   <SettingOutlined key="setting" />,
                  //   <EditOutlined key="edit" />,
                  //   <EllipsisOutlined key="ellipsis" />,
                  // ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              )}
            </Flex>
            <Flex
              justify="space-around"
              align="center"
              style={{
                border: "2px solid black",
                width: "100%",
              }}
            >
              <Flex
                justify="center"
                align="center"
                style={{
                  border: "2px solid black",
                }}
              >
                <Button
                  type="text"
                  size="small"
                  // icon={<HeartOutlined style={{
                  //   display:"grid"
                  // }} />}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid pink",
                    borderRadius: "16px",
                  }}
                >
                  <HeartOutlined />
                  <Text
                    style={{
                      marginLeft: "2px",
                    }}
                  >
                    100
                  </Text>
                </Button>
              </Flex>
              <Flex
                style={{
                  border: "2px solid black",
                }}
              >
                <Button
                  type="text"
                  size="small"
                  // icon={<HeartOutlined style={{
                  //   display:"grid"
                  // }} />}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid pink",
                    borderRadius: "16px",
                  }}
                >
                  <CommentOutlined />
                  <Text
                    style={{
                      marginLeft: "2px",
                    }}
                  >
                    10
                  </Text>
                </Button>
              </Flex>
              <Flex
                style={{
                  border: "2px solid black",
                }}
              >
                <Button
                  type="text"
                  size="small"
                  // icon={<HeartOutlined style={{
                  //   display:"grid"
                  // }} />}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid pink",
                    borderRadius: "16px",
                  }}
                >
                  <SyncOutlined />
                  <Text
                    style={{
                      marginLeft: "2px",
                    }}
                  >
                    3
                  </Text>
                </Button>
              </Flex>
              <Flex
                style={{
                  border: "2px solid black",
                }}
              >
                <Button
                  type="text"
                  size="small"
                  // icon={<HeartOutlined style={{
                  //   display:"grid"
                  // }} />}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid pink",
                    borderRadius: "16px",
                  }}
                >
                  <UploadOutlined />
                  <Text
                    style={{
                      marginLeft: "2px",
                    }}
                  ></Text>
                </Button>
              </Flex>
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
