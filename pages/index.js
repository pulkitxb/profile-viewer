import { Button, Table, Input, Select } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

export async function getServerSideProps() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let userData = await data.json();
  return {
    props: { userData },
  };
}

export default function Home({ userData }) {
  const [filteredData, setFilteredData] = useState(userData);

  return (
    <Layout showSearch={true} setFilteredData={setFilteredData} userData={userData} filteredData={filteredData}>
      <Table.Root size="lg" interactive variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Email</Table.ColumnHeader>
            <Table.ColumnHeader></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredData.map(({ name, email, id }) => (
            <Table.Row key={id}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>
                <Link href={`/users/${id}`}><Button bg="gray.600">View Details</Button></Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Layout >
  );
}
