import './App.css';
import Navbar from './navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import SecondNav from './secondnavbar'
import Fulldiv from './fulldiv';
import Sliderimg from './imgslider';
// import ProductSlider from './productslider';
import Moretoshop from './moretoshop';
import Moretoshopsecond from './moretoshopsecond';
import Moretoshopthird from './moretoshopthird';
import Dealsonnoon from './dealsonnoon';
import Imgslidertwo from './imgslidertwo';
import Cards from './cateproduct';
import { useState } from 'react';
import Fulldivtwo from './fulldivtwo';
import Cardtwo from './cateproducttwo';
import Footer from './footer';



function App() {

  const [product, setProduct] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/49e75f3c-9a36-415b-b8d7-e8c8ae5d3935.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/d90bded8-b5c1-4568-8fde-954fbd45209e.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/aa68e7fc-af1d-4505-b259-c07df4a2e17f.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/082497d2-c025-4899-8e18-be47058122e7.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/c6ccf853-57a2-4db3-8504-a52106b033bf.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/fcbe5805-4060-4bad-bc3e-e2c4fd793ae8.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0002/assets/2f62d319-46bd-4edb-aee4-0a9cbc179983.png",
    },
  ])

  const [menproduct, setmenProduct] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/7d28bb5c-d91f-4502-b697-821b5122c602.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2f8fb241-c795-4fa1-bf9c-8e324aa13947.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/292c46ea-5dd6-45e2-9d67-1d859c2a096e.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/083d80cd-97f2-4e02-99eb-cca3249dfd02.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/10af1000-28ba-4a13-b7b3-09193aa9f7c1.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2dab9287-80b7-4283-8d7e-af19cbda00b0.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/4a37271a-8874-4f00-ad4f-c7024963078a.png",
    },
  ])

  const [kidproduct, setkidProduct] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2a31766f-66b2-47ee-bbd6-fde9f51f7a57.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/d10bc7dd-e6b6-49c7-a284-df840480856d.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/1c2c6d3d-b143-4ab9-a360-db57985041c1.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/f915d216-aa0f-4290-a129-e3e6986f00f8.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/132ba8ff-8caa-47b0-9640-c46c94ce379b.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/ebea4373-9a70-405e-80b1-0c85425e6ae5.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/26f2807b-d8a8-4494-869c-2eb4e559287f.png",
    },
  ])

  const [electronics, setelectronics] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png",
    },
  ])

  const [mobile, setmobile] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/b215cb83-5249-478a-b1b7-4f9630dfd26e.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/eaaedd8a-ac86-4242-b6d9-0e0e51030124.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/f0e5c9e4-0e5f-4f27-98f5-de983510bb54.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/3ad9fb3d-8efe-427a-81e1-08908c85fbb0.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/d832d95a-d1e2-47cc-852a-3197886128ac.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/a8aa2523-0bc6-41cf-9d49-be46f899cdf7.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/790df29c-294c-4c06-b87e-114c560295e6.png",
    },
  ])

  const [laptop, setlaptop] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/fcd49457-e3cb-4543-9a9f-e6c133ec5789.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/88778bd1-0351-480f-8b30-62d9f97f2f12.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/0b088ec6-42e1-4b47-bc1d-18efb2f0211b.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/a8df0bd6-b178-4707-98bf-fab7e9e57793.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/7569239c-ccd8-4d23-a6ea-46768a59ce01.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/de1d933f-8266-4da2-9010-59406e1b37ab.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/b66575de-6208-4ee3-8a7b-ee85fa5b5d9e.png",
    },
  ])

  const [beauty, setbeauty] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/b05362c8-ea30-44ee-b803-4fa51619d7c8.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/39f6b0a1-c308-4915-9b45-e3cf13b4a66b.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/1be76b30-7a10-4524-b753-53372d9e9dac.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/82ff0c46-1e81-49d1-856e-67bcd8c838b0.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/da5ec41a-08be-4461-8b79-3b8540c2390b.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/8e45721d-23b8-404e-98cb-f4eea525a3d1.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/67aee30f-6ac8-4031-997f-f8d6e05b9ba7.png",
    },
  ])

  const [fragrance, setfragrance] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/6c0cfbbd-fcc0-42dd-adb6-aa48ee3fee81.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/c59fa687-3a7b-4706-9700-78ee577a94f6.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/142eb0dc-ab21-4be6-ab54-486450d4fbc2.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/172442ba-1c1d-4f8f-9663-1a1d94c2a12e.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/53ec2f66-60ac-43ea-8fdf-efa57e9b8081.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/b813f8a3-b407-489a-aff9-05e048bd3f40.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/58436fde-5d2e-44fa-9f83-e0b5942894e9.png",
    },
  ])

  const [kitchen, setkitchen] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/d682c6c5-f0b7-4226-8629-9f1c3cfa8197.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/09a2d5b8-7f8a-4bc2-8d6f-552754213f00.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/20d38238-13b6-4458-be7f-64da085647dd.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/d25a389b-384e-4197-b52c-5a4513cbf86c.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2d60a02e-d7f1-490b-a9e4-99cdb2050b08.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/08c580d4-81fb-4aa7-bb49-cf691dd03edf.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/b38dfc3d-a8df-43b5-934e-d6b56d552374.png",
    },
  ])

  const [home, sethome] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/643450ec-93ea-49dc-b435-e947729ee573.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/a96dc75d-709c-4819-a0d9-5518270cf8e2.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/78e88d7f-9c9f-436f-817c-372cb179b57d.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e34eeb0a-e6c0-4261-8c4d-0ce66f9532f9.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/c308ff50-6fe5-4fbe-99ee-0865b3832672.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/6d433b42-6781-4d4e-b90f-158bcfecdd4c.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/84b28bec-46b7-44ab-92c8-5c14544ec4c7.png",
    },
  ])

  const [baby, setbaby] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e3986aea-d297-44d2-8f93-cf7f988e4b76.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/4345d568-b507-482a-bf45-28d21ab58cd1.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/5c676f61-67ec-434c-8ead-38e66349c7c1.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/7ed3ea07-c80d-478f-8885-c0542dd25e92.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/46049e97-ebc6-4808-be6d-7e61565473d0.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/213e1da9-1fcf-41d4-8cc3-3e89bf25718a.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/ea06bd9f-ede4-4333-9cf5-ee40fec5ac4b.png",
    },
  ])

  const [toys, settoys] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e0fd71a3-c34c-4b22-bcba-b2dca002304f.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e638927f-2218-4f17-8ee7-72c2915a8ed2.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/06701a8e-4c34-4dcd-909c-9e3faa9a557f.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/3b41a381-e095-49cb-8f1c-4bdc81342c45.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/0f50672c-6570-43af-8605-825f14df6060.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/1aadb8e2-4186-4bdf-ad76-994010c2d9c5.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/8f2d04ae-6377-419e-8502-4e1756b60717.png",
    },
  ])

  const [sports, setsports] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/a1751db5-9eb1-4698-9b3b-dbec217866e9.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/c662584f-85f0-47d4-b683-6f6668e8e6d0.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/67509abd-0ba0-406d-ac4c-fdea04428fd6.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/9a1ac2bc-b45c-472d-984e-879e3ac30f0a.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/9890809c-8748-47ae-bd7a-aa4c256fe23c.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/892e6a51-75a3-47af-b751-f701d725649d.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e56b1010-7dda-4a4e-aad2-cc6a90eaa562.png",
    },
  ])

  const [nonbrand, setnonbrand] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/a75f02c2-7836-4ac7-a157-dbdc27319899.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/f3606787-0e4e-484a-a0c1-08510b282c81.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/034332ba-2d02-42e4-a9bf-7dec71d2d580.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/40d9e9c7-3f90-40bb-b470-1f65e0e5067e.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/6339ae7e-174a-4ee6-8420-8e92c35d3389.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/dcb52d83-38e3-47d7-abde-2e859fa89f96.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/ecd54553-f744-409b-bf9a-adb809050cf7.png",
    },
  ])

  const [watch, setwatch] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/15993fa5-bc8f-4411-83b7-8c4d64e00ffb.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/d3440ce6-ddcc-4ab3-9611-819ef6e9d878.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/abb677d6-f951-44da-833f-cf5f908a5e52.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/7deafa2f-95f4-4a87-b058-f47876766440.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/fe3706ff-d6c3-4af0-beb5-66329a74eca3.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/a1abae54-ca39-4d6e-b952-eaa1c93a9076.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/69112999-445e-456d-b822-3603ec8b8e42.png",
    },
  ])

  const [eyewear, seteyewear] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/67946183-6f76-4e48-b6ef-52918050e052.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/83333339-1a12-40f0-b7f1-e2076533fafc.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/4eb68d86-48af-4d62-b312-8e06bae8cbeb.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2a0b3a99-61e6-4546-9d37-65266e3c27c4.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/6f2ba4e5-328c-44a4-a51d-ee8ed970e5f7.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e3a929cd-fead-466d-84d1-69a6c06b0323.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/8500fba8-7f92-435b-9910-f5ace8c3d87d.png",
    },
  ])

  const [nutri, setnutri] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/29f4534d-ff39-4d68-a7a7-1682d4980222.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/82bbf015-30d0-473f-a9b5-78759715095c.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/2358c3de-2488-4b0d-9d0b-798306dfcc88.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/d08c9c83-1523-4a3b-bea4-846117d59062.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/99c9dba3-88ff-4795-ac56-77e8cd0abc89.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/ddcd13da-85d9-41e9-a013-6ec37ed091b3.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/fb5bf7c3-3851-40ca-ad6d-0c3dd7432cd9.png",
    },
  ])

  const [furniture, setfurniture] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/41472d5e-fc81-40df-a214-53718ca74381.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/beb47591-c201-44f8-9a6f-8737ce23899e.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/30fdac46-5a76-4088-8fbf-445e3127ee3b.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/6c5fa568-0f00-4ce1-abea-2eeb0416b23d.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/5071dfed-3310-498d-a952-2a73ff70277d.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/25fe7109-782e-46f9-a957-ac3c938e3f93.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/1646f96a-7d58-4027-af4a-c1b1f9f86899.png",
    },
  ])

  const [stationaray, setstationary] = useState([
    {
      "id": 1,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/c0be44eb-aa05-4d2e-8176-1be62115ff6c.png",
    },
    {
      "id": 2,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/e2a6181e-7b12-457a-aa2a-315f3de7cfa5.png",
    },
    {
      "id": 3,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/9b05681e-f1a0-41f4-b5a2-d62081732d3c.png",
    },
    {
      "id": 4,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/920ac5a7-f90b-4e23-b00d-19490016dd49.png",
    },
    {
      "id": 5,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/6d85739b-da87-4552-9933-6a3fa2ca802f.png",
    },
    {
      "id": 6,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/67a71e54-5384-4d10-9b9e-f0cc4974bfbf.png",
    },
    {
      "id": 7,
      "image": "https://f.nooncdn.com/mpcms/EN0001/assets/37897142-64e0-4a63-96bb-3e96b6edff05.png",
    },
  ])

  return (
    <div className="App back" >
      <Navbar />
      <SecondNav />
      <Fulldiv image={"https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"} />
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 200px 200px' }}>
        <Sliderimg />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png" height="200px"
          alt='with slider 1' />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" alt="with slider"
          height="200px" />
      </div>
      {/* <ProductSlider/> */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <Moretoshop />
        <Moretoshopsecond />
        <Moretoshopthird />
      </div>
      <h3 style={{ marginRight: '70%' }}>Recommended for you</h3>

      <Dealsonnoon />
      <Imgslidertwo />
      <Fulldiv image={"https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg"} />
      <Fulldiv image={"https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif"} />

      <div style={{ backgroundColor: 'black' }}>
        <span style={{ fontWeight: 'bold', color: 'yellow', padding: '10px', fontSize: '40px' }}>50-80% OFF</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginTop: '5px' }}>SHOP NOW</button>
      </div>
      <div style={{ width: "100%", backgroundColor: "darkgrey", paddingLeft: '10px', paddingBottom: '10px' }}>
        <h1 style={{ fontWeight: 'bold', marginRight: '10px' }}>WOMEN FASHION</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {product.map(x => {
            return <Cards image={x.image} />
          })}
        </div>
      </div>

      <div style={{ backgroundColor: 'black' }}>
        <span style={{ fontWeight: 'bold', color: 'yellow', padding: '10px', fontSize: '40px' }}>50-80% OFF</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginTop: '5px' }}>SHOP NOW</button>
      </div>
      <div style={{ width: "100%", backgroundColor: "darkgrey", paddingLeft: '10px', paddingBottom: '10px' }}>
        <h1 style={{ fontWeight: 'bold', marginRight: '10px' }}>MEN'S FASHION</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {menproduct.map(x => {
            return <Cards image={x.image} />
          })}
        </div>
      </div>

      <div style={{ backgroundColor: 'black' }}>
        <span style={{ fontWeight: 'bold', color: 'yellow', padding: '10px', fontSize: '40px' }}>50-80% OFF</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'white', color: 'black', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginTop: '5px' }}>SHOP NOW</button>
      </div>
      <div style={{ width: "100%", backgroundColor: "darkgrey", paddingLeft: '10px', paddingBottom: '10px' }}>
        <h1 style={{ fontWeight: 'bold', marginRight: '10px' }}>KID'S FASHION</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {kidproduct.map(x => {
            return <Cards image={x.image} />
          })}
        </div>
      </div>

      <Fulldivtwo image={"https://f.nooncdn.com/mpcms/EN0001/assets/6e50943a-e936-495c-873c-86feef76f8f0.png"} />

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Electronics</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {electronics.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Mobile & Accessories</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {mobile.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Laptops & Accessories</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {laptop.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <Fulldiv image={"https://f.nooncdn.com/mpcms/EN0001/assets/139f8735-8378-436c-a658-9e2f2ea7ebba.gif"} />

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Beauty</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {beauty.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Fragrances</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {fragrance.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Home & Kitchen Favourites</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {kitchen.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Home Appliances</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {home.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Laptops & Accessories</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {beauty.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Baby must-haves</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {baby.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Toys</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {toys.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Sports & outdoor essentials</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {sports.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>noon brand favourites</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {nonbrand.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Watches</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {watch.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Eyewear</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {eyewear.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Health & Nutrition</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {nutri.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Furniture</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {furniture.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <div style={{ width: "100%", backgroundColor: "white", paddingLeft: '10px', paddingBottom: '30px', padding: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'black', padding: '15px', fontSize: '30px' }}>Stationary & office supplies</span>
        <button style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white', fontWeight: 'bold', padding: '10px', position: 'absolute', right: 20, marginBottom: '25px', 'padding-left': '5px', 'padding-right': '5px' }}>VIEW ALL</button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", }}>
          {stationaray.map(x => {
            return <Cardtwo image={x.image} />
          })}
        </div>
      </div>

      <Fulldiv image={"https://f.nooncdn.com/mpcms/EN0001/assets/8e4d7b89-40cf-4e18-a38d-c4f74927f5d4.jpg"} />

      <Footer />

    </div>
  );
}

export default App;
