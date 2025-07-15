<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";
import { useTableStore } from '@/store/table';

const tableStore = useTableStore();

const reserveTable = (table) => {
  table.status = 'Reserve'
  table.checkin = new Date().toLocaleTimeString();
  selectedTableId.value = table.id;
};

const resetTable = (table) => {
  table.status = 'Ready';
  table.checkin = null;
  // ถ้ามี field เช่น table.users หรือ table.total ก็รีเซ็ตได้:
  table.users = 0;
  table.total = 0;
};

</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>โต๊ะในร้าน</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะทั้งหมด"
            :stats="10"
            unit="ตัว"
            icon="mdi-table"
            color="primary"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะว่าง"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-plus"
            color="success"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="ใช้งานอยู่"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-account"
            color="warning"
          />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn                
              class="fill-height"
              variant="text"
              block
              text
            >
              <VIcon>mdi-plus</VIcon>
              เพิมโต๊ะใหม่
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  <VCard class="mt-8">
    <VCardText>
<VRow>
    <VCol v-for="table in tableStore.tables" :key ="table.id" cols="3" >
    <template v-if="table.status === 'Reserve'">
        <TableInfoCard :table="table" @pay="resetTable(table)"/>
    </template>

    <template v-else>
        <VBtn
          @click="reserveTable(table)"
          size= "x-large" 
          color="primary"
          block
          height="200"
          class="text-h6"
        >
          <VIcon left class="mr-2" size="40">mdi-table-chair</VIcon>
          {{ table.name }} - {{ table.status }}
        </VBtn>
      </template>
    </VCol>
            
 </VRow>
    </VCardText>
  </VCard>
</template>
