import { Button, Table, Input, Select } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import { API_URL } from "@/constants";

export async function getStaticProps() {
  try {
    let data = await fetch(API_URL);
    let userData = await data.json();
    return {
      props: { userData },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { userData: [] },
    }
  }

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
          {filteredData.map(({ name, email, id, username, phone, website }) => (
            <Table.Row key={id}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>
                <Link href={{ pathname: `/users/${id}`, query: { data: JSON.stringify({ name, username, email, phone, website }) } }}><Button bg="gray.600">View Details</Button></Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Layout >
  );
}
