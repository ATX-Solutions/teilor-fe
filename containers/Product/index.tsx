import Image from 'next/image';
import { useState } from 'react';

import { axiosInstance } from '../../helpers/axios';
import { ApiResponse } from '../../utils/interfaces/api';
import { ProducRowResponse, ProductResponse } from './interfaces';
import { Button, Input, Paragraph, Title, Wrapper } from '../../components/UI';

const Product = () => {
    const [value, setValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [stockList, setStockList] = useState<ProducRowResponse[]>([]);

    const fetchStock = async () => {
        setLoading(true);
        try {
            const { data } = await axiosInstance.get<Omit<ApiResponse, 'data'> & { data: ProductResponse }>(
                '/products/54270',
                {
                    headers: {
                        Authorization: `Bearer ${value}`,
                    },
                },
            );

            setStockList(data.data.rows);

            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

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
                    distribution of letters, as opposed to using `Content here, content here`, making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for `lorem ipsum` will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </Paragraph>

                <Input placeholder='Token' type='text' onChange={(e) => setValue(e.target.value)} />

                <Button disabled={!value} onClick={fetchStock}>
                    See stock
                </Button>

                {loading ? <p>Loading...</p> : null}

                <ul>
                    {stockList.map((row, index) => (
                        <li key={index}>
                            {row.oras}: {row.magazin} - {row.adresa}
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </Wrapper>
    );
};

export default Product;
