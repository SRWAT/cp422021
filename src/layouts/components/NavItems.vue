<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Point of Sale',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'โต๊ะอาหาร',
      icon: 'mdi-table-account',
      to: '/tables',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'จองคิว',
      icon: 'mdi-human-queue',
      to: '/queue',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'เมนูอาหาร',
      icon: 'mdi-food',
      to: '/menu',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'สต็อกสินค้า',
      icon: 'mdi-package-variant',
      to: '/stock',
    }"
  />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'การเงิน',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'รายรับ',
      icon: 'mdi-cash-plus',
      to: '/income',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'รายจ่าย',
      icon: 'mdi-cash-minus',
      to: '/expend',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'ธุรกรรมย้อนหลัง ',
      icon: 'mdi-swap-horizontal',
      to: '/transaction',
    }"
  />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'ผู้ดูแลระบบ',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'ผู้ใช้งาน',
      icon: 'mdi-account',
      to: '/users',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'ตั้งค่าระบบ',
      icon: 'mdi-cogs',
      to: '/setting',
    }"
  />

</template>
