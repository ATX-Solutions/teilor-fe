import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div<{
    padding?: number;
    display?: 'flex' | 'block';
    justifyContent?: 'center' | 'space-between';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
}>`
    display: ${(props) => props.display || 'block'};
    padding: ${(props) => props.padding ?? 16}px;
    min-width: 50%;
    align-items: ${(props) => props.alignItems || 'initial'};
    justify-content: ${(props) => props.justifyContent || 'initial'};

    @media (max-width: 890px) {
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    margin-bottom: 16px;
`;

export const Paragraph = styled.p`
    margin-bottom: 16px;
`;

export const Button = styled.button`
    color: #fff;
    padding: 8px 16px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0px 1px 2px ${(props) => props.theme.colors.primary};

    &:hover {
        color: #fff;
        cursor: pointer;
        border: 1px solid transparent;
        background: ${(props) => darken(0.1, props.theme.colors.primary)};

        &:disabled {
            cursor: not-allowed;
            background: transparent;
            color: ${(props) => props.theme.colors.disabled};
            border: 1px solid ${(props) => props.theme.colors.disabled};
        }
    }

    &:disabled {
        background: transparent;
        color: ${(props) => props.theme.colors.disabled};
        border: 1px solid ${(props) => props.theme.colors.disabled};
        box-shadow: none;
    }
`;

export const Input = styled.input`
    padding: 8px 16px;
    margin-right: 16px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin: 0;
        margin-bottom: 16px;
    }
`;

export const Alert = styled.div((props) => ({
    marginTop: '16px',
    color: '#fff',
    textAlign: 'center',
    padding: '8px 16px',
    background: props.theme.colors.error,
    borderRadius: props.theme.borderRadius,
    boxShadow: `0px 1px 2px ${props.theme.colors.error}`,
}));

export const List = styled.ul``;

export const ListElement = styled.li`
    margin-bottom: 8px;
`;
