import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  margin: 0;
`;

const About = () => {
  return (
    <Container>
      <Content>
        <Text>
          Our solution to building FEFU-based community
        </Text>
      </Content>
    </Container>
  );
};

export default About;