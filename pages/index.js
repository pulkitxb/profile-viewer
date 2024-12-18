import { Button, Table } from "@chakra-ui/react";
import Link from "next/link";

export async function getServerSideProps() {
  let data = await fetch('https://jsonplaceholder.typicode.com/users');
  let userData = await data.json();
  return {
    props: { userData },
  };
}

export default function Home({ userData }) {

  return (
    <Table.Root size="lg" interactive variant="outline">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Email</Table.ColumnHeader>
          <Table.ColumnHeader></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {userData.map(({ name, email, id }) => (
          <Table.Row key={id}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell><Button><Link href={`/users/${id}`}>View Details</Link></Button></Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
