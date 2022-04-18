import Image from 'next/image';
import { useState } from 'react';

import { axiosInstance } from '../../helpers/axios';
import { ApiResponse } from '../../utils/interfaces/api';
import { ProducRowResponse, ProductResponse } from './interfaces';
import { Alert, Button, Form, Input, List, ListElement, Paragraph, Title, Wrapper } from '../../components/UI';

const Product = () => {
    const [value, setValue] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [stockList, setStockList] = useState<ProducRowResponse[]>([]);

    const fetchStock = async (e: any) => {
        e.preventDefault();

        setLoading(true);
        setError(null);
        setStockList([]);

        try {
            const { data } = await axiosInstance.get<Omit<ApiResponse, 'data'> & { data: ProductResponse }>(
                '/products/54270',
                {
                    params: {
                        email,
                    },
                    headers: {
                        Authorization: `Bearer ${value}`,
                    },
                },
            );

            setStockList(data.data.rows);
            setLoading(false);
            setValue('');
            setEmail('');
        } catch (e) {
            console.error(e);
            setError('Something went wrong. Please try again later.');
            setLoading(false);
        }
    };

    return (
        <Wrapper display='flex'>
            <Wrapper as='section' display='flex' alignItems='flex-start' justifyContent='center'>
                <Image width={500} height={500} alt='Placeholder' src='https://via.placeholder.com/500' />
            </Wrapper>

            <Wrapper>
                <Title>PRODUCT TITLE</Title>
                <Title as='h2'>XXXX RON</Title>
                <Title as='h3'>Product Description:</Title>

                <Paragraph>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using `Content here, content here`, making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for `lorem ipsum` will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </Paragraph>

                <Wrapper padding={0}>
                    <Form onSubmit={fetchStock}>
                        <Input
                            placeholder='Token'
                            type='text'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Input
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button disabled={!value || !email} type='submit'>
                            See product availability
                        </Button>
                    </Form>
                </Wrapper>

                {loading ? <Paragraph>Loading...</Paragraph> : null}

                {error ? <Alert>{error}</Alert> : null}

                <Wrapper>
                    <List>
                        {stockList.map((row, index) => (
                            <ListElement key={index}>
                                {row.oras}: {row.magazin} - {row.adresa}
                            </ListElement>
                        ))}
                    </List>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default Product;
