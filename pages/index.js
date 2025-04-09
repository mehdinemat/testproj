import MainLayout from "@/components/mainLayout";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from 'next/router';
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menuList = [
  { title: 'صفحه اصلی', icon: <MdKeyboardVoice fontSize={'18px'} />, link: 'audio' },
  { title: 'تصویر به متن', icon: <IoDocuments fontSize={'18px'} /> },
  { title: 'صوت به متن', icon: <FaHeadphonesAlt fontSize={'18px'} /> },
  // { title: 'ارتباط دادن نماز جمعه و حاکمیت', icon: <FaPrayingHands fontSize={'18px'} /> },
  // { title: 'صفحه مسئولین', icon: <BsFillPersonFill fontSize={'18px'} /> },
  // { title: 'بانک اطلاعات مسائل مربوط نماز جمعه', icon: <IoFileTrayStacked fontSize={'18px'} /> },
  // { title: 'توصیف خطبه', icon: <FaFile fontSize={'18px'} /> },
]

export default function Home({ children }) {

  const router = useRouter()

  const handleButtonClick = (link) => {
    router.replace(link)
  }

  return (
    <MainLayout>
    </MainLayout>
  );
}
