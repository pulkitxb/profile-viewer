import { Stack, Card } from '@chakra-ui/react';
import { DataListItem, DataListRoot } from "@/components/ui/data-list"
import React from 'react';
import Layout from "../../components/Layout"

export async function getServerSideProps(context) {
  const { id } = context.params;
  let data = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  let userData = await data.json();
  return {
    props: { userData },
  };
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