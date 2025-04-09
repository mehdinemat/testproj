import MainLayout from "@/components/mainLayout";
import TableComponent from "@/components/tableComponent";
import { HStack, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFileTray } from "react-icons/io5";


const Index = () => {

  const data = useMemo(
    () => [
      { id: 1, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'F. Scott Fitzgerald', year: 1925, size: 200, mission: <IconButton icon={<IoFileTray />} bgColor={'gray.200'} color={'blue.400'} /> },
      { id: 2, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'Harper Lee', year: 1960, size: 144, mission: <IconButton icon={<IoFileTray />} bgColor={'gray.200'} color={'blue.400'} /> },
      { id: 3, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'تست', year: 1949, size: 124, mission: <IconButton icon={<IoFileTray />} bgColor={'gray.200'} color={'blue.400'} /> },
      { id: 4, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'Jane Austen', year: 1813, size: 124, mission: <IconButton icon={<IoFileTray />} bgColor={'gray.200'} color={'blue.400'} /> },
      { id: 5, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'J.D. Salinger', year: 1951, size: 524, mission: <IconButton icon={<IoFileTray />} bgColor={'gray.200'} color={'blue.400'} /> }
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            ردیف
          </div>
        ),
        accessor: 'id'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            <Text>شهر نماز جمعه</Text>
            <IoIosArrowDown style={{ marginRight: '5px' }} />
          </HStack>
        ),
        accessor: 'title'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            <Text>امام جمعه</Text>
            <IoIosArrowDown style={{ marginRight: '5px' }} />
          </HStack>
        ),
        accessor: 'author'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            <Text>تاریخ ارسال</Text>
            <IoIosArrowDown style={{ marginRight: '5px' }} />
          </HStack>
        ),
        accessor: 'size'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            <Text>عملیات</Text>
          </HStack>
        ),
        accessor: 'mission'
      },
    ],
    []
  );


  return (
    <MainLayout>
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>اطلاعات کلی</Tab>
          <Tab>ریز اطلاعات</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableComponent columns={columns} data={data} />

          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  )
}

export default Index
