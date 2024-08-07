<template>
  <div class="app">
    <h1>숫자 카운터</h1>
    <div class="counter">
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
    <button @click="createCoupon">쿠폰생성</button>
    
    
    <table>
      <thead>
        <tr>
            <th>버노</th>
          <th>ID</th>
          <th>쿠폰 code</th>
          <th>used</th>
          <th>user_id</th>
          <th>post</th>
          <th>dateCreate</th>
          <th>dateUsed</th>
          <th>삭제</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(coupon, index) in couponData" :key="index">
  <td>{{ index + 1 }}</td>
  <td>{{ coupon.id }}</td>
  <td>{{ coupon.code }}</td>
  <td>{{ coupon.used }}</td>
  <td>{{ coupon.user_id }}</td>
  <td>{{ coupon.post }}</td>
  <td>{{ coupon.dateCreate }}</td>
  <td>{{ coupon.dateUsed }}</td>
  <td>
    <button @click="deleteCoupon(index)">삭제</button>
  </td>
</tr>
</tbody>
    </table>



  </div>
</template>

<script>
import { createCoupon, getAllCoupons, deleteCoupon } from '@/services/coupons'

export default {
  data() {
    return {
      count: 0,
      couponData: null
    };
  },
  created() {
    getAllCoupons().then((res) => {
      this.couponData = res
    })
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    async createCoupon() {
  try {
    const post = {
      count: this.count,
    };
    
    // Create a new coupon and await the response
    await createCoupon(post);
    
    // After successfully creating the coupon, update the couponData
    // by fetching the updated list of coupons
    const updatedCouponData = await getAllCoupons();
    this.couponData = updatedCouponData;
  } catch (error) {
    console.error('Error creating coupon:', error);
    throw error;
  }
},
async deleteCoupon(index) {
    try {
      const couponToDelete = this.couponData[index];
      
      // 서버에서 쿠폰 삭제
      await deleteCoupon(couponToDelete.id); // 쿠폰을 서버에서 삭제하는 함수 (구현 필요)
      
      // 클라이언트에서 쿠폰 삭제
      this.couponData.splice(index, 1);
    } catch (error) {
      console.error('Error deleting coupon:', error);
      throw error;
    }
  },
  },
};
</script>

<style scoped>
.app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

button {
  font-size: 14px;
  padding: 0 16px;
  height: 40px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

span {
  font-size: 36px;
  margin: 0 20px;
}
td {
    font-size: 12px;
    padding: 4px 4px;

}
</style>
