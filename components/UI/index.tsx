import styled from 'styled-components';

export const Wrapper = styled.div<{ display?: 'flex' | 'block' }>`
    display: ${(props) => props.display || 'block'};
    padding: 20px;
`;

export const Title = styled.h2``;

export const Paragraph = styled.p``;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid red;
    background: transparent;

    &:hover {
        cursor: pointer;
        border: 1px solid transparent;
        background: red;
        color: white;

        &:disabled {
            cursor: not-allowed;
        }
    }
`;

export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 10px;
    margin-right: 20px;
`;
