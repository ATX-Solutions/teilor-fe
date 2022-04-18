import styled from 'styled-components';

export const Wrapper = styled.div<{
    padding?: number;
    display?: 'flex' | 'block';
    justifyContent?: 'center' | 'space-between';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
}>`
    display: ${(props) => props.display || 'block'};
    padding: ${(props) => props.padding ?? 16}px;
    margin-bottom: 16px;
    min-width: 50%;
    align-items: ${(props) => props.alignItems || 'initial'};
    justify-content: ${(props) => props.justifyContent || 'initial'};

    @media (max-width: 890px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2``;

export const Paragraph = styled.p``;

export const Button = styled.button`
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid red;
    background: transparent;

    &:hover {
        cursor: pointer;
        border: 1px solid transparent;
        background: red;
        color: white;

        &:disabled {
            color: rgba(16, 16, 16, 0.3);
            cursor: not-allowed;
            border: 1px solid gray;
            background: transparent;
        }
    }

    &:disabled {
        border: 1px solid gray;
        background: transparent;
    }
`;

export const Input = styled.input`
    padding: 8px 16px;
    margin-right: 16px;
    border-radius: 8px;
    border: 1px solid black;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin: 0;
        margin-bottom: 16px;
    }
`;
