import { Stack, Card } from '@chakra-ui/react';
import { DataListItem, DataListRoot } from "@/components/ui/data-list"
import React from 'react';
import Layout from "../../components/Layout"
import { useRouter } from 'next/router';
import { API_URL } from '@/constants';

export async function getServerSideProps(context) {
  const { query, params } = context;

  let userData = query.data ? JSON.parse(query.data) : null;
  try {
    if (!userData) {
      let data = await fetch(`${API_URL}/${params.id}`);
      userData = await data.json();
    }
    return {
      props: { userData },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { userData: {} },
    }
  }

}

const page = ({ userData }) => {

  const { name, username, email, phone, website } = userData;
  return (
    <Layout showSearch={false}>
      <Card.Root>
        <Card.Header>
          <Card.Title>User Details</Card.Title>
        </Card.Header>
        <Card.Body>
          <Stack>
            <DataListRoot size="lg" orientation="horizontal">
              <DataListItem label="Name" value={name} />
              <DataListItem label="Username" value={username} />
              <DataListItem label="Email" value={email} />
              <DataListItem label="Phone" value={phone} />
              <DataListItem label="Website" value={website} />
            </DataListRoot>
          </Stack>
        </Card.Body>
      </Card.Root>
    </Layout>
  )
}

export default page