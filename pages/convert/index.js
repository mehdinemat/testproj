import MainLayout from "@/components/mainLayout";
import TableComponent from "@/components/tableComponent";
import { HStack, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { GrStorage } from "react-icons/gr";
import { IoPlay, IoTrash } from "react-icons/io5";
import { MdDateRange, MdKeyboardVoice } from "react-icons/md";


const Index = () => {

  const data = useMemo(
    () => [
      {
        id: 1, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'F. Scott Fitzgerald', year: 1925, size: 200, name: 'test', mission: <HStack>
          <IconButton icon={<IoPlay />} bgColor={'gray.200'} color={'blue.400'} />
          <IconButton icon={<IoTrash />} bgColor={'gray.200'} color={'red.400'} />
        </HStack>
      },
      {
        id: 2, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'Harper Lee', year: 1960, size: 144, name: 'test', mission: <HStack>
          <IconButton icon={<IoPlay />} bgColor={'gray.200'} color={'blue.400'} />
          <IconButton icon={<IoTrash />} bgColor={'gray.200'} color={'red.400'} />
        </HStack>
      },
      {
        id: 3, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'تست', year: 1949, size: 124, name: 'test', mission: <HStack>
          <IconButton icon={<IoPlay />} bgColor={'gray.200'} color={'blue.400'} />
          <IconButton icon={<IoTrash />} bgColor={'gray.200'} color={'red.400'} />
        </HStack>
      },
      {
        id: 4, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'Jane Austen', year: 1813, size: 124, name: 'test', mission: <HStack>
          <IconButton icon={<IoPlay />} bgColor={'gray.200'} color={'blue.400'} />
          <IconButton icon={<IoTrash />} bgColor={'gray.200'} color={'red.400'} />
        </HStack>
      },
      {
        id: 5, title: 'خطبه نماز جمعه پردیسان ۱۴۰۳/۱۲/۱۰', author: 'J.D. Salinger', year: 1951, size: 524, name: 'test', mission: <HStack>
          <IconButton icon={<IoPlay />} bgColor={'gray.200'} color={'blue.400'} />
          <IconButton icon={<IoTrash />} bgColor={'gray.200'} color={'red.400'} />
        </HStack>
      }
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
            <MdKeyboardVoice style={{ marginRight: '5px' }} />
            <Text> عنوان صوت</Text>
          </HStack>
        ),
        accessor: 'title'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            {/* <MdKeyboardVoice style={{ marginRight: '5px' }} /> */}
            <Text> نام فایل</Text>
          </HStack>
        ),
        accessor: 'name'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            <MdDateRange style={{ marginRight: '5px' }} />
            <Text>تاریخ</Text>
          </HStack>
        ),
        accessor: 'author'
      },
      {
        Header: () => (
          <HStack style={{ display: 'flex', alignItems: 'center' }}>
            <GrStorage style={{ marginRight: '5px' }} />
            <Text>حجم فایل</Text>
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
          <Tab>متن صوت</Tab>
          <Tab>کلمات کلیدی صوت</Tab>
          <Tab>موجودیت های اسمی صوت</Tab>
          <Tab>موضوعات صوت</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableComponent columns={columns} data={data} />
          </TabPanel>
          <TabPanel>
            <TableComponent columns={columns} data={data} />
          </TabPanel>
          <TabPanel>
            <TableComponent columns={columns} data={data} />
          </TabPanel>
          <TabPanel>
            <TableComponent columns={columns} data={data} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  )
}

export default Index
