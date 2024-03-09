import { Flex, Image, Card, Button, Avatar, Typography } from "antd";
import React from "react";
import {
  CheckCircleFilled,
  DashOutlined,
  SyncOutlined,
  CommentOutlined,
  UploadOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function FeedCard() {
  const { Meta } = Card;
  const { Text } = Typography;
  return (
    <>
      <Flex
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
          <Link to="https://abcnews.go.com/Politics/biden-laken-riley-murder-sotu/story?id=107912220" style={{
            width: "100%",
          }}>
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
          </Link>
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
      </Flex>
    </>
  );
}

export default FeedCard;
