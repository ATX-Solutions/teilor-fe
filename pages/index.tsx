import Image from 'next/image';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div<{ display?: 'flex' | 'block' }>`
    display: ${(props) => props.display || 'block'};
    padding: 20px;
`;

const Title = styled.h2``;
const Paragraph = styled.p``;
const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid red;
    background: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const Home: NextPage = () => {
    return (
        <Wrapper display='flex'>
            <Wrapper as='section'>
                <Image width={500} height={500} alt='Placeholder' src='https://via.placeholder.com/500' />
            </Wrapper>
            <Wrapper>
                <Title>PRODUCT TITLE</Title>
                <Title>XXXX RON</Title>
                <Title>Product Description:</Title>
                <Paragraph>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </Paragraph>
                <Button>See stock </Button>
            </Wrapper>
        </Wrapper>
    );
};

export default Home;
