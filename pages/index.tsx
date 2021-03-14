import Head from "../components/Head";
import { styled } from "../stitches.config";
import Image from "next/image";
import { Text } from "../components/Text";
import BackgroundParticle from "../components/Particles";
import React from "react";
import Stack from "../components/Stack";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";

const IndexPage = () => {
  return (
    <Head title="Ville Heikkilä">
      <BackgroundParticle />
      <Content>
        <Header>
          <Text type="h1">Ville Heikkilä</Text>
          <Stack dir="vertical" gap="lg">
            <div>
              <Avatar src="/avatar.jpeg" alt="avatar" width="300" height="300" />
            </div>

            <Stack dir="horizontal">
              <Text type="h3" as="p">
                Software Developer
              </Text>
              <Text type="h3" as="p">
                Technology Enthusiast
              </Text>
            </Stack>

            <Stack dir="horizontal" css={{ justifyContent: "center" }}>
              <GitHubLink />
              <LinkedInLink />
            </Stack>
          </Stack>
        </Header>
      </Content>
    </Head>
  );
};

const GitHubLink = () => <a href="https://github.com/villeheikkila"><GitHub /></a>
const LinkedInLink = () => <a href="https://www.linkedin.com/in/villejheikkila/"><LinkedIn /></a>

const Content = styled("div", {
  position: "relative",
  top: "4rem",
  left: "50%",
  width: "40rem",
  transform: "translateX(-50%)",
  backdropFilter: "blur(10px)",
  background: "white",
  borderRadius: "1rem",
  padding: "$lg $md",

  when: {
    bp1: {
      width: "90%",
    }
  }
});

const Header = styled("header", {
  display: "grid",
  textAlign: "center",
  justifyContent: "center",
});

const Avatar = styled(Image, { borderRadius: "9999px", });

export default IndexPage;
