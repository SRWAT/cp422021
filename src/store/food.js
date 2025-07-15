import Beer from '@/assets/images/food/Beer.jpg';
import CrabRice from '@/assets/images/food/CrabRice.jpg';
import Ice from '@/assets/images/food/Ice.jpg';
import Mhala from '@/assets/images/food/Mhala.jpg';
import Padthai from '@/assets/images/food/Padthai.jpg';
import Pork from '@/assets/images/food/pork.jpg';
import PorkRice from '@/assets/images/food/PorkRice.jpg';
import sauce1 from '@/assets/images/food/sauce1.jpg';
import sauce2 from '@/assets/images/food/sauce2.jpg';
import ShrimpRice from '@/assets/images/food/ShrimpRice.jpg';
import Tomyum from '@/assets/images/food/Tomyum.jpg';
import Water from '@/assets/images/food/Water.jpg';

import { defineStore } from "pinia";
export const useFoodStore = defineStore({
  id: "food",
  state: () => {
    return {
      foods: [
        {    
          name: 'บุฟเฟต์อาหาร 1 คน',
          price: 199,
          type: 'food',
          image: Pork,
        },
        {    
          name: 'น้ำซุปหมาล่า',
          price: 30,
          type: 'sauce',
          image: Mhala,
        },
        {    
          name: 'น้ำซุปต้มยำ',
          price: 30,
          type: 'sauce',
          image: Tomyum ,
        },
        {    
          name: 'น้ำจิ้มตีลังกาได้',
          price: 30,
          type: 'sauce',
          image: sauce1,
        },
        {    
          name: 'น้ำจิ้มพิเศษ',
          price: 50,
          type: 'sauce',
          image: sauce2,
        },
        {    
          name: 'ข้าวผัดหมู',
          price: 50,
          type: 'food',
          image: PorkRice,
        },
        {    
          name: 'ผัดไทยกุ้งสด',
          price: 50,
          type: 'food',
          image: Padthai,
        },
        {    
          name: 'ข้าวผัดกุ้ง',
          price: 50,
          type: 'food',
          image: ShrimpRice,
        },
        {    
          name: 'ข้าวผัดปู',
          price: 50,
          type: 'food',
          image: CrabRice,
        },
        {    
          name: 'น้ำเปล่า',
          price: 10,
          type: 'drink',
          image: Water,
        },
        {
          name: 'เบียร์',
          price: 50,
          type: 'drink',
          image: Beer,
        },
        {    
          name: 'น้ำแข็ง',
          price: 5,
          type: 'drink',
          image: Ice,
        },
      ],
    }
  },
  actions: {
    
  }
});
