<template>
  <div class="container has-text-centered mt-5">
    <p class="title is-size-4">Aquí encontrarás el historial de las canciones subidas en el sistema</p>

    <div class="columns">
      <div class="column is-10 is-offset-1">
        <b-table :data="data" :columns="columns"></b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistorialPage',
  data() {
    return {
      data: [
        {
          id: '1',
          name: 'Prueba 1'
        },
        {
          id: '2',
          name: 'Prueba 2'
        },
        {
          id: '3',
          name: 'Prueba 3'
        }
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          centered: true
        },
        {
          field: 'name',
          label: 'Nombre',
          centered: true
        }
      ]
    }
  }
}
</script>
